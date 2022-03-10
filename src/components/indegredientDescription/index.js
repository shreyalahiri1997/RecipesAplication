import React from 'react'
import './style.scss'

const IngredientDescription = (props) => {
    return (
        <div className="row">
            <div className="column-one">
                <img
                    className="recipe-image"
                    alt="recipe-img"
                    src={props.currentRecipe.image.url}
                />
            </div>

            <div className="column-two">
                <div className="row-desc">
                    <p className="ingredient-header">INGREDIENTS</p>
                    <div className="column-ingredient">
                        {props.currentRecipe.ingredients
                            .split('\n')
                            .map((val) => (
                                <li className="ingredient-info">{val}</li>
                            ))}
                    </div>
                </div>

                <p className="ingredient-header">
                    Serves: {props.currentRecipe.serving}
                </p>
                <p className="ingredient-header">
                    Difficulty: {props.currentRecipe.difficulty}
                </p>
                <p className="ingredient-header">
                    Category: {props.currentRecipe.type}
                </p>
            </div>
        </div>
    )
}

export default IngredientDescription
