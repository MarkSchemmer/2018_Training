import React from 'react';

function getSuggestions(prefix) {
    const result = Array
      .from(new Array(10), function(x, i) {
        return i;
      })
      .map(function(x) {
        return prefix + '_mock_' + x;
      });
    const delay = Math.random() * 800 + 200; // delay 200~1000ms
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, delay, result);
    });
  }

class AppTest extends React.Component {

	constructor(props){
  	super();
    this.state = {
    	search : '',
      options: []
    };
  }

	_change(event){
  	this.setState({
    	search:event.target.value
    }, () => {
        	getSuggestions(event.target.value).then(res => {
        			this.setState({ options : res })
       });
    }); /*() => {
    	  		getSuggestions(this.state.search).then(res => {
        			this.setState({ options : res })
        		});
    });*/



    
  }	
  
	render(){
  const {options}=this.state;
  	return (
    	<div>
        Search Bar: <input 
        value={this.state.search} 
        onChange={(e) => this._change(e)} />
        <ul>
          {this.state.options.map(opt => {
          				let op = opt;
                  return <li>{op}</li>})}
        </ul>
       </div>
    );
  }
}




export default AppTest