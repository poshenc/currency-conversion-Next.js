import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { queryExchangeRates } from "../api/request";
import { getConversionRate, transform } from "../utils/exchangeRates";

export const useExchangeRates = () => {
  const query = useQuery({
    queryKey: ['CurrencyExRate'],
    queryFn: queryExchangeRates
  })

  const exchangeRates = useMemo(() => {
    return transform(query.data ?? [])
  }, [query.data])

  const getPairRatesByCurrencyIds = useCallback((baseId: string, quoteId: string) => {
    return getConversionRate(baseId, quoteId, exchangeRates)
  }, [exchangeRates])

  return {
    query,
    exchangeRates,
    getPairRatesByCurrencyIds
  }
}
