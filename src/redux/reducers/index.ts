import { combineReducers } from "redux";
import marketRateReducer from "./marketRateReducer";
import portReducer from "./portReducer";


export default combineReducers({
    ports: portReducer,
    marketRates: marketRateReducer
});