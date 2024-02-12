import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    cart: []
}

const  shoppingListSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       
        getCarts(state, action) {
          
      if(!state.cart.includes(action.payload)){
          
          return {...state, cart:[...state.cart, action.payload]}
      } else { 
         alert(`${payload.action} is already in the cart`)
          return{...state, cart:[...state.cart]}
          
         
        }
            
        },
        deletItemInTheCart(state, action) {
            console.log("texting delet action")
           console.log(action.payload)
          
                console.log("executing")
            return{...state, cart:sta.cart.filter(eleme =>eleme !==action.payload)}
            
      }
       
        
    }
})
export const { getCarts , deletItemInTheCart} = shoppingListSlice.actions
console.log(shoppingListSlice.reducer)
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