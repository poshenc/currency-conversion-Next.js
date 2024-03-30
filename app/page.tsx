"use client"
import Link from "next/link";
import TextButton from "./ui/components/TextButton/TextButton";
import Header from "./ui/components/Header/Header";
import RateTable from "./ui/components/RateTable/RateTable";
import { useExchangeRates } from "./ui/hooks/useExchangeRates";

export default function Home() {
  const { exchangeRates } = useExchangeRates()
  console.log('exchangeRates', exchangeRates);

  return (
    <>
      <Header title={"Rate Table (TWD)"}></Header>
      <RateTable exchangeRates={exchangeRates}></RateTable>
      <Link href={'rate-conversion'} className="mx-auto my-4">
        <TextButton>Rate Conversion</TextButton>
      </Link>
    </>
  )
}