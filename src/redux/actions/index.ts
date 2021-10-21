import { ThunkDispatch } from "redux-thunk";
import api from "../../api";
import { AppState, IAction, EActionType, IPort, IMarketRate, EStatusType, } from "../../types";

//Action creator to get the ports data
export const getPortsData = () => async (dispatch: ThunkDispatch<AppState, {}, IAction>) => {
    const response = await api.get("/ports");
    const portsData: IPort[] = response.data as IPort[];
    portsData.sort((a,b) => a.name.localeCompare(b.name));
    const portAction: IAction = { type: EActionType.get_ports, payload: portsData };
    dispatch(portAction);
};

//Action creator to get the market data based on the origin and destination
export const getMarketRatesData = (origin: string, destination: string) => async (dispatch: ThunkDispatch<AppState, {}, IAction>) => {
    const params = {
        "origin": origin,
        "destination": destination
    }
    setStatus(EStatusType.loading)(dispatch);
    try {
        const response = await api.get(`/rates`, { params: params });
        const marketRatesData: IMarketRate[] = response.data as IMarketRate[];
        const marketRateAction: IAction = { type: EActionType.get_market_rates, payload: marketRatesData };
        dispatch(marketRateAction);
        setStatus(EStatusType.ok)(dispatch);
    }
    catch {
        //Set error if unable to get the data
        setStatus(EStatusType.error)(dispatch);
    }
};

//Action creator to set the status
export const setStatus = (status: EStatusType) => async (dispatch: ThunkDispatch<AppState, {}, IAction>) => {
    const statusAction: IAction = { type: EActionType.set_status, payload: status };
    dispatch(statusAction);
}