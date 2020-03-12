import React from 'react'
import './Button.css'

export default (props) => {
    return(
        <div>
            <input type="submit" id={props.id} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}