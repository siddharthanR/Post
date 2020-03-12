import React from 'react'
import './Button.css'

export default (props) => {
    return(
        <div>
            <input type={props.type} name={props.name}/>
        </div>
    )
}