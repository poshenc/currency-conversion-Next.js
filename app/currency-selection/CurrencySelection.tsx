"use client"

import { ChangeEvent, useState } from "react"
import { ExchangeRate } from "../ui/api/request"
import CurrencyLabel from "../ui/components/CurrencyLabel/CurrencyLabel"
import Header from "../ui/components/Header/Header"
import Input from "../ui/components/Input/Input"
import Layout from "../ui/layouts/Layout"
import { formatToThousandsSeparator } from "../ui/utils/exchangeRates"
import styles from "./CurrencySelection.module.css"
import SearchIcon from '@mui/icons-material/Search'

export default function CurrencySelection({
  defaultValue,
  exchangeRates,
  onSelect,
  onClose,
}: {
  defaultValue: string;
  exchangeRates: ExchangeRate[];
  onSelect: (selectedCurrencyId: string) => void;
  onClose: () => void;
}) {

  const [searchTerm, setSearchTerm] = useState<string>('')

  const selectHandler = (selectedCurrencyId: string) => {
    onSelect(selectedCurrencyId)
    onClose()
  }

  const filteredCurrencies = exchangeRates.filter(rate => rate.currency.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Layout>
      <Header title={"Currency Select"} onClose={onClose}></Header>
      <Input Icon={SearchIcon} placeholder="Search..." onValueChange={setSearchTerm}></Input>
      <ul className={styles.table}>
        {filteredCurrencies.map(rate => {
          const selected = defaultValue === rate.id
          return (
            <li key={rate.id} className={`${styles.row} ${selected && styles.highlighted}`} onClick={() => selectHandler(rate.id)}>
              <CurrencyLabel exchangeRate={rate} fontWeight={selected ? "700" : "normal"}></CurrencyLabel>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}