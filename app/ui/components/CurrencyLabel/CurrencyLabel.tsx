import { ExchangeRate } from "../../api/request";
import styles from "./CurrencyLabel.module.css";
import Image from 'next/image'

export default function CurrencyLabel({
  baseCurrency,
  exchangeRate: { currency, currencyIcon }
}: {
  baseCurrency?: string;
  exchangeRate: ExchangeRate;
}) {
  return (
    <div className={styles.container}>
      <Image
        src={currencyIcon}
        alt={currency}
        unoptimized
        width={38}
        height={38}
        className={styles.image}
      />
      <div>{currency}{baseCurrency && ` / ${baseCurrency}`} </div>
    </div>
  )
}