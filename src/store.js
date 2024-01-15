import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/recipeSlice";
import bookMarkSlice from "./reducers/bookMarkSlice";
import ingredientSlice from "./reducers/ingredientSlice";

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        bookmark: bookMarkSlice,
        ingredients: ingredientSlice
    }
})

console.log(store.getState())
// console.log(store)
export default store