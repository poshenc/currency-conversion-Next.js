import { useContext } from 'react'
import styles from './CurrencyRow.module.css'
import SelectionButton from '@/app/ui/components/Buttons/SelectionButton/SelectionButton'
import CurrencyLabel from '@/app/ui/components/CurrencyLabel/CurrencyLabel'
import { ExchangeRate } from '@/app/ui/api/request'
import Input from '@/app/ui/components/Input/Input'
import { useExchangeRates } from '@/app/ui/hooks/useExchangeRates'
import CurrencySelection from '@/app/currency-selection/CurrencySelection'
import { DialogContext } from '@/app/ui/context/DialogContext'
import { useDispatch } from 'react-redux'
import { conversionActions } from '@/app/ui/store/conversion/conversion-action'

export default function CurrencyRow({
  conversionType,
  exchangeRate,
  currencyAmount,
  onChangeCurrencyAmount,
}: {
  conversionType: 'base' | 'quote';
  exchangeRate: ExchangeRate;
  currencyAmount: string;
  onChangeCurrencyAmount: (amount: string) => void;
}) {

  const { exchangeRates } = useExchangeRates()

  const { openDialog, closeDialog } = useContext(DialogContext)

  const dispatch = useDispatch()

  const selectHandler = (currencyId: string) => {
    dispatch(conversionActions.updateConversionCurrency({ conversionType, currencyId }))
  }

  const openCurrencySelection = () => {
    if (exchangeRate.id) {
      openDialog(
        <CurrencySelection
          defaultValue={exchangeRate.id}
          exchangeRates={exchangeRates}
          onSelect={selectHandler}
          onClose={closeDialog}
        />)
    }
  }
  return (
    <div className={styles.container}>
      <SelectionButton onClick={openCurrencySelection}>
        <CurrencyLabel fontWeight="500" exchangeRate={exchangeRate} ></CurrencyLabel>
      </SelectionButton>
      <Input
        id={conversionType}
        value={currencyAmount}
        onValueChange={onChangeCurrencyAmount}
        textAlign="right" />
    </div>
  )
}