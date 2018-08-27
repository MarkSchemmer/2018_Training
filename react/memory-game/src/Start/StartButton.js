import React from 'react'

class StartButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
        button : (
        <button 
        onClick={() => props.start(this.interval)}
         className="btn btn-success btn-sm btn-block" 
         style={{width:'100%', height:'50px'}}>Start Game</button>
            ),
            counter:3,
            isCounterDone:false,
            timerRef:null,
            compareClicked:false 
        }
        this.countDown = this.countDown.bind(this)
        this.interval = () => {
                let timer = setInterval(this.countDown, 1000)
                this.setState({
                    timerRef:timer
                })
             };



    }

    restartStartState(){
        this.setState({
        button : (
        <button 
        onClick={() => this.props.start(this.interval)}
         className="btn btn-success btn-sm btn-block" 
         style={{width:'100%', height:'50px'}}>Start Game</button>
            ),
            counter:3,
            isCounterDone:false,
            timerRef:null,
            compareClicked:false 
        })
    }

    

    clearTimer(){
        clearInterval(this.state.timerRef)
    }

    countDown(){
        if(this.state.counter===0) {
            this.clearTimer()
            this.setState({
                isCounterDone:true
            },() => {
                    this.which()
                    this.props.isTimeToGuessNow()
                })
        }
        else {
            this.setState(prevState => ({
                counter:prevState.counter-1
            }))
        }
    }



    which = () => {
       const  styles = {width:'300px'}
        if(!this.props.hasStartBeenClicked){
            return this.state.button
        }else if(this.state.isCounterDone) {
            return <React.Fragment>
                             <div style={styles}>Counter is done please guess all of the squares...
                                { !this.state.compareClicked ? 
                                <button 
                                onClick={() => {this.props.compare(); this.setState({compareClicked:true})}} 
                                style={{display:'block', width:'150px',height:'30px'}} 
                                className="btn btn-success btn-sm">Compare</button> : 
                                null  }
                             </div>
                         
                </React.Fragment>
        } else {
            return  <div style={styles}>Get Ready to memorize cells in {this.state.counter}</div>
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.which()}
            </React.Fragment>
        )
    }
}

export default StartButton