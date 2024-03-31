"use client"
import Link from "next/link";
import TextButton from "./ui/components/Buttons/TextButton/TextButton";
import Header from "./ui/components/Header/Header";
import RateTable from "./ui/components/RateTable/RateTable";
import { useExchangeRates } from "./ui/hooks/useExchangeRates";
import CachedIcon from '@mui/icons-material/Cached';
import { useMemo } from "react";

export default function Home() {
  const { query, exchangeRates } = useExchangeRates()
  // console.log('exchangeRates', exchangeRates);

  const lastUpdateTime = useMemo(() => {
    return query?.dataUpdatedAt ? new Date(query.dataUpdatedAt).toLocaleString('sv') : '';
  }, [query.dataUpdatedAt]);

  return (
    <>
      <Header title={"Rate Table (TWD)"}></Header>
      <div className="flex justify-between mx-6">
        Last updated: {lastUpdateTime}
        <span onClick={() => query.refetch()}><CachedIcon /></span>
      </div>
      <RateTable exchangeRates={exchangeRates}></RateTable>
      <Link href={'rate-conversion'} className="mx-auto my-4">
        <TextButton>Rate Conversion</TextButton>
      </Link>
    </>
  )
}