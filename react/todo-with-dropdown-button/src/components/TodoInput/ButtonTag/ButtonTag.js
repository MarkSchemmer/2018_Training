import React from 'react'
import '../../DropDownHeader/wobbles.css'

class ButtonTag extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            canWeeble:false,
            weebleClass:' weeble-wobble ',
            noWobble : ' no-wobble ',
            goingToDelete:false
        }
        this.thisButton = React.createRef() 
        this.fn = this.fn.bind(this)
        this.isAlreadyMounted = false 
    }


    componentDidMount(){
        this.thisButton.addEventListener("animationend", () => {
            this.fn()
        },false);
        this.isAlreadyMounted = true 
    }

    componentWillUnmount(){
        this.isAlreadyMounted = false 
        this.thisButton.removeEventListener("animationend", () => {
            this.fn()
        },false);
    }

    fn(catName=this.props.category.name){
        this.setState({ goingToDelete : false }, () => {
            if(this.state.canWeeble && this.props.todoId!==undefined){
                this.props.removeTag(this.props.todoId, catName)
            }
            else if(this.state.canWeeble && this.props.todoId===undefined)
                this.props.removeTag(catName)
        })
    }


    removeTag(catName){
        if(this.state.canWeeble) {
            this.setState( {  goingToDelete : true } )
        } else { 
            this.fn(catName)
        }
    }


    render(){
        let classes = (data) => {
           return  ` ${data.buttonData.cls}  
           ${this.state.canWeeble? this.state.weebleClass : this.state.noWobble}
           ${this.state.goingToDelete ? ' weeble-wobble-delete ' : ''} `
        }

         const { category } = this.props

        return (
            <React.Fragment>
                        <button
                            onDoubleClick={() => this.setState({ canWeeble: true })}
                            onBlur={() => this.setState({ canWeeble : false })} 
                            onClick={() => this.removeTag(category.name)}
                            ref={ref => this.thisButton = ref  }
                            className={classes(category)}>
                            {category.name}
                        </button>
           </React.Fragment>
        )
    }
}

export default ButtonTag