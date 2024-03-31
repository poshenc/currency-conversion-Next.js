"use client"

import { useRouter } from "next/navigation"
import { useContext, useEffect, useMemo, useState } from "react"
import CurrencySelection from "../currency-selection/CurrencySelection"
import TextButton from "../ui/components/Buttons/TextButton/TextButton"
import Header from "../ui/components/Header/Header"
import { DialogContext } from "../ui/context/DialogContext"
import { useExchangeRates } from "../ui/hooks/useExchangeRates"
import CurrencyLabel from "../ui/components/CurrencyLabel/CurrencyLabel"
import SelectionButton from "../ui/components/Buttons/SelectionButton/SelectionButton"
import styles from './page.module.css'
import Input from "../ui/components/Input/Input"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { ExchangeRate } from "../ui/api/request"
import { formatToThousandsSeparator } from "../ui/utils/exchangeRates"

export default function RateConversion() {

  const router = useRouter()

  // state for currency selections
  const [baseCurrencyId, setBaseCurrencyId] = useState<string>('1')
  const [quoteCurrencyId, setQuoteCurrencyId] = useState<string>('4')

  // state for input amount
  const [baseCurrencyAmt, setBaseCurrencyAmt] = useState<string>('100.28')
  const [quoteCurrencyAmt, setQuoteCurrencyAmt] = useState<string>('00.4869')

  // state for calculated conversion rate
  const [conversionRate, setConversionRate] = useState<string>('')

  // state for currency data
  const [baseCurrency, setBaseCurrency] = useState<ExchangeRate | null>(null)
  const [quoteCurrency, setQuoteCurrency] = useState<ExchangeRate | null>(null)

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

  const selectHandler = (currencyId: string, currencyType: string) => {
    if (currencyType === 'base') {
      setBaseCurrencyId(currencyId)
    } else if (currencyType === 'quote') {
      setQuoteCurrencyId(currencyId)
    }
  }

  const openCurrencySelection = (currencyId: string | undefined, currencyType: string) => {
    if (currencyId) {
      openDialog(<CurrencySelection defaultValue={currencyId} exchangeRates={exchangeRates} onSelect={(selectedCurrencyId) => selectHandler(selectedCurrencyId, currencyType)} onClose={closeDialog}></CurrencySelection>)
    }
  }

  const closeHandler = () => {
    router.push('/')
  }

  let rateContent = null
  if (baseCurrency && quoteCurrency && conversionRate) {
    const conversionRateWithPrecision = formatToThousandsSeparator(conversionRate, quoteCurrency.amountDecimal)
    rateContent =
      <div className={styles.rate}>
        1 {baseCurrency.currency} ≈ <strong>{conversionRateWithPrecision}</strong> {quoteCurrency.currency}
      </div>


  }

  return (
    <>
      <div></div>
      <Header title={"Rate Conversion"} onClose={closeHandler}></Header>

      <div className={styles['conversion-container']}>
        <div className={`${styles.field} ${styles.base}`}>
          <SelectionButton onClick={() => openCurrencySelection(baseCurrency?.id, 'base')}>
            <CurrencyLabel fontWeight="500" exchangeRate={baseCurrency} ></CurrencyLabel>
          </SelectionButton>
          <Input id="baseCurrencyAmt" value={baseCurrencyAmt} onValueChange={setBaseCurrencyAmt} textAlign="right" />
          <div className={styles.arrow}>
            <KeyboardDoubleArrowDownIcon className={styles['arrow-icon']} />
          </div>
          {rateContent}
        </div>

        <div className={`${styles.field} ${styles.quote}`}>
          <SelectionButton onClick={() => openCurrencySelection(quoteCurrency?.id, 'quote')}>
            <CurrencyLabel fontWeight="600" exchangeRate={quoteCurrency}></CurrencyLabel>
          </SelectionButton>
          <Input id="quoteCurrencyAmt" value={quoteCurrencyAmt} onValueChange={setQuoteCurrencyAmt} textAlign="right" />
        </div>
      </div>
    </>
  )
}