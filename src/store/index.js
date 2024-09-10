import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/Cart-slice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})
export default store