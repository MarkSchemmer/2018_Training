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
        const smallDeleteStyles = '  btn btn-danger btn-sm   deleteButton'
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

        const formatSpan = (str) => {
          let howManyChars = str.match(/[A-Z]{,}/g) ? 15 : 24
           return str
           .split('')
           .filter((item,index) => index < howManyChars)
           .concat(['...'])
           .join('')
        }

        const { styleObj } = properListItem()
        return (
           <li 
           onDoubleClick={ () => this.props.showModal() }
           onKeyUp={(e) => this.props.onKeyUp(e) }
           ref={c => this.props._ref.list = c}
           tabIndex="0" 
           style={styleObj} 
           className={ this.state.canShowDelete ? 
            'todoItem ' + 'showing' : 'todoItem'} 
            style={{ zIndex:'5'}}
            //onDoubleClick={() => this.setState({ editTodo : true })}
           onMouseLeave={() => this.setState({ canShowDelete : false })}
           onMouseOver={() => this.setState({ canShowDelete : true })}
           >
             <div className="todoText">
             
                <span ref={ span => this.props._ref.span = span }
                >{todo.val.length > 17 ? formatSpan(todo.val) : todo.val}</span>
             </div>
               { hasCategoreys ?
                <div className="under-line-todo-list">
                    {todo.categorys.map(cat => cat.button )}
                </div> : null }
              { this.state.canShowDelete ? <button
                    onClick={() => deleteTodo(todo._id)}
                    className={hasCategoreys?'delete ' + smallDeleteStyles : smallDeleteStyles}>
                    <i  className="fas fa-times"></i>
                    </button> : null }
           </li>
        )
    }
}


export default TodoList