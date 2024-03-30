import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { ExchangeRate, queryExchangeRates } from "../api/request";
import { getConversionRate, transform } from "../utils/exchangeRates";

export const useExchangeRates = () => {
  const query = useQuery({
    queryKey: ['CurrencyExRate'],
    queryFn: queryExchangeRates
  })

  const exchangeRates = useMemo(() => {
    return transform(query.data ?? [])
  }, [query.data])

  const getConversionRateByCurrencyIds = useCallback((baseId: string, quoteId: string) => {
    return getConversionRate(baseId, quoteId, exchangeRates)
  }, [exchangeRates])

  const getRateByCurrencyId = useCallback((currencyId: string) => {
    return exchangeRates.find(rate => rate.id === currencyId) ?? {} as ExchangeRate
  }, [exchangeRates])

  return {
    query,
    exchangeRates,
    getConversionRateByCurrencyIds,
    getRateByCurrencyId
  }
}
