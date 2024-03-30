"use client"
import Link from "next/link";
import Button from "./ui/components/Button/Button";

export default function Home() {
  // const { exchangeRates } = useQueryExchangeRates()
  // console.log('exchangeRates', exchangeRates);

  return (
    <>
      <div>Rate Table(TWD)</div>
      <Link href={'rate-conversion'}>
        <Button>Rate Conversion</Button>
      </Link>
    </>
  )
}