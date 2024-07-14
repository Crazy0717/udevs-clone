"use client"
import React, { Suspense, useRef } from "react"
import { Provider } from "react-redux"
import { AppStore, makeStore } from "../redux/store"

const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={storeRef.current}>{children}</Provider>
      </Suspense>
    </>
  )
}

export default Providers
