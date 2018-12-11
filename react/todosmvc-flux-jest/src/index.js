import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
const downArrow = 'ArrowDown'
const upArrow = 'ArrowUp'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search:'',
            options:[],
            bingLogo:'https://msp7l1170302145284.blob.core.windows.net/ms-p7-l1-170302-1453-24-assets/logo_bing_en-US.png',
            inputFocused:false,
            whereIsCursor:0
        }
        this.findSuggestions = this.findSuggestions.bind(this)
      //  this.handleKeyPress = this.handleKeyPress.bind(this)
    }


    componentWillMount(){
        window.addEventListener('keydown', this.handleKeyPress, false)
        window.context = {
            Refs : []
        }
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyPress, false)
    }


    focusOnElementFromClassName(index){
        window.context.Refs[index].focus()
    }

    findSuggestions(whatToSearch){
        getSuggestions(whatToSearch).then(res => {
            this.setState({ options : res })
        })
    }

    getSuggest(whatToSearch){
        efficecntUpdate(this.findSuggestions, whatToSearch)
    }

    change(e){
        this.setState({
            search:e.target.value
        }, () => this.getSuggest(this.state.search))
    }

    makeSuggestionSearch(item){
        this.setState({
            search:item,
        }, () =>  this.getSuggest(this.state.search))
    }

    // handleKeyPress(e){
    //     let key = e.key 
    //     if(this.state.inputFocused===true){
    //         if(key === upArrow){
    //             if(this.state.whereIsCursor!==0){

    //             }
    //         } else if (key === downArrow){
    //             if(this.state.whereIsCursor<10){
    //                 this.setState( (prevState) => ({
    //                     whereIsCursor:prevState.whereIsCursor+1
    //                 }), () => {
    //                     this.focusOnElementFromClassName(this.state.whereIsCursor)
    //                 })
    //             }
    //         }
    //     }
    // }

    render(){

        const { options, search } = this.state;

        const listStyle = {
            listStyleType:'none'
        };

        const spanStyle = {
            color:'rgb(127,127,127)',
        }

        const prepareSearch = (suggestion, index) => {
            window.context.Refs[index] = React.createRef()
            const [mySearch, mock, number] = suggestion.split('_');   
            let text = mySearch.trim()+mock+number;
                return (
                    <li ref={window.context.Refs[index]} 
                    className={"searchSuggestion " + index} onClick={() => this.makeSuggestionSearch(text)}>
                        <span style={spanStyle}>{mySearch.trim()}</span><strong>{mock +  number}</strong>
                    </li>
                );
        }

        const output = options.map((suggestion,index) => prepareSearch(suggestion, index));
        
        

        return (
                <div id="searchContainer">
                    <div id="searchBarContainer">
                        <img 
                        id="logo" 
                        src={this.state.bingLogo} />
                        <input 
                            onChange={(e) => this.change(e)}
                            id="searchBar"
                            value={search} /> <i id="search" className="fas fa-search fa-flip-horizontal"></i>
                    </div>
                        <ul id="suggestionContainer" style={listStyle}>
                            {search.length>0?output:null}
                        </ul>
                </div>
        );
    }
}


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


  function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
  
var efficecntUpdate = debounce(function(fn, say){
    fn(say)
}, 200);



ReactDom.render(<App />, document.getElementById('root'));