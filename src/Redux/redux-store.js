import {applyMiddleware, combineReducers, createStore} from "redux";
import reportReducer from "./report-reducer";
import thunkMiddleware  from "redux-thunk";

let reducersBatch = combineReducers({
    reportPath:reportReducer
});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export default store;