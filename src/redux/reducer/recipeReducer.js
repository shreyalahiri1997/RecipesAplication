import {
    CLEAR_ALL_FILTERS,
    GET_RECIPE,
    GET_RECIPE_FAILURE,
    GET_RECIPE_SUCCESS,
    SET_CATEGORY_FILTER,
    SET_TYPE_FILTER,
    SET_CURRENT_RECIPE,
    GET_CURRENT_RECIPE,
    GET_CURRENT_RECIPE_SUCCESS,
    GET_CURRENT_RECIPE_FAILURE,
} from '../../constants/actions'

const initialState = {
    allRecipes: [],
    masterAllRecipes: [],
    filteredRecipes: [],
    isRecipeLoading: false,
    isRecipeLoadingSuccess: false,
    isRecipeLoadingFailed: false,
    currentRecipe: {},
    categoryFilter: '',
    typeFilter: '',
    isCurrentRecipeLoading: false,
    isCurrentRecipeLoadingSuccess: false,
    isCurrentRecipeLoadingFailed: false,
}

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPE: {
            return {
                ...state,
                isRecipeLoading: true,
                isRecipeLoadingSuccess: false,
                isRecipeLoadingFailed: false,
            }
        }
        case GET_RECIPE_SUCCESS: {
            console.log(action)
            const { recipesCollection } = action.payload
            return {
                ...state,
                isRecipeLoading: false,
                isRecipeLoadingSuccess: true,
                isRecipeLoadingFailed: false,
                allRecipes: [...recipesCollection.items],
                masterAllRecipes: [...recipesCollection.items],
            }
        }
        case GET_RECIPE_FAILURE: {
            return {
                ...state,
                isRecipeLoading: false,
                isRecipeLoadingSuccess: false,
                isRecipeLoadingFailed: true,
            }
        }
        case SET_CURRENT_RECIPE: {
            return {
                ...state,
                currentRecipe: action.payload,
                isCurrentRecipeLoading: false,
                isCurrentRecipeLoadingSuccess: true,
                isCurrentRecipeLoadingFailed: false,
            }
        }
        case SET_CATEGORY_FILTER: {
            return {
                ...state,
                categoryFilter: action.filterValue,
            }
        }
        case SET_TYPE_FILTER: {
            return {
                ...state,
                typeFilter: action.filterValue,
            }
        }
        case CLEAR_ALL_FILTERS: {
            return {
                ...state,
                categoryFilter: '',
                typeFilter: '',
            }
        }
        case GET_CURRENT_RECIPE: {
            return {
                ...state,
                isCurrentRecipeLoading: true,
                isCurrentRecipeLoadingSuccess: false,
                isCurrentRecipeLoadingFailed: false,
            }
        }
        case GET_CURRENT_RECIPE_SUCCESS: {
            console.log(action)
            const { recipes } = action.payload
            return {
                ...state,
                isCurrentRecipeLoading: false,
                isCurrentRecipeLoadingSuccess: true,
                isCurrentRecipeLoadingFailed: false,
                currentRecipe: { ...recipes },
            }
        }
        case GET_CURRENT_RECIPE_FAILURE: {
            return {
                ...state,
                isCurrentRecipeLoading: false,
                isCurrentRecipeLoadingSuccess: false,
                isCurrentRecipeLoadingFailed: true,
            }
        }
        default:
            return state
    }
}
