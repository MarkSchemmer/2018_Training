import React from 'react'


class AddForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            imageUrl : '',
            books : [],
            bookTemp : ''
        }
        this.onFieldChange = this.onFieldChange.bind(this)
        this.addBook = this.addBook.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]:event.target.value 
        })
    }

    addBook(e){
        e.preventDefault()
        this.setState( prevState => ({
            books : prevState.books.concat([this.state.bookTemp]),
            bookTemp : '' 
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

        render() {
        return (
            <div style={{width:'600px', margin:'auto'}} className="container">
                <h1>Adding Author Here</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                                <label>Full Name:</label>
                                <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.onFieldChange}  />
                        </div>
                        <div className="form-group">
                                <label>Image Url</label>
                                <input className="form-control" type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
                        </div>
                        <div className="form-group">
                                <label>Books</label> <br />
                                {this.state.books.map(book => <p key={book}>{book}</p>)}
                                <input className="form-control" type="text" style={{display:'inline-block'}} name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
                                <button onClick={this.addBook} className="btn btn-primary" style={{display:'inline-block', verticalAlign:'top', marginLeft:'5px'}}>Add Book</button>
                        </div>
                        <hr />
                        <button className="btn btn-success btn-bg">Add Author</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddForm