'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, Store } from '@/app/ui/store/index'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<Store>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}