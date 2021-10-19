import { ThunkDispatch } from "redux-thunk";
import api from "../../api";
import { AppState, IMarketRateAction, EPortActionType, IPort, IPortAction, IMarketRate, EMarketRateActionType } from "../../types";

export const getPortsData = () => async (dispatch: ThunkDispatch<AppState, {}, IPortAction>) => {
    const response = await api.get("/ports");
    const portsData: IPort[] = response.data as IPort[];
    const portAction: IPortAction = { type: EPortActionType.get_ports, payload: portsData };
    dispatch(portAction);
};

export const getMarketRatesData = (origin: string, destination: string) => async (dispatch: ThunkDispatch<AppState, {}, IMarketRateAction>) => {
    const params = {
        "origin": origin,
        "destination": destination
    }
    const response = await api.get(`/rates`, { params: params });
    const marketRatesData: IMarketRate[] = response.data as IMarketRate[];
    const marketRateAction: IMarketRateAction = { type: EMarketRateActionType.get_ports, payload: marketRatesData };
    dispatch(marketRateAction);
};