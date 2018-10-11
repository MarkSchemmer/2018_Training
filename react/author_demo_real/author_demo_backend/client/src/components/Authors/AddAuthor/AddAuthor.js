import React from 'react'
import AddAuthorForm from '../AddAuthorForm/AddAuthorForm'

class AddAuthor extends React.Component {  
  render() {  
    return (
    <div>
        <AddAuthorForm {...this.props} />
    </div>
    )
  }
}

export default AddAuthor 