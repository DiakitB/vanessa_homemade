import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/recipeSlice";
import bookMarkSlice from "./reducers/bookMarkSlice";

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        bookmark: bookMarkSlice
    }
})

console.log(store.getState())
// console.log(store)
export default store