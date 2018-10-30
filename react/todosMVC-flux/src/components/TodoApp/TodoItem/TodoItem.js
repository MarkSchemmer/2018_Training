import React from 'react'


class TodoItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showDelete:false, 
            todo:{
                _id:this.props._id,
                completed: this.props.completed,
                todo:this.props.todo
            },
            editLabel:true,
        }

     this._intput = HTMLInputElement
    }


    _change(e){
        let copy = Object.assign({}, this.state.todo)
        copy.todo = e.target.value 
        this.setState({todo:copy})
    }

      _toggleTodoCompletion(){
        let copy = Object.assign({}, this.state.todo)
        copy.completed = !copy.completed
        this.setState({todo : copy}, () => {
            this.props.toggleTodoCompetion(this.state.todo)
        })
    }


    updateTodo(){
        let copy = Object.assign({}, this.state.todo)
        // need to call props function to make
        this.props.updateTodoById(copy)
    }

    WasEnterPressed(e){
       if(e.charCode === 13){
           this.setState({ editLabel : true}, () => {
                this.updateTodo()
           })
       }
    }
    
    render() {


       const  {_id, completed, todo} = this.props


       const completeOrUncomplete = () => {
            return completed ? 'complete' : 'uncomplete'
       }

       const hasStrike = (todo) => {
           return completed ? <strike style={{opacity:'0.2'}}> {todo} </strike> : todo
       }

        return (
            <li onMouseLeave={() => this.setState({ showDelete : false }) }
            onMouseEnter={() => this.setState({ showDelete : true }) }
            onMouseOver={() => this.setState({ showDelete : true }) }>
                <div  
                 className="view">
                    <input  onClick={() => this._toggleTodoCompletion()}
                    className={"toggle "+completeOrUncomplete()} type="checkbox"/>
                    { this.state.editLabel ?  
                        <label onDoubleClick={() => this.setState({ editLabel : false })}>{hasStrike(this.state.todo.todo)}</label> : 
                        <input 
                        autoFocus="true"
                        onChange={ e => this._change(e)}
                        onKeyPress={e => this.WasEnterPressed(e)}
                        ref={c => this._intput = c}
                        className="edit-label" 
                        onBlur={() => this.setState({ editLabel : true }, () => this.updateTodo())} 
                        value={this.state.todo.todo} />  }
                    <button 
                    onClick={() => this.props.deleteTodoById(_id)}
                    style={{visibility: this.state.showDelete ? 'visible' : 'hidden'}} 
                    className="btn btn-danger btn-sm">
                        <i  className="fas fa-times"></i>
                    </button>
                </div>
            </li>
        )
    }
}

export default TodoItem