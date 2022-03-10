export function getFilteredRecipes(state) {
    if (state.recipeReducer.categoryFilter || state.recipeReducer.typeFilter) {
        if (
            state.recipeReducer.categoryFilter &&
            !state.recipeReducer.typeFilter
        ) {
            console.log('hello from difficulty')
            return state.recipeReducer.allRecipes.filter(
                (recipe) =>
                    recipe.difficulty === state.recipeReducer.categoryFilter
            )
        } else if (
            state.recipeReducer.typeFilter &&
            !state.recipeReducer.categoryFilter
        ) {
            console.log('hello from type')
            return state.recipeReducer.allRecipes.filter((recipe) =>
                recipe.type.includes(state.recipeReducer.typeFilter)
            )
        } else {
            console.log('hello from both')
            return state.recipeReducer.allRecipes.filter(
                (recipe) =>
                    recipe.type.includes(state.recipeReducer.typeFilter) &&
                    recipe.difficulty === state.recipeReducer.categoryFilter
            )
        }
    } else {
        return [...state.recipeReducer.allRecipes]
    }
}
