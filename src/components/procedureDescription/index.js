import React from 'react'
import './style.scss'

const ProcedureDescription = (props) => {
    return (
        <div className="procedure-desc">
            <p className="procedure-header">Steps to Make:</p>
            {props.currentRecipe.procedure.split('\n').map((val) => (
                <p className="instruction-text">{val}</p>
            ))}
        </div>
    )
}

export default ProcedureDescription
