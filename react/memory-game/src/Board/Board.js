import React from 'react'
import Card from '../Card/Card'
import StartButton from '../Start/StartButton'
import Result from '../Result/Result'
import './Board.scss'



class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            board : this.genBoard(),
            hasStartBeenClicked:false,
            isTimeToGuess:false,
            squaresThatAreRandom:[],
            correct:null,
        }

        this.resultRef = React.createRef()

        this.pressStart = this.pressStart.bind(this)
        this.isRandomSquare = this.isRandomSquare.bind(this)
        this.isTimeToGuessNow = this.isTimeToGuessNow.bind(this)
        this.squareSelectedForGuess = this.squareSelectedForGuess.bind(this)
        this.compare = this.compare.bind(this)
        this.howManySquaresToGuess = this.howManySquaresToGuess.bind(this)
        this.restartGame = this.restartGame.bind(this)

    }


    restartGame(){
        this.setState({
            board : this.genBoard(),
            hasStartBeenClicked:false,
            isTimeToGuess:false,
            squaresThatAreRandom:[],
            correct:null,
        }, () =>{
            const resultRef = this.resultRef.current
            resultRef.restartStartState()
        })
    }


    cloneBoard(){
        return this.state.board.slice().map(row => row.slice())
    }

    howManySquaresToGuess(){
        let rand = () => Math.floor(Math.random()*4)
        let many = () => Math.floor(Math.random()*12)
        let coordinates = [...Array(many()).keys()].map(nth => {
            return [rand(), rand()]
        })
        return coordinates 
    }


    compare(){
        const board = this.state.board 
        let playerGuess = []
        let answers = []

        for(let y = 0; y < board.length; y++){
            for(let x = 0; x < board[y].length; x++){
                const {coordinates,wasClicked,isRandomSquare} = board[y][x]
                if(wasClicked){
                   playerGuess =  playerGuess.concat(coordinates)
                }
                if(isRandomSquare){
                    answers = answers.concat(coordinates)
                }
            }
        }
        playerGuess = playerGuess.sort().join('')
        answers = answers.sort().join('')
        this.setState({
             correct : playerGuess===answers
        })

        
    }





    genBoard = () => { 
       return  [...Array(4).keys()].map((row,y) => [...Array(4).keys()].map((card,x) => {
        return {
            coordinates : [y,x],
            isRandomSquare:false,
            wasClicked:false,
            whenToHide:false,
        }
    }))
    }

    isRandomSquare(coordinates){
        const [y,x] = coordinates
        let newBoard = this.state.board 
        newBoard[y][x].isRandomSquare = true 
        this.setState(prevState => ({
            board:newBoard 
        }), () => this.render())
    }

    genAndShowRandomSquares(){
        let bd = this.state.board 
        let coordinates = this.howManySquaresToGuess()
        coordinates.forEach(coor => {
            const [y,x] = coor 
            bd[y][x].isRandomSquare = true 
        })

        this.setState({
            board:bd 
        },() => this.displayBoard())
    }

    displayBoard(){
       const {hasStartBeenClicked,board}=this.state
        return (
            <div className="board">
            {board.map((row,rowIndex) => 
                    <div className="row">
                         {row.map((card,cardIndex) => 
                         <Card
                         {...card}
                         squareSelectedForGuess={this.squareSelectedForGuess}
                         isTimeToGuess={this.state.isTimeToGuess}
                         hasSquaresShown={this.state.hasSquaresShown}
                         makeRandom={this.isRandomSquare}
                         key={card}  />)}
                    </div>
            )}</div>
        )
    }

    isTimeToGuessNow(){
        this.setState({
            isTimeToGuess:true 
        })
    }

    pressStart(timer){
        this.setState({hasStartBeenClicked:true})
        timer()
        this.genAndShowRandomSquares()
    }

    squareSelectedForGuess(coor){
        const [y,x] = coor 
        let bd = this.state.board 
        bd[y][x].wasClicked = !bd[y][x].wasClicked

        this.setState({
            board : bd 
        })
    }

    render(){
       const {hasStartBeenClicked,correct}=this.state
        return (
            <div>
                {this.displayBoard()}
                <Result correct={correct} restartGame={this.restartGame} />
                <StartButton 
                ref={this.resultRef}
                compare={this.compare}
                isTimeToGuessNow={this.isTimeToGuessNow}
                hasStartBeenClicked={hasStartBeenClicked} 
                start={this.pressStart} />
            </div>
        )
    }
}

export default Board