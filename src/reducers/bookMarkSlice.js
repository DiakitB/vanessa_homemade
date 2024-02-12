import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    bookmark: {}
}

const bookMarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
       
        getBookMarkObject(state, action) {
            state.bookmark = action.payload
            
        }
       
        
    }
})
export const { getBookMarkObject } = bookMarkSlice.actions
console.log(bookMarkSlice)
export default bookMarkSlice.reducer;