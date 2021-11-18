import React from 'react'

const Band = (props) => {
    return (
        <div> 
            <li> {props.band.name} </li>
            <button onClick={() => props.delete(props.key)}>Delete</button>
        </div>
    );
};

export default Band;