import React, { Component } from 'react';
import Form from '../Form/Form';
import './App.scss';
class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return (
      <React.Fragment>
        <Form {...this.props} />
      </React.Fragment>
    )
  }
}

export default App;
