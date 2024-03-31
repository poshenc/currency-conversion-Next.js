import { ExchangeRate } from "../../api/request";
import { formatToThousandsSeparator } from "../../utils/exchangeRates";
import CurrencyLabel from "../CurrencyLabel/CurrencyLabel";
import styles from "./RateTable.module.css";

export default function RateTable({
  exchangeRates,
  onSelect
}: {
  exchangeRates: ExchangeRate[];
  onSelect?: (id: string) => void;
}) {
  const selectHandler = (id: string | undefined) => {
    if (id && onSelect) onSelect(id)
  }

  let tableContent: ExchangeRate[]

  if (exchangeRates.length > 0) {
    tableContent = exchangeRates.filter(rate => rate.id !== 'twd')
  } else {
    tableContent = new Array(20).fill({} as ExchangeRate)
  }

  return (
    <>
      <div className={styles.header}>
        <h3>Currency</h3>
        <h3>Price</h3>
      </div>
      <ul className={styles.table}>
        {tableContent.map((rate, index) => {
          return (
            <li key={rate.id ?? index} className={styles.row} onClick={() => selectHandler(rate.id)}>
              <CurrencyLabel exchangeRate={rate} quoteCurrency="TWD"></CurrencyLabel>
              <div className={styles.price}>{formatToThousandsSeparator(rate.twdPrice)}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}