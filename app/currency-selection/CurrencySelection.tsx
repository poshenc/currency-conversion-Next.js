"use client"

import Header from "../ui/components/Header/Header"

export default function CurrencySelection({
  onSelect,
  onClose
}: {
  onSelect: (selectedCurrency: string) => void,
  onClose: () => void
}) {
  const closeHandler = () => {
    onClose()
  }
  return (
    <Header title={"Currency Selection dialog"} onClose={closeHandler}></Header>
  )
}