import React from 'react'
import { connect } from 'react-redux'
import logoImage from '../../assets/logo.PNG'
import {
    clearAllFilters,
    setCategoryFilter,
    setCurrentRecipe,
    setTypeFilter,
} from '../../redux/actions'
import Searchbar from '../searchbar'
import './style.scss'

const HeaderComponent = (props) => {
    return (
        <div className="header">
            <a href="/">
                <img alt="logo-pic" src={logoImage} />
            </a>
            {!props.isLoadingCompleted && props.isLoadingSuccessful && (
                <Searchbar
                    allRecipes={props.allRecipes}
                    setCurrentRecipe={props.setCurrentRecipe}
                    setCategoryFilter={props.setCategoryFilter}
                    setTypeFilter={props.setTypeFilter}
                    categoryFilter={props.categoryFilter}
                    typeFilter={props.typeFilter}
                    clearAllFilters={props.clearAllFilters}
                    currentRecipe={props.currentRecipe}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allRecipes: state.recipeReducer.allRecipes,
        isLoadingCompleted: state.recipeReducer.isRecipeLoading,
        isLoadingSuccessful: state.recipeReducer.isRecipeLoadingSuccess,
        categoryFilter: state.recipeReducer.categoryFilter,
        typeFilter: state.recipeReducer.typeFilter,
        currentRecipe: state.recipeReducer.currentRecipe,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentRecipe: (val) => {
            dispatch(setCurrentRecipe(val))
        },
        setCategoryFilter: (val) => {
            dispatch(setCategoryFilter(val))
        },
        setTypeFilter: (val) => {
            dispatch(setTypeFilter(val))
        },
        clearAllFilters: () => {
            dispatch(clearAllFilters())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
