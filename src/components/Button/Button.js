import React from 'react'
import './Button.css'

const Button = props => {
    return (
        <button
            onClick={props.onClick}
            className={props.className}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button