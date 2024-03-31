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
  // const { data } = await axios.get<ExchangeRateDto[]>('https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs')
  // return data

  const FAKE = [
    {
      "currency": "GHS",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/673.jpg",
      "twd_price": 37081.21,
      "amount_decimal": "7",
      "id": "1"
    },
    {
      "currency": "LKR",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/543.jpg",
      "twd_price": 43527.61,
      "amount_decimal": "8",
      "id": "2"
    },
    {
      "currency": "ALL",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg",
      "twd_price": 74646.28,
      "amount_decimal": "2",
      "id": "3"
    },
    {
      "currency": "YER",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/356.jpg",
      "twd_price": 11562.91,
      "amount_decimal": "4",
      "id": "4"
    },
    {
      "currency": "BTN",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg",
      "twd_price": 36709.41,
      "amount_decimal": "2",
      "id": "5"
    },
    {
      "currency": "TJS",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/117.jpg",
      "twd_price": 7167.12,
      "amount_decimal": "1",
      "id": "6"
    },
    {
      "currency": "SCR",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
      "twd_price": 25104.22,
      "amount_decimal": "5",
      "id": "7"
    },
    {
      "currency": "BDT",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/565.jpg",
      "twd_price": 34528.78,
      "amount_decimal": "8",
      "id": "8"
    },
    {
      "currency": "TOP",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg",
      "twd_price": 48985.66,
      "amount_decimal": "8",
      "id": "9"
    },
    {
      "currency": "VND",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
      "twd_price": 59104.96,
      "amount_decimal": "2",
      "id": "10"
    },
    {
      "currency": "KRW",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg",
      "twd_price": 76446.03,
      "amount_decimal": "3",
      "id": "11"
    },
    {
      "currency": "KGS",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/644.jpg",
      "twd_price": 93279.96,
      "amount_decimal": "1",
      "id": "12"
    },
    {
      "currency": "VES",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
      "twd_price": 26522.74,
      "amount_decimal": "6",
      "id": "13"
    },
    {
      "currency": "NGN",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/155.jpg",
      "twd_price": 55584.72,
      "amount_decimal": "9",
      "id": "14"
    },
    {
      "currency": "USD",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/580.jpg",
      "twd_price": 77743.94,
      "amount_decimal": "5",
      "id": "15"
    },
    {
      "currency": "AOA",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1247.jpg",
      "twd_price": 4746.58,
      "amount_decimal": "6",
      "id": "16"
    },
    {
      "currency": "AMD",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/742.jpg",
      "twd_price": 13124.77,
      "amount_decimal": "4",
      "id": "17"
    },
    {
      "currency": "GNF",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/153.jpg",
      "twd_price": 16020.69,
      "amount_decimal": "6",
      "id": "18"
    },
    {
      "currency": "HRK",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/947.jpg",
      "twd_price": 60272.45,
      "amount_decimal": "9",
      "id": "19"
    },
    {
      "currency": "BTN",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/598.jpg",
      "twd_price": 88932.05,
      "amount_decimal": "3",
      "id": "20"
    },
    {
      "currency": "EEK",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/498.jpg",
      "twd_price": 82148.97,
      "amount_decimal": "1",
      "id": "21"
    },
    {
      "currency": "GEL",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/865.jpg",
      "twd_price": 65987.11,
      "amount_decimal": "8",
      "id": "22"
    },
    {
      "currency": "MZN",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/816.jpg",
      "twd_price": 12469.73,
      "amount_decimal": "5",
      "id": "23"
    },
    {
      "currency": "SAR",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
      "twd_price": 85131.41,
      "amount_decimal": "2",
      "id": "24"
    },
    {
      "currency": "XOF",
      "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/562.jpg",
      "twd_price": 18815.22,
      "amount_decimal": "9",
      "id": "25"
    }
  ]

  const twdData = {
    "currency": "TWD",
    "currency_icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/673.jpg",
    "twd_price": 1.00,
    "amount_decimal": "2",
    "id": "twd"
  }

  FAKE.push(twdData)

  return FAKE
}