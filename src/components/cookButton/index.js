import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const CookButton = (props) => {
    console.log(props)
    return (
        <div>
            {
                <Link
                    to={`/recipes/${props.recipe.sys.id}`}
                    onClick={() => props.setCurrentRecipe(props.recipe)}
                    className="cook-button"
                >
                    LET'S COOK
                </Link>
            }
        </div>
    )
}

export default CookButton
