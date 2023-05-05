import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import categoryReducer from './reducers/categoryReducers'

const rootReducer = combineReducers({
    productReducer,
    categoryReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store


