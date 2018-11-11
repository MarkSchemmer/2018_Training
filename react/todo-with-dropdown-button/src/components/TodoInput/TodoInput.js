import React from 'react'
import TodoList from '../TodoList/TodoList'
import DropDownHeader from '../DropDownHeader/DropDownHeader'
import './TodoInput.css'
const ENTER = 13, DOWNARROW = 40, UPARROW = 38
class TodoInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newTodo : {val:'', _id : '', categorys:[] },
            TodoCategorey:[
             'Personal', 'Shopping', 'Work', 'Errands'
            ],
            Todos:[],
            showDropDown:false,
            inputIsFocused:false 
        }
        this.input = React.createRef()
        this._Refs = []
        this.nthIndex = 0
        this.tabChange = -1
        this.change = this.change.bind(this)
        this.addTag = this.addTag.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.removeHashFromString = this.removeHashFromString.bind(this)
        this.filterOrderOfTodoCategory = this.filterOrderOfTodoCategory.bind(this)
        this.focusOnTodoInList = this.focusOnTodoInList.bind(this)
        this.addTagAndRemoveHashString = this.addTagAndRemoveHashString.bind(this)
        this.cloneTodoDo = this.cloneTodoDo.bind(this)
        this.isTodoDefault = this.isTodoDefault.bind(this)
        this.preChange = this.preChange.bind(this)
    }

    componentDidMount(){
        window.Refs = this._Refs
    }

    preChange(e){
            let newValue = e.target.value
            let containsHash = newValue.includes('#')
            let copy 
            const {cloneTodoDo, isTodoDefault}=this
            isTodoDefault() ? copy = cloneTodoDo({ val : newValue, _id : Date.now() }) 
                            : copy = cloneTodoDo({ val : newValue })

            this.setState({showDropDown:containsHash, 
                           newTodo:copy}, () => this.change())
        }

    change(){
        if(this.state.showDropDown){
            let search = this.state.newTodo.val.split('#')[1]
            this.filterOrderOfTodoCategory(search)
        }
    }

    cloneTodoDo = (options={}) => Object.assign({}, this.state.newTodo, options)

    isTodoDefault(){
        const defaultNewTodo = {val:'', _id : '', categorys:[] }
        const isNewTodoNewAndBlank = JSON.stringify(this.state.newTodo)===JSON.stringify(defaultNewTodo)
        return isNewTodoNewAndBlank
    }

    addTagAndRemoveHashString(tag){
        const {removeHashFromString} = this
        let copy = removeHashFromString()
        this.setState({newTodo:copy, showDropDown:false}, () => {
                this.addTag(tag)
            })
    }

    focusOnTodoInList(){
       var buttons =  this._Refs
        .filter(todo => todo.ref!==null)
        .filter(todo=> todo.ref.style.visibility==="")
        buttons[this.nthIndex].ref.focus()
    }

    handleKeyUp(e,tag=null, _Ref=null){
        let newValue = this.state.newTodo.val
        if(this.state.showDropDown){
            if(e.keyCode === ENTER && !tag && this.state.inputIsFocused) {
                this.focusOnTodoInList()
            } else if(e.keyCode===DOWNARROW && !tag && this.state.inputIsFocused) {
                this.focusOnTodoInList()
            } else if(e.keyCode===ENTER && tag && _Ref.focused){
                this.addTagAndRemoveHashString(tag)
            }  else if(e.keyCode===UPARROW && _Ref!==null){
                if(this.nthIndex===0) {
                    this.input.focus() 
                 } else { 
                    if((this.nthIndex-1) >= 0){
                        this.nthIndex-=1
                        this.focusOnTodoInList()
                    }
                }
            } else if(e.keyCode===DOWNARROW && _Ref!==null){
                if((this.nthIndex+1) < this._Refs.length){
                    this.nthIndex+=1
                    this.focusOnTodoInList()
                }
            }
        } else if(e.keyCode===ENTER && newValue.length>4){
                this.addTodo(this.state.newTodo)
        }
    }

    filterOrderOfTodoCategory(keyword){
        const { TodoCategorey, newTodo } = this.state
        const whichButtonsYouHave = newTodo.categorys.map(x => x.name)
        let todos = TodoCategorey
        .map(x => x.toLowerCase())
        .filter(str => !whichButtonsYouHave.includes(str))

        if(this._Refs.every(_ => _.ref.style.visibility==="hidden")){
            TodoCategorey.forEach((item,index) => {
                this._Refs[index].ref.style.visibility = ""
                this._Refs[index].ref.style.display = ""
           })
        } else {
            todos.forEach((item,index) => {
                item = item ? item.toLowerCase() : ""
                keyword = keyword ? keyword.toLowerCase() : ""
                if(item.indexOf(keyword) > -1){
                    // display show
                    this._Refs[index].ref.style.visibility=""
                    this._Refs[index].ref.style.display=""
                } else {
                    // display hide
                    this._Refs[index].ref.style.visibility="hidden"
                    this._Refs[index].ref.style.display="none"
                }
            })
        }
        
    }

    removeHashFromString(){
        const {cloneTodoDo} = this
        const {val} = this.state.newTodo
        const newVal = val.split('#')[0]    //val.substring(0, val.length-1)
        let copy = cloneTodoDo({val : newVal})
        return copy
    }

    addTodo(todo){
        this.setState( (prevState) => ({
            newTodo:{val:'', _id:'', categorys:[]},
            Todos:[...prevState.Todos, todo]
        }), () => this.input.focus())
    }

    addTag(tag){
        const {cloneTodoDo}=this
        let copy = cloneTodoDo()
        copy.categorys = [...copy.categorys, tag]

        this.setState({
            newTodo:copy,
            showDropDown:false
        }, () => {
            this.input.focus()
        })
    }

    deleteTodo(_id){
        this.setState((prevState) => ({
            Todos: prevState.Todos.filter(x => x._id !== _id)
        }))
    }

    render(){
        const { newTodo, Todos, showDropDown, TodoCategorey} = this.state 
        const whichButtonsYouHave = newTodo.categorys.some(x => x===null)
         ? newTodo.categorys.map(x => x.name) : []
        return (
            <div className="TodoInput">
                <input
                 ref={(input) => this.input = input }
                 onKeyUp={(e) => this.handleKeyUp(e)}
                 onChange={(e) => this.preChange(e) }
                 onFocus={() => this.setState( { inputIsFocused : true } )}
                 onBlur={() => this.setState( { inputIsFocused : false } )}
                 value={newTodo.val}
                 placeholder={"press # to put Todo in category"}
                type="text" /> 
                {newTodo.categorys.length>0?
                <div className="under-line-list">{newTodo.categorys
                    .map(cat => cat.button)}</div>:null}
                {showDropDown ? <DropDownHeader _Refs={this._Refs} 
                                                onKeyUp={this.handleKeyUp} addTag={this.addTag}
                                                dropDown={TodoCategorey
                                                    .filter(str => !whichButtonsYouHave.includes(str))}
                TodoCategorey={TodoCategorey} /> : null }
                <ul>
                    {Todos.map((todo, index) => <TodoList
                    deleteTodo={this.deleteTodo.bind(this, todo._id)}
                    todo={todo} key={index} /> )}
                </ul>
            </div>
        )
    }
}

export default TodoInput