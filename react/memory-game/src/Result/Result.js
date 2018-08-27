import React from 'react'
import './Result.scss'


const Result = ({correct, restartGame}) => {
    let playAgain = <button onClick={() => restartGame() } className="btn btn-info">Play Again</button>
    const styles = {
        display:'inline-block',
        verticalAlign:'top',
        marginTop:'50px'
    }

    let response

    switch (correct) {
        case true:
            response = (
                <React.Fragment>
                    <button className="btn btn-success">Correct</button>
                    {playAgain}
                </React.Fragment>
            )
        break

        case false:
            response = (
                <React.Fragment>
                    <button className="btn btn-danger">Incorrect</button>
                    {playAgain}
                </React.Fragment>
            )
        break 
    
        default:
            response = null 
        break
    }


    return (
        
        <div style={styles} className="side">
        {response}
        </div>
    )
}


export default Result 