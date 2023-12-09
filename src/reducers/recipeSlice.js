import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recipe: {},
    bookMarks: []
}

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        getRecipeObject(state, action) {
            state.recipe = action.payload
            console.log(action.payload)
        }
        
    }
})
export const { getRecipeObject } = recipeSlice.actions
export default recipeSlice.reducer;