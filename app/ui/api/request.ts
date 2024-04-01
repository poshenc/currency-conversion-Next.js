import axios from "axios";

export interface ExchangeRateDto {
  id: string;
  currency: string;
  currency_icon: string;
  twd_price: number;
  amount_decimal: string;
}

export interface ExchangeRate {
  id: string;
  currency: string;
  currencyIcon: string;
  twdPrice: string;
  amountDecimal: number;
}


export const queryExchangeRates: () => Promise<ExchangeRateDto[]> = async () => {
  const twdData = {
    "currency": "TWD",
    "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/673.jpg",
    "twd_price": 1.00,
    "amount_decimal": "2",
    "id": "twd"
  }

  const { data } = await axios.get<ExchangeRateDto[]>('https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs')
  return [...data, twdData]
}