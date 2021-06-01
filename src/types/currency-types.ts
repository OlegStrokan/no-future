
type ValuteType = {
    CharCode: string;
    ID: string;
    Name: string;
    Nominal: number;
    NumCode: string;
    Previous: number;
    Value: number;
}

export type CurrencyType = {
    Date: string,
    PreviousDate: string,
    PreviousURL: string,
    Timestamp: string,
    valute: ValuteType[],
}