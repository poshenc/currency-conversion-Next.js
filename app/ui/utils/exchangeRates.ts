import { ExchangeRate, ExchangeRateDto } from "../api/request";

export const transform = (exRatesDto: ExchangeRateDto[]): ExchangeRate[] => {
  return exRatesDto.map(rate => ({
    id: rate.id,
    currency: rate.currency,
    currencyIcon: rate.currency_icon,
    twdPrice: rate.twd_price.toString(),
    amountDecimal: Number(rate.amount_decimal),
  }))
}

export const formatToThousandsSeparator = (number: string | undefined, precision?: number): string => {
  if (!number) return ''
  const [integerPart, decimalPart] = number.split('.')
  const integerPartWithThousandsSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const decimalWithPrecision = decimalPart ? '.' + decimalPart.substring(0, precision) : ''
  return integerPartWithThousandsSeparator + decimalWithPrecision
}

const calculateConversionRate = (baseRateStr: string, quoteRateStr: string): string => {
  const baseRate = parseFloat(baseRateStr)
  const quoteRate = parseFloat(quoteRateStr)
  return (baseRate / quoteRate).toString()
}

export const getConversionRate = (baseId: string, quoteId: string, listExchangeRates: ExchangeRate[]): string => {
  let baseRateStr = ""
  let quoteRateStr = ""

  listExchangeRates.forEach(exchange => {
    if (exchange.id === baseId) {
      baseRateStr = exchange.twdPrice;
    } else if (exchange.id === quoteId) {
      quoteRateStr = exchange.twdPrice;
    }
  })

  if (!baseRateStr || !quoteRateStr) return '1.00'

  return calculateConversionRate(baseRateStr, quoteRateStr)
}

export const convertAndFormatBaseRate = (baseAmountStr: string, exchangeRateStr: string, precision: number): string => {
  if (!baseAmountStr || !exchangeRateStr) return ''
  const result = Number(baseAmountStr) * Number(exchangeRateStr)
  return formatToThousandsSeparator(result.toString(), precision)
}

export const convertAndFormatQuoteRate = (quoteAmountStr: string, exchangeRateStr: string, precision: number): string => {
  if (!quoteAmountStr || !exchangeRateStr) return ''
  const result = Number(quoteAmountStr) / Number(exchangeRateStr)
  return formatToThousandsSeparator(result.toString(), precision)
}