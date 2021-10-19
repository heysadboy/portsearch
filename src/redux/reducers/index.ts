import { combineReducers } from "redux";
import marketRateReducer from "./marketRateReducer";
import portReducer from "./portReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
    ports: portReducer,
    marketRates: marketRateReducer,
    status: statusReducer
});