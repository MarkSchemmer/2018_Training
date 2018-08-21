/* 

to get a gitHub users json info   

"user_url": "https://api.github.com/users/{user}"

*/

const Card = (props) => {

    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: '15', padding: '5px' }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
}

const CardList = (props) => {
    return (
        <div>{props.cards.map(card => <Card {...card} />)}</div>
    )
}

class Form extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
                this.props.onSubmit(res.data)
                this.setState({
                    userName: ''
                })
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Github username"
                    type="text" />
                <button type="submit">Search</button>
            </form>
        )
    }
}

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cards : []
        }
    }

    getUser = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }), () => { // callback function...
            console.log(this.state.cards)
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.getUser} />
                <CardList cards={this.state.cards} />
            </div>
        )
    }
}



ReactDOM.render(<App />, mountNode)