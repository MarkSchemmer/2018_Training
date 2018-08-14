
import React, { Component } from 'react';
import {shuffle, sample} from 'underscore'
import { BrowserRouter, Route, Link, withRouter, Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import authors from './author_data'
import Footer from './footer/Footer'
import TurnData from './TurnData/TurnData'






class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      obj : this.randomAuthor(),
      correct : null 
    }
    this.IsBook = this.IsBook.bind(this)
  }


   randomAuthor = () => {
    const randomAuthors = shuffle(authors)
    const mainRandomAuthor = sample(randomAuthors)
    const otherBooks = randomAuthors.filter(auth => auth.name !== mainRandomAuthor.name)
    .slice(0,4)
    .map(auth => sample(auth.books))
  
    const randomBooks = shuffle([sample(mainRandomAuthor.books), ...otherBooks])
    return {
      author : {
         name : mainRandomAuthor.name,
         imageUrl : mainRandomAuthor.imageUrl,
         books : mainRandomAuthor.books
      },
      books : randomBooks
    }
  }


  IsBook(title){
    let IsThere = this.state.obj.author.books.some(x => x===title)
    if(IsThere){
      this.setState({correct:true})
    } else {
      this.setState({correct:false})
    }
  }

  newAuthorRandomNize(lastAuthor){
    let cur = this.randomAuthor()
    while(lastAuthor.author.name!==cur.author.name){
      cur = this.randomAuthor()
    }
    return cur 
  }

  ContinueButton(){
    const newAuthor = this.randomAuthor()
    this.setState(prevState => ({
        obj : this.newAuthorRandomNize(prevState.obj),
        correct : null 
    }))
  }




  render() {
    const obj = this.state.obj
    let b 
    switch(this.state.correct){
      case true : 
        b = <button onClick={() => this.setState({correct:null, obj : this.randomAuthor() })} className="btn btn-primary">Continue</button>
      break 
      case false :
        b = null 
    }
    return (
      <div className="container">
        <header className="jumbotron">
              <h1>Author Quiz</h1>
              <p>Select the correct the book that the author wrote...</p>
              <Link className="btn btn-success" style={{marginRight:'15px'}} to="/add" >Add Author</Link>{b}
        </header>
        <TurnData author={obj.author} books={obj.books} IsBook={this.IsBook} correct={this.state.correct} />
        <Footer />
      </div>
    );
  }
}

export default App;
