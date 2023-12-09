import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/recipeSlice";

const store = configureStore({
    reducer: {
        recipe: recipeReducer
    }
})

console.log(store.getState())
// console.log(store)
export default store