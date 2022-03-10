import React from 'react'
import difficultyIcon from '../../assets/difficulty-icon.png'
import foodIcon from '../../assets/dinner-icon.png'
import CookButton from '../cookButton'
import './style.scss'

const RecipeCard = (props) => {
    console.log(props.recipeVal)
    return (
        <div>
            {props.recipeVal && (
                <div className="card">
                    <img alt="recipe-img" src={props.recipeVal.image.url} />
                    <div className="container">
                        <p>{props.recipeVal.title.toUpperCase()}</p>
                        <span className="info-val">
                            <img
                                alt="diff-icon"
                                src={difficultyIcon}
                                id="card-icon"
                            />
                            <p>{props.recipeVal.difficulty}</p>
                        </span>
                        <span className="info-val">
                            <img
                                alt="type-icon"
                                src={foodIcon}
                                id="card-icon"
                            />
                            <p>{props.recipeVal.type}</p>
                        </span>
                        <div className="button-cont">
                            <CookButton
                                recipe={props.recipeVal}
                                setCurrentRecipe={props.setCurrentRecipe}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RecipeCard
