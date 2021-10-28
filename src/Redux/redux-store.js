import {applyMiddleware, combineReducers, createStore} from "redux";
import reportReducer from "./report-reducer";
import thunkMiddleware  from "redux-thunk";
import filterDevicesReducer from "./filterDevices-reducer";

let reducersBatch = combineReducers({
    reportPath:reportReducer,
    filterDevicesPath: filterDevicesReducer
});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export default store;