"use client"

import { useRouter } from "next/navigation"
import { useContext, useEffect, useMemo, useState } from "react"
import CurrencySelection from "../currency-selection/CurrencySelection"
import Header from "../ui/components/Header/Header"
import { DialogContext } from "../ui/context/DialogContext"
import { useExchangeRates } from "../ui/hooks/useExchangeRates"
import CurrencyLabel from "../ui/components/CurrencyLabel/CurrencyLabel"
import SelectionButton from "../ui/components/Buttons/SelectionButton/SelectionButton"
import styles from './page.module.css'
import Input from "../ui/components/Input/Input"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { ExchangeRate } from "../ui/api/request"
import { convertBaseRate, convertQuoteRate, formatToThousandsSeparator } from "../ui/utils/exchangeRates"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../ui/store"
import { conversionActions } from "../ui/store/conversion/conversion-action"

export default function RateConversion() {

  const router = useRouter()
  const dispatch = useDispatch()

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

  const { openDialog, closeDialog } = useContext(DialogContext)

  const { exchangeRates, getConversionRateByCurrencyIds, getRateByCurrencyId } = useExchangeRates()

  useEffect(() => {
    // update rate
    const conversionRate = getConversionRateByCurrencyIds(baseCurrencyId, quoteCurrencyId)
    setConversionRate(conversionRate)

    // update base currency data
    const baseCurrency = getRateByCurrencyId(baseCurrencyId)
    setBaseCurrency(baseCurrency)

    // update quote currency data
    const quoteCurrency = getRateByCurrencyId(quoteCurrencyId)
    setQuoteCurrency(quoteCurrency)
  }, [baseCurrencyId, quoteCurrencyId, exchangeRates])

  const selectHandler = (currencyType: string, currencyId: string) => {
    // update one of the currency selection in redux state
    dispatch(conversionActions.updateConversionCurrency({ currencyType, currencyId }))
  }

  const openCurrencySelection = (currencyId: string | undefined, currencyType: string) => {
    if (currencyId) {
      openDialog(<CurrencySelection defaultValue={currencyId} exchangeRates={exchangeRates} onSelect={(id) => selectHandler(currencyType, id)} onClose={closeDialog}></CurrencySelection>)
    }
  }

  const baseAmountHandler = (amount: string) => {
    setAmountEntered(amount)
    setIsLastEditedBaseAmt(true)
  }

  const quoteAmountHandler = (amount: string) => {
    setAmountEntered(amount)
    setIsLastEditedBaseAmt(false)
  }

  const closeHandler = () => {
    router.push('/')
  }

  // for rendering description of exchange rate 
  let rateContent = null
  if (baseCurrency && quoteCurrency && conversionRate) {
    const conversionRateWithPrecision = formatToThousandsSeparator(conversionRate, quoteCurrency.amountDecimal)
    rateContent =
      <div className={styles.rate}>
        1 {baseCurrency.currency} ≈ <strong>{conversionRateWithPrecision}</strong> {quoteCurrency.currency}
      </div>
  }

  // convert rate depending on the last edited input is base currency or quote currency
  let baseAmount, quoteAmount
  if (isLastEditedBaseAmt) {
    baseAmount = amountEntered
    let quoteAmountBeforeRounding = convertBaseRate(baseAmount, conversionRate)
    quoteAmount = formatToThousandsSeparator(quoteAmountBeforeRounding, quoteCurrency.amountDecimal)
  } else {
    quoteAmount = amountEntered
    let baseAmountBeforeRounding = convertQuoteRate(quoteAmount, conversionRate)
    baseAmount = formatToThousandsSeparator(baseAmountBeforeRounding, baseCurrency.amountDecimal)
  }

  return (
    <>
      <div></div>
      <Header title={"Rate Conversion"} onClose={closeHandler}></Header>

      <div className={styles['conversion-container']}>
        <div className={`${styles.field} ${styles.base}`}>
          <SelectionButton onClick={() => openCurrencySelection(baseCurrency.id, 'base')}>
            <CurrencyLabel fontWeight="500" exchangeRate={baseCurrency} ></CurrencyLabel>
          </SelectionButton>
          <Input id="baseCurrencyAmt" value={baseAmount} onValueChange={baseAmountHandler} textAlign="right" />
          <div className={styles.arrow}>
            <KeyboardDoubleArrowDownIcon className={styles['arrow-icon']} />
          </div>
          {rateContent}
        </div>

        <div className={`${styles.field} ${styles.quote}`}>
          <SelectionButton onClick={() => openCurrencySelection(quoteCurrency.id, 'quote')}>
            <CurrencyLabel fontWeight="600" exchangeRate={quoteCurrency}></CurrencyLabel>
          </SelectionButton>
          <Input id="quoteCurrencyAmt" value={quoteAmount} onValueChange={quoteAmountHandler} textAlign="right" />
        </div>
      </div>
    </>
  )
}