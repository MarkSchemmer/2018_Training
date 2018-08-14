import React from 'react'
import './TurnData.css'

const Book = (props) => {
    const IsBook = () => {
        props.IsBook(props.title)
    }
    return (
            <div onClick={ () => IsBook() } className="book bg-info">{props.title}</div>
    )
}

const TurnData = (props) => {
    let col 
    const {books, author, IsBook} = props
    const _books = books.map(book => <Book key={book} title={book} IsBook={IsBook} />)
    switch(props.correct){
        case true :
            col = 'green'
            break 
        case false : 
            col = 'red'
            break
        default :
            col = ''
    }
    return (
        <div style={{backgroundColor:col, padding:'25px'}}>
            <img src={author.imageUrl} alt="author" />
           <div className="books"> {_books} </div>
        </div>
    )
}

export default TurnData