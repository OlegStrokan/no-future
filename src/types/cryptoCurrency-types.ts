
type Price = {
    name: string,
    value: number,
}

export type CryptoCurrencyType = {
    id: string,
    symbol: string,
    name: string,
    market_data: {
        current_price: Price[]
    }
}
