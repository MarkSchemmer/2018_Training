
import React, { Component } from "react";

import './app.css'
import axios from "axios";


class App extends Component {


    constructor(props){
        super(props)
        this.state={ids:[], names:[]}
    }

    componentDidMount(){
        axios.get('/api').then(res => {
            this.setState({ ids : res.data })
        })


        axios.get('/api/mark').then(res => {
            this.setState({ names : res.data })
        })

    }

    render() {
        return (
            <div>

                <h1 style={{color:'red'}}>My React App!!12345</h1>
                <h2>Hello this is a h2 heading now!</h2>

                {this.state.ids.map((x, index) => <p key={index}>{x._id}</p>)}

                {
                    this.state.names.map((x, index) => <p key={index}>{x.name}</p>)
                }

            </div>
        );
    }
}



export default App;