import { EActionType, EStatusType, IAction } from "../../types";

const statusReducer = (state = EStatusType.initial, action: IAction) => {
    switch (action.type) {
        case EActionType.set_status:
            return action.payload;
        default:
            return state
    }
}

export default statusReducer;