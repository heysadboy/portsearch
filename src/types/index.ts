import combineReducers from '../redux/reducers';

export interface IPort {
    code: string,
    name: string
}

export interface IMarketRate {
    day: string,
    mean: number | null,
    low: number | null,
    high: number | null
}

export interface IPointData {
    day: string,
    value: number | null
}

export interface ILineData {
    name: string,
    color: string,
    values: IPointData[]
}

export interface IGraphData {
    [key: string]: ILineData
}

export interface IPortAction {
    type: EPortActionType
    payload: IPort[]
}

export interface IMarketRateAction {
    type: EMarketRateActionType
    payload: IMarketRate[]
}

export enum EPortActionType {
    get_ports = "GET_PORTS"
}

export enum EMarketRateActionType {
    get_ports = "GET_MARKET_RATES"
}

export type AppState = ReturnType<typeof combineReducers>;
