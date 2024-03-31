"use client"

import Link from "next/link";
import TextButton from "./ui/components/Buttons/TextButton/TextButton";
import Header from "./ui/components/Header/Header";
import RateTable from "./ui/components/RateTable/RateTable";
import { useExchangeRates } from "./ui/hooks/useExchangeRates";
import CachedIcon from '@mui/icons-material/Cached';
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { conversionActions } from "./ui/store/conversion/conversion-action";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const dispatch = useDispatch()
  const { query, exchangeRates } = useExchangeRates()

  const lastUpdateTime = useMemo(() => {
    return query?.dataUpdatedAt ? new Date(query.dataUpdatedAt).toLocaleString('sv') : '';
  }, [query.dataUpdatedAt]);

  const selectHandler = (currencyId: string) => {
    const payload1 = { conversionType: 'base', currencyId }
    dispatch(conversionActions.updateConversionCurrency(payload1))

    const payload2 = { conversionType: 'quote', currencyId: 'twd' }
    dispatch(conversionActions.updateConversionCurrency(payload2))

    router.push('/rate-conversion')
  }

  return (
    <>
      <Header title={"Rate Table (TWD)"}></Header>
      <div className="flex justify-between mx-6">
        Last updated: {lastUpdateTime}
        <span onClick={() => query.refetch()}><CachedIcon /></span>
      </div>
      <RateTable exchangeRates={exchangeRates} onSelect={selectHandler}></RateTable>
      <Link href={'rate-conversion'} className="mx-auto my-4">
        <TextButton>Rate Conversion</TextButton>
      </Link>
    </>
  )
}