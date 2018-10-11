import React from 'react'
import { Link } from 'react-router-dom'
const DisplayAuthor = (props) => (
    <React.Fragment>
        <tr>
            <th>
                <Link to={`/Authors/edit/${props.id}`}>{props.firstName + ' ' + props.lastName}</Link>
            </th>
            <th>
                {props.twitterHandler}
                
                <button
                style={{
                    float:'right'
                }}
                 onClick={() => props.handleDelete(props.id)}
                 className="btn btn-danger btn-sm">Delete</button>
                 
            </th>

     
        </tr>
     
    </React.Fragment>
)


export default DisplayAuthor