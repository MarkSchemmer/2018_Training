import React, { Component } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'


class App extends Component {



  render() {
    return (
      
      <div>
          <Header />
          <div className="container-fluid">
            <Main />
          </div>
      </div>
    );
  }
}

export default App;
