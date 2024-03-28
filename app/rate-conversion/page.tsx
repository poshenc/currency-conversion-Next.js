"use client"

import { useContext } from "react"
import { DialogContext } from "../ui/context/DialogContext"
import CurrencySelection from "../currency-selection/CurrencySelection"
import Button from "../ui/components/Button/Button"
import Header from "../ui/components/Header/Header"
import { useRouter } from "next/navigation"

export default function RateConversion() {

  const { openDialog, closeDialog } = useContext(DialogContext)

  const router = useRouter()

  const selectHandler = (selectedCurrency: string) => {
    console.log('selected');
  }

  const openCurrencySelection = () => {
    openDialog(<CurrencySelection onSelect={selectHandler} onClose={closeDialog}></CurrencySelection>)
  }

  const closeHandler = () => {
    router.push('/')
  }

  return (
    <>
      <div></div>
      <Header title={"Rate Conversion page"} onClose={closeHandler}></Header>
      <Button onClick={openCurrencySelection}>open Currency Selection</Button>
    </>
  )
}