import { EMarketRateActionType, IMarketRateAction } from "../types";

const marketRateReducer = (state = [], action: IMarketRateAction) => {
    switch (action.type) {
        case EMarketRateActionType.get_ports:
            return action.payload;
        default:
            return state
    }
}

export default marketRateReducer;