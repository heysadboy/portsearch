import { IPortAction, EPortActionType} from "../../types";

const portReducer = (state = [], action: IPortAction) => {
    switch(action.type) {
        case EPortActionType.get_ports:
            return action.payload;
        default:
            return state;
    }
}

export default portReducer;