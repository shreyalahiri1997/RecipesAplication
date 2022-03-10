import React from 'react'
import './style.scss'

const ClearButton = (props) => {
    return (
        <div>
            <button
                className="clear-button"
                onClick={() => props.clickHandler()}
            >
                {props.buttonText}
            </button>
        </div>
    )
}

export default ClearButton
