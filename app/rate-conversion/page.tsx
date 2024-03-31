"use client"

import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import Header from "../ui/components/Header/Header"
import { useExchangeRates } from "../ui/hooks/useExchangeRates"
import { ExchangeRate } from "../ui/api/request"
import { convertAndFormatBaseRate, convertAndFormatQuoteRate } from "../ui/utils/exchangeRates"
import { useSelector } from "react-redux"
import { RootState } from "../ui/store"
import ConversionCard from "./components/ConversionCard/ConversionCard"
import CurrencyRow from "./components/CurrencyRow/CurrencyRow"

export default function RateConversion() {

  const router = useRouter()

  // redux state for currency selections
  const { baseCurrencyId, quoteCurrencyId } = useSelector((state: RootState) => state.conversion)

  // state for input amount entered
  const [amountEntered, setAmountEntered] = useState<string>('1')

  // state for currently editing input, true for baseCurrencyAmt, false for quoteCurrencyAmt
  const [isLastEditedBaseAmt, setIsLastEditedBaseAmt] = useState<boolean>(true)

  // state for calculated conversion rate
  const [conversionRate, setConversionRate] = useState<string>('')

  // state for currency data
  const [baseCurrency, setBaseCurrency] = useState<ExchangeRate>({} as ExchangeRate)
  const [quoteCurrency, setQuoteCurrency] = useState<ExchangeRate>({} as ExchangeRate)

  const { exchangeRates, getConversionRateByCurrencyIds, getRateByCurrencyId } = useExchangeRates()

  useEffect(() => {
    setConversionRate(getConversionRateByCurrencyIds(baseCurrencyId, quoteCurrencyId))
    setBaseCurrency(getRateByCurrencyId(baseCurrencyId))
    setQuoteCurrency(getRateByCurrencyId(quoteCurrencyId))
  }, [baseCurrencyId, quoteCurrencyId, exchangeRates])

  const [baseAmount, quoteAmount] = useMemo(() => {
    if (isLastEditedBaseAmt) {
      const quoteAmount = convertAndFormatBaseRate(amountEntered, conversionRate, quoteCurrency.amountDecimal)
      return [amountEntered, quoteAmount]
    } else {
      const baseAmount = convertAndFormatQuoteRate(amountEntered, conversionRate, baseCurrency.amountDecimal)
      return [baseAmount, amountEntered]
    }
  }, [amountEntered, conversionRate, baseCurrency, quoteCurrency])

  const amountChangeHandler = (amount: string, conversionType: "base" | "quote") => {
    setAmountEntered(amount)
    setIsLastEditedBaseAmt(conversionType === "base")
  }

  return (
    <>
      <Header title={"Rate Conversion"} onClose={() => router.push('/')}></Header>
      <ConversionCard baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} conversionRate={conversionRate}>
        <CurrencyRow
          conversionType={"base"}
          exchangeRate={baseCurrency}
          currencyAmount={baseAmount}
          onChangeCurrencyAmount={amount => amountChangeHandler(amount, "base")}>
        </CurrencyRow>
        <CurrencyRow
          conversionType={"quote"}
          exchangeRate={quoteCurrency}
          currencyAmount={quoteAmount}
          onChangeCurrencyAmount={amount => amountChangeHandler(amount, "quote")}>
        </CurrencyRow>
      </ConversionCard>
    </>
  )
}