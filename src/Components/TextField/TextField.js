import React from 'react';
import './TextField.css'

export default (props) => {
    return(
        <div>
            <input type="text" id={props.id} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}