import React from 'react'
import './style.scss'

const RecipeHeader = (props) => {
    return <div className="recipe-header">{props.title.toUpperCase()}</div>
}

export default RecipeHeader
