import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter'
import productsReducer from './products'

export default configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer
    }
})