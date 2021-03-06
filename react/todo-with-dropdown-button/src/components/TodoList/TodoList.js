import React from 'react'
import ButtonTag from '../TodoInput/ButtonTag/ButtonTag'
import './TodoList.css'
import '../TodoInput/TodoInput.css'
import '../DropDownHeader/wobbles.css'

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            canShowDelete:false,
            editTodo:false,
            isDraggingNow:false,
        }

        this.isDraggin = this.isDraggin.bind(this)
    }


    isDraggin(e) {
        this.setState({ isDraggingNow : true })
    }

    render(){
        const { todo, deleteTodo } = this.props
        const smallDeleteStyles = '  btn btn-danger btn-sm   deleteButton'
        const hasCategoreys = todo.categorys.length>0


        const formatSpan = (str) => {
          let howManyChars = str.match(/[A-Z]{1,}/g) ? 15 : 16
           return str
           .split('')
           .filter((item,index) => index < howManyChars)
           .concat(['...'])
           .join('')
        }

        const _styles = {
            backgroundColor:'#fff',
            zIndex:'5',
            paddingBottom : !hasCategoreys ? '7px' :'',
            opacity : this.state.isDraggingNow ? '1' : ''
        }
        return (
           <li 
           onDragStart={(e) => this.isDraggin(e)}
           draggable
        
           onKeyUp={(e) => this.props.onKeyUp(e) }
           ref={c => this.props._ref.list = c}
           tabIndex="0"  
           style={_styles}
           className={ this.state.canShowDelete ? 
            'todoItem ' + 'showing' : 'todoItem'} 
           onMouseLeave={() => this.setState({ canShowDelete : false })}
           onMouseOver={() => this.setState({ canShowDelete : true })}
           >
             <div
             onDoubleClick={ () => this.props.showModal() }
             className="todoText">
             
                <span ref={ span => this.props._ref.span = span }
                >{todo.val.length > 17 ? formatSpan(todo.val) : todo.val}</span>
             </div>
               { hasCategoreys ?
                <div className="under-line-todo-list">
                    { todo.categorys.map(cat => 
                    <ButtonTag 
                    key={cat.name}
                    category={cat}
                    todoId={todo._id}
                    removeTag={this.props.removeTag} />)}
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