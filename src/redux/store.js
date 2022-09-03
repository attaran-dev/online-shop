import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from './counter'
import productsReducer from './products'
import cartReducer from './cart'

export default configureStore({
    reducer: {
        // counter: counterReducer,
        products: productsReducer,
        cart: cartReducer
    }
})