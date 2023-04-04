import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from './reducers/categoryReducers'
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
  categoryReducer, 
  productReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))


export default store