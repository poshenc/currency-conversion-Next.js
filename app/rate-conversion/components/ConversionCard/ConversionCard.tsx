import { ExchangeRate } from '@/app/ui/api/request';
import styles from './ConversionCard.module.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { formatToThousandsSeparator } from '@/app/ui/utils/exchangeRates'
import { ReactNode } from 'react';

export default function ConversionCard({
  baseCurrency,
  quoteCurrency,
  conversionRate,
  children,
}: {
  baseCurrency: ExchangeRate;
  quoteCurrency: ExchangeRate;
  conversionRate: string;
  children: ReactNode;
}) {
  // for rendering description of exchange rate 
  let rateDescription: ReactNode

  if (baseCurrency && quoteCurrency && conversionRate) {
    const conversionRateWithPrecision = formatToThousandsSeparator(conversionRate, quoteCurrency.amountDecimal)
    rateDescription =
      <div className={styles.rate}>
        1 {baseCurrency.currency} ≈ <strong>{conversionRateWithPrecision}</strong> {quoteCurrency.currency}
      </div>
  }

  return (
    <div className={styles.card}>
      <div className={styles.description}>
        {rateDescription}
      </div>
      <div className={styles.arrow}>
        <KeyboardDoubleArrowDownIcon className={styles['arrow-icon']} />
      </div>
      <div className={styles['children-container']}>
        {children}
      </div>
    </div>
  )
}