import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    shoppingList: []
}

const shoppingListSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
       
        getShoppingList(state, action) {
            return { ...state, shoppingList: [...state.shoppingList, action.payload] }
            
            
        }
        
       
        
    }
})
export const { getShoppingList } = shoppingListSlice.actions
export default shoppingListSlice.reducer;