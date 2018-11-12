import React from 'react'

import './DropDownHeader.css'


class DropDownHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    whatTypeOfButton(which, index){
        const catButtons = {
            zIndex:'5',
        }

        let genButton = (which,color) =>
                    <button tabIndex="-1" style={catButtons} className={`btn btn-${color} btn-sm`}>{which}</button>
        let button
        const [
            personal,shopping,work,errands
        ] = this.props.TodoCategorey
        switch(which){
            case personal :
                button =  genButton(which,'danger')
            break
            case shopping :
                button = genButton(which,'secondary')
            break 
            case work :
                button = genButton(which, 'info')
            break
            case errands :
                button = genButton(which, 'primary')
            break 
        }

        return {button:button, name:which}
    }

    render(){
        const dropdownContent = {
            zIndex:'100'
        }
        const { TodoCategorey, addTag, dropDown, _Refs } = this.props
        return(
            <div className="dropDown">
                <button tabIndex="-1" className="dropbtn">DropDown</button>
                <div style={dropdownContent}  className="dropdown-content">
                    {dropDown.map((x, index) => 
                    <a tabIndex={0}
                    ref={(ref) => _Refs[index] = {ref:ref, focused:false} } 
                    onFocus={() => _Refs[index].focused=true}
                    onBlur={() => _Refs[index].focused=false}
                     onKeyUp={(e) => this.props.onKeyUp(e,this.whatTypeOfButton(x, index), _Refs[index])} 
                    onClick={() => addTag(this.whatTypeOfButton(x, index))}>{x}</a>)}
                </div>
            </div>
        )
    }
}

export default DropDownHeader