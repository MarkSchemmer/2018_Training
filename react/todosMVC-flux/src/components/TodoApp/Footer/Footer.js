import React from 'react'


class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const All = 'All', Active = 'Active', Completed = 'Completed'
        const {filterUncompleted, filterCompleted,
             clearCompleted, clearCompletedFunc, itemsLeft, _filter, filterAll} = this.props
        let basic = "btn btn-outline-secondary btn-sm"
        let focused = "btn btn-outline-primary btn-sm"

        const whichClass = (text) => {
            return _filter===text?focused:basic
        }
        return (
            <footer className="footer view" style={{visibility:itemsLeft.length>0?'visible':'hidden'}}>
                <span style={{marginRight:'10px'}}>
                    {itemsLeft.filter(x => x.completed===false).length} items left!!
                </span>
                <button onClick={() => filterAll()}
                 className={whichClass(All)}>All</button>
                <button onClick={() => filterUncompleted()}
                 className={whichClass(Active)}>Active</button>
                <button onClick={() => filterCompleted() } 
                className={whichClass(Completed)}>Completedd</button>
                {clearCompleted ? <button 
                onClick={() => clearCompletedFunc() } className="btn btn-outline-secondary btn-sm" 
                style={{float:'right'}}>Clear Completed</button> : null}
            </footer>
        )
    }
}

export default Footer