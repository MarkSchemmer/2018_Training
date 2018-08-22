import React from 'react'
import './square.scss'

const Square = (props) => {


    const {isSelected, coordinates, updateBoard} = props

        const styles = {
            backgroundColor: isSelected?'black':null 
        }
        return (
            <div 
            onClick={() => {
                updateBoard(coordinates, isSelected)
            }} style={styles} className="sqr"></div>
        )
    }



export default Square