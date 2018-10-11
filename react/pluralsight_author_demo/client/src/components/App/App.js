import React from 'react'
import './App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../Header/header'
import Main from '../Main/Main'
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
