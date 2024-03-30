import { ExchangeRates, ExchangeRatesDto } from "../api/request";

export const transform = (exRatesDto: ExchangeRatesDto[]): ExchangeRates[] => {
  return exRatesDto.map(rate => ({
    ...rate,
    twd_price: rate.twd_price.toString(),
    amount_decimal: Number(rate.amount_decimal),
  }))
}

export const formatToThousandsSeparator = (number: string): string => {
  const [integerPart, decimalPart] = number.split('.')
  const integerPartWithThousandsSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return integerPartWithThousandsSeparator + '.' + decimalPart
}

const calculateConversionRate = (baseRateStr: string, quoteRateStr: string): string => {
  const baseRate = parseFloat(baseRateStr)
  const quoteRate = parseFloat(quoteRateStr)
  return (baseRate / quoteRate).toString()
}

export const getConversionRate = (baseId: string, quoteId: string, listExchangeRates: ExchangeRates[]): string => {
  let baseRateStr = ""
  let quoteRateStr = ""

  listExchangeRates.forEach(exchange => {
    if (exchange.id === baseId) {
      baseRateStr = exchange.twd_price;
    } else if (exchange.id === quoteId) {
      quoteRateStr = exchange.twd_price;
    }
  })

  if (!baseRateStr || !quoteRateStr) return ''

  return calculateConversionRate(baseRateStr, quoteRateStr)
}