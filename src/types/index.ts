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