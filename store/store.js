import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { combineReducers } from 'redux'
const reducer = combineReducers({
    cart: cartSlice,
 
})

export default configureStore({
  reducer
});
