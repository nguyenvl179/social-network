import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    UserReducer: UserReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk))