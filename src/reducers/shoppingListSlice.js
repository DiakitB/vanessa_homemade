import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    cart: []
}

const  shoppingListSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       
        getCarts(state, action) {
          
      if(state.cart.includes(action.payload)){
          console.log(`${action.payload} is in the state already boddy`)
          return {...state, cart: state.cart.filter(elem => elem !==action.payload)}
      } else { 
          
          
          return {...state, cart:[...state.cart, action.payload]}
        }
            
        }
      
       
        
    }
})
export const { getCarts } = shoppingListSlice.actions
export function theManipulator() {
    
}
export default shoppingListSlice.reducer;


// Add item to array (if exists then remove) - Javascript
// this.array = [];
// selectCarouselItem(itemToAdd) {
//     if (this.array.indexOf(itemToAdd) != -1) {
//       this.array.splice(this.array.indexOf(itemToAdd), 1)
//     } else {
//       this.array.push(itemToAdd);
//     }
// }