
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
// import { nameReducer } from './reducers/name.reducer'
import { userReducer } from './reducers/user.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    nameModule: nameReducer,
    userModule: userReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store


//to print store after every use
store.subscribe(() => {
    console.log('Store state is:', store.getState())
})