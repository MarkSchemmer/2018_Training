
import React from "react"
import './app.scss'
import todoStore from '../../flux/Store/todoStore/todoStore'
import * as todoActions from '../../flux/Actions/todoActions/todoActions'
import TodoItem from "../TodoApp/TodoItem/TodoItem"
import Footer from '../TodoApp/Footer/Footer'
const CHANGE_EVENT = 'change'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            completed_todos:[],
            uncompleted_todos:[],
            all_todos:[],
            todos : [],
            newTodo:'',
            which: true,
            _filter:'All'
        }

        this.deleteTodoById = this.deleteTodoById.bind(this)
        this.updateTodoById = this.updateTodoById.bind(this)
        this.toggleTodoCompletionById = this.toggleTodoCompletionById.bind(this)
        this.filterCompleted = this.filterCompleted.bind(this)
        this.filterUncompleted = this.filterUncompleted.bind(this)
        this.filterAll = this.filterAll.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
    }

    _getAllTodos(){
        todoStore.getAllTodos().then(({data}) => {
            this.setState( (prevState) =>  ({ todos: data, all_todos : data, _filter:prevState._filter}))
        })
    }

    componentWillMount(){
        todoStore.on('change', () => this._getAllTodos())
    }

    componentDidMount(){
        this._getAllTodos()
    }

    deleteTodoById(id){
        todoActions.deleteTodoById(id)
    }

    toggleTodoCompletionById(todo){
        let allTodos = this.state.todos.map(x => {
            if(x._id === todo._id)
                x.completed = !x.completed
            return x 
        })
        this.setState({todos:allTodos}, () => {
            todoActions.toggleTodoCompletionById(todo)
        })
    }

    updateTodoById(obj){
        todoActions.updateTodoById(obj)
    }

    createTodo(newTodo){
        todoActions.createTodo(newTodo)
    }

    _change(e){
        this.setState({ newTodo : e.target.value })
    }

    filterCompleted(){
        let completedTodos = this.state.all_todos.filter(x => x.completed)
            this.setState({ 
                todos : completedTodos,
                _filter:'Completed' })
    }

    filterUncompleted(){
          let uncompleted = this.state.all_todos.filter(x => x.completed===false)
           this.setState({ 
               todos : uncompleted,
               _filter:'Active' })
    }

    filterAll(){
        let allTodos = this.state.all_todos
        this.setState( { todos: allTodos, _filter:'All'})
    }

    clearCompleted() {
         let completed = this.state.todos.filter(x => x.completed)
         todoActions.removeCompleted(completed)
    }

    wasEnterPressed(e){
        if(e.charCode===13){
            let tempTodo = this.state.newTodo
            this.setState({ newTodo : ''}, () => {
                this.createTodo(tempTodo)
            })     
        }
    }

   toggleAllTodos(){
         let copy = this.state.which
         this.setState(prevState => ({
            todos:prevState.todos.map(x => {
                x.completed = copy
                return x
            }),
            which:!prevState.which
        }), () => {
            todoActions.toggleAllTodos(copy)
        })
    }

    

    render() {

        const styles = {
            textAlign:'center'
        }
        let todos
        switch(this.state._filter){
            case 'All' :
                todos = this.state.all_todos
            break 
            case 'Active' :
                todos = this.state.all_todos.filter(x => x.completed===false)
            break 
            case 'Completed' : 
                todos = this.state.all_todos.filter(x => x.completed)
            break 
        }

        return (
            <div style={styles}>
                <h1>todos</h1>
                <div className="todoapp">
                  <label onClick={() => this.toggleAllTodos() }  className="toggle-all">
                      <i  className="fas fa-chevron-down"></i>
                  </label>
                    <input 
                    type="text"
                    value={this.state.newTodo}
                    onChange={e => this._change(e)}
                    onKeyPress={e => this.wasEnterPressed(e)}
                    placeholder="What to do?"
                    className="new-todo" />

                      
                    <ul className="todo-list">
                            {todos.map(todoObj =>  
                            <TodoItem 
                             updateTodoById={this.updateTodoById}
                             toggleTodoCompetion={this.toggleTodoCompletionById}
                             deleteTodoById={this.deleteTodoById} 
                             key={todoObj._id}
                             {...todoObj} /> )}
                        <Footer itemsLeft={this.state.all_todos}
                                _filter={this.state._filter}
                                filterCompleted={this.filterCompleted}
                                filterUncompleted={this.filterUncompleted}
                                filterAll={this.filterAll}
                                clearCompletedFunc={this.clearCompleted}
                                clearCompleted={this.state.todos.some(x => x.completed===true)} />
                    </ul>
              
                </div>
      
            </div>
        );
    }
}



export default App;