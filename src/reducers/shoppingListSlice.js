import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    cart: []
}

const  shoppingListSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       
        getCarts(state, action) {
            return {...state, cart:[...state.cart, action.payload]}
            
        }
      
       
        
    }
})
export const { getCarts } =  shoppingListSlice.actions
export default  shoppingListSlice.reducer;