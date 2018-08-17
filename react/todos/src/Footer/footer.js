import React from 'react'
import './footer.css'

class Footer extends React.Component  {

  constructor(props){
    super(props)
    this.state={
        onWhat:this.props._filter
    }
  }


  isActive(which){
    if(this.props._filter===which){
        return "btn btn-primary btn-sm active"

    } else {
        return "btn btn-outline-secondary btn-sm"
    }
  }
 
  render() {

 const shw = this.props.show ? (
    <div className="card-footer text-muted" style={{zIndex:'4'}}>
      <span>{this.props.items.length} item left</span>
      <button onClick={() => this.props.handleFilter('All')} className={ this.isActive('All') }>All</button>
      <button onClick={() => this.props.handleFilter('Active') }  className={this.isActive('Active')}>Active</button>
       <button onClick={() => this.props.handleFilter('completed') }  className={this.isActive('completed')}>Completed</button>
       </div>
  ) : null 

    return (
      <div>
      {shw}
      </div>
    )
  }
  }


export default Footer 