import React from 'react'

import './DropDownHeader.css'
import './wobbles.css'


class DropDownHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            canWobble: false 
        }
        this.canWeeb = false 
        this.whatTypeOfButton = this.whatTypeOfButton.bind(this)
        this.genclasses = this.genclasses.bind(this)
    }


   genclasses = (color) => {
        return  `btn btn-${color} btn-sm `
    }

    whatTypeOfButton(nameOfCategory, index){
        const catButtons = {
            zIndex:'5',
        }

        let genButton = (nameOfCategory,color) => {



          return (  <button tabIndex="-1" 
            onDoubleClick={ () =>  { this.canWeeb=true; this.genclasses() }  }
            onBlur={ () => { this.canWeeb = false; this.genclasses() } }
            style={catButtons} 
          className={this.genclasses(color)}>{nameOfCategory}</button> )
        }
             
        let button, color 
        const [ personal,shopping,work,errands ] = this.props.TodoCategorey

        switch(nameOfCategory){
            case personal :
                color = 'danger'
                button =  genButton(nameOfCategory,'danger')
            break
            case shopping :
                color = 'secondary'
                button = genButton(nameOfCategory,'secondary')
            break 
            case work :
                color = 'info'
                button = genButton(nameOfCategory, 'info')
            break
            case errands :
                color = 'primary'
                button = genButton(nameOfCategory, 'primary')
            break 
        }

        let buttonData = {
            cls:this.genclasses(color),
        }

        return { button:button, name:nameOfCategory, buttonData: buttonData}
    }

    render(){
        const dropdownContent = {
            zIndex:'100'
        }
        const { addTag, dropDown, _Refs } = this.props
        return(
            <div className="dropDown">
                <button tabIndex="-1" className="dropbtn"> 
                 {dropDown.length===0 ? 'No more tags available':'DropDown' }
                </button>
                <div style={dropdownContent}  className="dropdown-content">
                    {dropDown.map((nameOfCategory, index) => 
                    <a tabIndex={0}
                    ref={(ref) => _Refs[index] = {ref:ref, focused:false} } 
                    onFocus={() => _Refs[index].focused=true}
                    onBlur={() => _Refs[index].focused=false}
                     onKeyUp={(e) => this.props.onKeyUp(e,this.whatTypeOfButton(nameOfCategory, index), _Refs[index])} 
                    onClick={() => addTag(this.whatTypeOfButton(nameOfCategory, index))}>{nameOfCategory}</a>)}
                </div>
            </div>
        )
    }
}

export default DropDownHeader