import React from 'react'

const Band = (props) => {
    //console.log(props.band)
    return (
        <div>
            <li> {props.band.name} </li>
            <button onClick={() => props.deleteBand(props.band.id)}>Delete</button>
        </div>
    );
};

export default Band;