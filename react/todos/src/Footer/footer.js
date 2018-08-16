import React from 'react'
import './footer.css'

const Footer = (props) => {
  const shw = props.show ? (
    <div className="card-footer text-muted" style={{zIndex:'4'}}>
      <span>{props.items.length} item left</span>
      <button  className="btn btn-primary btn-sm">All</button>
      <button  className="btn btn-primary btn-sm">Active</button>
       <button  className="btn btn-primary btn-sm">Completed</button>
       </div>
  ) : null 
    return (
      <div>
      {shw}
      </div>
    )
  }


export default Footer 