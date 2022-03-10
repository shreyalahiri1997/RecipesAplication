import React from 'react'
import { connect } from 'react-redux'
import { getRecipeDataApi, setCurrentRecipe } from '../../redux/actions'
import RecipeCard from '../../components/recipeCard'
import './style.scss'
import { getFilteredRecipes } from '../../redux/selectors'

const RecipeCollectionView = (props) => {
    React.useEffect(() => {
        props.getAllRecipes()
        props.setCurrentRecipe(null)
    }, [])

    return (
        <div>
            {!props.isLoadingCompleted && props.isLoadingSuccessful && (
                <div className="grid-container">
                    {props.allRecipes.map((val) => (
                        <div>
                            <RecipeCard
                                recipeVal={val}
                                setCurrentRecipe={props.setCurrentRecipe}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allRecipes: getFilteredRecipes(state),
        isLoadingCompleted: state.recipeReducer.isRecipeLoading,
        isLoadingSuccessful: state.recipeReducer.isRecipeLoadingSuccess,
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeCollectionView)
