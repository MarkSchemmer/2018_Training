// star ->  <i class="fa fa-star"></i>
// check mark ->  <i class="fa fa-check"></i>
// x mark -> <i class="fa fa-times"></i>

// refresh sign -> <i class="fas fa-sync-alt"></i>

// url -> https://jscomplete.com/playground/xs137901

/*   css


        .mountNode {
  color: #333;
}

.fa-star{
	margin:0.5em;
  font-size:24px;
}

span{
	display:inline-block;
  margin:0.5em;
  text-align:center;
  background-color:#ccc;
  width:24px;
  border-radius:50%;
  cursor:pointer;
}

.selected{
	background-color:#eee;
  color:#ddd;
  cursor:not-allowed;
}

.used{
	background-color:#aaddaa;
  color:#99bb99;
  cursor:not-allowed;
}


*/



const Stars = (props) => {
  let stars = [...Array(props.numberOfStars).keys()]
              .map(i => <i key={i} className="fa fa-star"></i>)
  return (
      <div className="col-5">
          {stars}
      </div>
  )
}


const Button = (props) => {
let button;
switch(props.IsCorrect){

  case true :
    button = <button onClick={props.acceptAnswer} class="btn btn-success">
        <i class="fa fa-check"></i>
    </button>
  break
  case false :
  button = <button class="btn btn-danger">
            <i class="fa fa-times"></i>
          </button>
  break
  default :
      button = <button onClick={ () => props.checkAnswer()} disabled={props.selectedNumbers.length===0} class="btn">
                =
               </button>
  break
}
return (
    <div className="col-2 text-center">
      {button}
      <br /><br />
      <button class="btn btn-warning btn-sm" onClick={props.resetRand} disabled={props.randomNumberReTry===0} >
        <i class="fas fa-sync-alt"></i>{props.randomNumberReTry}
      </button>
    </div>
)
}

const Answer = (props) => {

return (
    <div className="col-5">
      {props.selectNumb.map((number,i) =>
      <span onClick={ () => props.disSelectNumb(number) } key={i}>{number}</span>
      )}
    </div>
)
}


const Numbers = (props) => {

const IsSelected = (number) => {

    if(props.usedNumbers.indexOf(number) >= 0){
        return 'used'
    }

    if(props.selectNumb.indexOf(number) >= 0){
        return 'selected'
    }
}

return (
    <div className="card text-center">
      <div>
             {Numbers.list
            .map((number,i) => 
            <span  
            onClick={() => props.selectNumbFunc(number+1)} 
            key={i} 
            className={IsSelected(number+1)}>{number+1}</span>)}
      </div>
    </div>
)
}


Numbers.list = [...Array(9).keys()]




class Game extends React.Component {
state = {
  selectedNumbers : [],
  usedNumbers : [],
  numberOfStars : Math.floor(Math.random()*9)+1,
  correctAnswer : null,
  randomNumberReTry : 3
}

selectNumber = (newNumber) =>  {
    const {selectedNumbers, usedNumbers} = this.state
    if(usedNumbers.indexOf(newNumber) >= 0)
      return 
    if(selectedNumbers.indexOf(newNumber) >= 0)
        return 
    this.setState( prevState => ({
        correctAnswer : null,
        selectedNumbers : prevState.selectedNumbers.concat(newNumber)
    }))
}

disSelectNumber = (newNumber) => {
    let newArray = [...this.state.selectedNumbers]
    let index = newArray.indexOf(newNumber)
    if(index >= 0){
        newArray.splice(index,1)
        this.setState( prevState => ({
            correctAnswer : null,
            selectedNumbers : newArray
        }))
    }   
}

checkAnswer = () => {
    this.setState( prevState => ({
            correctAnswer: this.state.numberOfStars === this.state.selectedNumbers.reduce((a,c) => a + c , 0)
    }))
}


acceptAnswer = () => {
    this.setState(prevState => ({
        
        usedNumbers : prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers:[],
        correctAnswer : null,
        numberOfStars : Math.floor(Math.random()*9)+1
    }))
}


resetRandom = () => {
    if(this.state.randomNumberReTry > 0){
        this.setState( prevState => ({
              randomNumberReTry : prevState.randomNumberReTry-1,
              numberOfStars : Math.floor(Math.random()*9)+1,
              correctAnswer : null,
              selectedNumbers : [],
        }))
    }
}



render(){
    return (
        <div className="container">
          <h1>Play Nine</h1>
            <hr />
            <div className="row">
                  <Stars 
                  numberOfStars={this.state.numberOfStars} 
                  />
                  
                  <Button 
                  selectedNumbers={[...this.state.selectedNumbers]} 
                  checkAnswer={this.checkAnswer} 
                  IsCorrect={this.state.correctAnswer} 
                  acceptAnswer={this.acceptAnswer} 
                  resetRand={this.resetRandom}
                  randomNumberReTry={this.state.randomNumberReTry}
                  />
                  
                  <Answer 
                  disSelectNumb={this.disSelectNumber} 
                  selectNumb={this.state.selectcedNumbers} />
            </div>
            <br />
            <Numbers 
            selectNumbFunc={this.selectNumber} 
            selectNumb={this.state.selectedNumbers} 
            usedNumbers={this.state.usedNumbers} />
        </div>
    )
}
}


class App extends React.Component{
  render(){
    return (
        <div>
             <Game />
        </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)