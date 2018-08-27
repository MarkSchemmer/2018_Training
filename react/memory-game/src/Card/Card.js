import React from 'react'
import './Card.scss'


class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }
   render() { 
       const { squareSelectedForGuess, 
           wasClicked,hasSquaresShown,
           makeRandom, coordinates, 
           isRandomSquare, isTimeToGuess } = this.props;

       let classes;
        switch (isRandomSquare) {
            case true:
                    classes = !isTimeToGuess ? "btn btn-primary" : "btn btn-secondary"
                break;
            default:
                classes = "btn btn-secondary"
                break;
        }


        if(wasClicked){
            classes = "btn btn-danger"
        }


        
    
        return (
            <button disabled={!isTimeToGuess} onClick={() => squareSelectedForGuess(coordinates)} className={classes}>
            </button>
        )
   }
}



export default Card 