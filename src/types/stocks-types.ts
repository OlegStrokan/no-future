type DailyData = {
    day: {
        open: string,
        high: string,
        low: string,
        close: string,
        adjustedClose: string,
        volume: string,
        dividendAmount: string,
        splitCoefficient: string,
    },
}


export type StocksDataType = {
    MetaData: {
        information: string,
        symbol: string,
        LastRefreshed: string,
        OutputSize: string,
        TimeZone: string,
    },
    TimeSeries: DailyData[]
}
