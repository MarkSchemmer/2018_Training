
class Button extends React.Component {

	handleClick = () => this.props.onClickFunction(this.props.incrementBy)
  

	render(){
  	return (
    	<button onClick={this.handleClick}>
      			+{this.props.incrementBy}
        </button>
    )
  }
}


class DecButton extends React.Component {
		render() {
    		return (
        		<button onClick={this.props.decreFunction} >-1</button>
        )
    }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  )
} 

class App extends React.Component {

	state = { counter : 0 }
  
  inCrementValue = (value) => {
  	this.setState((prevState) => ({
    	counter : prevState.counter+value
    }))
  }
  
  decrementValue = () => {
  	this.setState ( (prevState) => ({
    		counter : prevState.counter-1
    })) 
  }
  
  render(){
  		return (
      		<div>
              <Button incrementBy={1} onClickFunction={this.inCrementValue} />
             	<Button incrementBy={5} onClickFunction={this.inCrementValue} />
          		<Button incrementBy={10} onClickFunction={this.inCrementValue} />
              <DecButton decreFunction={this.decrementValue} />
              <Result counter={this.state.counter} />
          </div>
      )
  }
}



ReactDOM.render(<App />, mountNode)