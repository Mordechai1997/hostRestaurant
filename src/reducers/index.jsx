import { combineReducers } from "redux";

const tablesListReducer = (intial = null, action) => {
    if (action.type === 'ADD') {
        return action.payload
    }
    return intial;
}

const closedOrders = (intial = null, action) => {
    if (action.type === 'FINISH') {
        return intial ? [...intial, action.payload] : [action.payload]
    }
    return intial;
}

export default combineReducers({
    list: tablesListReducer,
    closedOrders:closedOrders
});