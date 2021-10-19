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
    day: Date | null,
    value: number | null
}

export interface ILineData {
    name: string,
    color: string,
    values: IPointData[]
}

export interface IGraphData {
    [key: string]: ILineData,
}

export enum EActionType {
    get_ports = "GET_PORTS",
    get_market_rates = "GET_MARKET_RATES",
    set_status = "SET_STATUS"
}

export enum EStatusType {
    ok = "OK",
    error = "ERROR",
    initial = "INITIAL",
    loading = "LOADING",
    no_position_selected = "NO_POSITION_SELECTED"
}

export interface IAction {
    type: EActionType
    payload: IPort[] | IMarketRate[] | EStatusType
}

export type AppState = ReturnType<typeof combineReducers>;
