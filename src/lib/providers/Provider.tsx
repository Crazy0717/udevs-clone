import React, { Suspense } from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div></div>}>{children}</Suspense>
    </>
  )
}

export default Providers
