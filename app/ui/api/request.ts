import axios from "axios";

export interface ExchangeRatesDto {
  id: string;
  currency: string;
  currency_icon: string;
  twd_price: number;
  amount_decimal: string;
}

export interface ExchangeRates {
  id: string;
  currency: string;
  currency_icon: string;
  twd_price: string;
  amount_decimal: number;
}

export const queryExchangeRates: () => Promise<ExchangeRatesDto[]> = async () => {
  const { data } = await axios.get<ExchangeRatesDto[]>('https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs')
  return data
}