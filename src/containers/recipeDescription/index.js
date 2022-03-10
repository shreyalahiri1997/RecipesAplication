import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import IngredientDescription from '../../components/indegredientDescription'
import ProcedureDescription from '../../components/procedureDescription'
import RecipeHeader from '../../components/recipeHeader'
import {
    getCurrentRecipeDataApi,
    getRecipeDataApi,
    setCurrentRecipe,
} from '../../redux/actions'
import './style.scss'

const RecipeDescription = (props) => {
    const { id } = useParams()
    React.useEffect(() => {
        if (!props.allRecipes) {
            props.getAllRecipes()
        }

        if (!props.currentRecipe.title) {
            props.getCurrentRecipe(id)
        }
    }, [props, id])

    return (
        <div className="recipe-view">
            {props.currentRecipe.title && (
                <div>
                    <RecipeHeader title={props.currentRecipe.title} />
                    <IngredientDescription {...props} />
                    <ProcedureDescription {...props} />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentRecipe: state.recipeReducer.currentRecipe,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllRecipes: () => {
            dispatch(getRecipeDataApi())
        },
        setCurrentRecipe: (val) => {
            dispatch(setCurrentRecipe(val))
        },
        getCurrentRecipe: (id) => {
            dispatch(getCurrentRecipeDataApi(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDescription)
