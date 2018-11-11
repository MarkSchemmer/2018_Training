import React from 'react'
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            canShowDelete:false,
            editTodo:false
        }
    }

    render(){
        const { todo, deleteTodo } = this.props
        const smallDeleteStyles = 'btn btn-danger btn-sm'
        const hasCategoreys = todo.categorys.length>0


        const properListItem = () => {
            let cssClass
            let styleObj = {}
            if(this.state.canShowDelete){
                cssClass = 'todoItem showing'
            } else {
                cssClass = 'todoItem'
            }

            if(!hasCategoreys){
                styleObj.paddingBottom = '7px'
            } 

            return {cssClass:cssClass, styleObj:styleObj}
        }

        const { styleObj } = properListItem()
        return (
           <li style={styleObj} className={ this.state.canShowDelete ? 
            'todoItem ' + 'showing' : 'todoItem'} 
            onDoubleClick={() => this.setState({ editTodo : true })}
           onMouseLeave={() => this.setState({ canShowDelete : false })}
           onMouseOver={() => this.setState({ canShowDelete : true })}>
               {todo.val}
               {hasCategoreys?
                <div className="under-line-todo-list">{todo.categorys
                    .map(cat => cat.button )}</div>:null}
              { this.state.canShowDelete ? <button
                     onClick={() => deleteTodo(todo._id)}
                    className={hasCategoreys?'delete '+smallDeleteStyles: smallDeleteStyles}>
                    <i  className="fas fa-times"></i>
              </button> : null }
           </li>
        )
    }
}


export default TodoList