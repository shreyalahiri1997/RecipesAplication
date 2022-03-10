import axios from 'axios'
import {
    GET_RECIPE,
    GET_RECIPE_FAILURE,
    GET_RECIPE_SUCCESS,
    SET_CATEGORY_FILTER,
    SET_TYPE_FILTER,
    SET_CURRENT_RECIPE,
    CLEAR_ALL_FILTERS,
    GET_CURRENT_RECIPE,
    GET_CURRENT_RECIPE_SUCCESS,
    GET_CURRENT_RECIPE_FAILURE,
} from '../constants/actions'
import { recipeByIdQueryString, recipeQueryString } from '../constants/query'

export const getRecipesData = () => {
    return {
        type: GET_RECIPE,
    }
}

export const getRecipesDataSuccess = (payload) => {
    return {
        type: GET_RECIPE_SUCCESS,
        payload,
    }
}

export const getRecipesDataFailure = (error) => {
    return {
        type: GET_RECIPE_FAILURE,
        error,
    }
}

export const setCategoryFilter = (filterValue) => {
    return {
        type: SET_CATEGORY_FILTER,
        filterValue,
    }
}

export const setTypeFilter = (filterValue) => {
    return {
        type: SET_TYPE_FILTER,
        filterValue,
    }
}

export const clearAllFilters = () => {
    return {
        type: CLEAR_ALL_FILTERS,
    }
}

export const setCurrentRecipe = (payload) => {
    return {
        type: SET_CURRENT_RECIPE,
        payload,
    }
}

export const getCurrentRecipesData = () => {
    return {
        type: GET_CURRENT_RECIPE,
    }
}

export const getCurrentRecipesDataSuccess = (payload) => {
    return {
        type: GET_CURRENT_RECIPE_SUCCESS,
        payload,
    }
}

export const getCurrentRecipesDataFailure = (error) => {
    return {
        type: GET_CURRENT_RECIPE_FAILURE,
        error,
    }
}
export const getRecipeDataApi = () => (dispatch) => {
    console.log('hi from action')
    dispatch(getRecipesData())
    axios
        .post(
            `https://graphql.contentful.com/content/v1/spaces/83c2hpje1nb1/environments/master?access_token=F61d_Z4ITL5j_gZ0tBClHQm_WKz7W8fMiJs59IpG2D8`,
            { query: recipeQueryString }
        )
        .then((res) => {
            console.log(res.data.data)
            dispatch(getRecipesDataSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(getRecipesDataFailure(err))
            console.log(err)
        })
}

export const getCurrentRecipeDataApi = (id) => (dispatch) => {
    console.log('hi from current action')
    dispatch(getCurrentRecipesData())
    axios
        .post(
            `https://graphql.contentful.com/content/v1/spaces/83c2hpje1nb1/environments/master?access_token=F61d_Z4ITL5j_gZ0tBClHQm_WKz7W8fMiJs59IpG2D8`,
            { query: recipeByIdQueryString(id) }
        )
        .then((res) => {
            console.log(res.data.data)
            dispatch(getCurrentRecipesDataSuccess(res.data.data))
        })
        .catch((err) => {
            dispatch(getCurrentRecipesDataFailure(err))
            console.log(err)
        })
}
