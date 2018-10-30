import React from 'react'


class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    makeButton(){

    }



    render(){
        const All = 'All', Active = 'Active', Completed = 'Completed'
        let basic = "btn btn-outline-secondary btn-sm"
        let focused = "btn btn-outline-primary btn-sm"

        const whichClass = (text) => {
            return this.props._filter===text?focused:basic
        }



        return (
            <footer className="footer view" style={{visibility:this.props.itemsLeft.length>0?'visible':'hidden'}}>
                <span style={{marginRight:'10px'}}>{this.props.itemsLeft.filter(x => x.completed===false).length} items left!</span>
                <button onClick={() => this.props.filterAll()} className={whichClass(All)}>All</button>
                <button onClick={() => this.props.filterUncompleted()} className={whichClass(Active)}>Active</button>
                <button onClick={() => this.props.filterCompleted() } className={whichClass(Completed)}>Completedd</button>
                {this.props.clearCompleted ? <button onClick={() => this.props.clearCompletedFunc() } className="btn btn-outline-secondary btn-sm" 
                style={{float:'right'}}>Clear Completed</button> : null}
            </footer>
        )
    }
}

export default Footer