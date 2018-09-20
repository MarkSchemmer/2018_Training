import React from 'react'
import axios from 'axios'
import './App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../Header/header'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      custs : []
    }
  }

  render() {
    return (
        <div>
          <Header />
          <Main />
        </div>
    ) 
  }
}

export default App 
