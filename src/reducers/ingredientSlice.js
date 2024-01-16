import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    ingredients: []
}

const ingredientSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
       
        getIngredients(state, action) {
            return {...state, ingredients:[...state.ingredients, action.payload]}
            
        }
        ,
        clearIngredientList(state, action) {
            return {...state, ingredients:[...state.ingredients, action.payload]}
            
        }
       
        
    }
})
export const { getIngredients, clearIngredientList } = ingredientSlice.actions
export default ingredientSlice.reducer;