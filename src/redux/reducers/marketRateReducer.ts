import { EActionType, IAction } from "../../types";

const marketRateReducer = (state = [], action: IAction) => {
    switch (action.type) {
        case EActionType.get_market_rates:
            return action.payload;
        default:
            return state
    }
}

export default marketRateReducer;