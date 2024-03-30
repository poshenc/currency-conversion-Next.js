import { ExchangeRate } from "../../api/request";
import { formatToThousandsSeparator } from "../../utils/exchangeRates";
import CurrencyLabel from "../CurrencyLabel/CurrencyLabel";
import styles from "./RateTable.module.css";

export default function RateTable({
  exchangeRates
}: {
  exchangeRates: ExchangeRate[]
}) {
  return (
    <>
      <div className={styles.header}>
        <h3>Currency</h3>
        <h3>Price</h3>
      </div>
      <ul className={styles.table}>
        {exchangeRates.map(rate => {
          return (
            <li key={rate.id} className={styles.row}>
              <CurrencyLabel exchangeRate={rate} baseCurrency="TWD"></CurrencyLabel>
              <div className={styles.price}>{formatToThousandsSeparator(rate.twdPrice)}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}