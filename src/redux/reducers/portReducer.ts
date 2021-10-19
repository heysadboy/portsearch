import { IAction, EActionType} from "../../types";

const portReducer = (state = [], action: IAction) => {
    switch(action.type) {
        case EActionType.get_ports:
            return action.payload;
        default:
            return state;
    }
}

export default portReducer;