"use client"
import Box from "../ui/box/Box"
import React, { useLayoutEffect, useRef } from "react"
import useFadeIn from "@/lib/utils/hooks"
import "./Our_services.scss"

interface propsTypes {
  title: string
  data: { text: string; imgUrl: string; alt: string }[]
}

const Our_services = ({ title, data }: propsTypes) => {
  const h1Ref = useRef(null)
  const fadeIn = useFadeIn()

  useLayoutEffect(() => {
    fadeIn({ targetEl: h1Ref.current, duration: 0.4 })
    fadeIn({ targetEl: ".ourServices_boxes", duration: 0.4 })
  }, [])

  return (
    <section className="ourServices">
      <h1 className="primary-heading" ref={h1Ref}>
        {title}
      </h1>
      <div className="ourServices_boxes">
        {data.map((item, i) => (
          <Box key={i} title={item.text} imgUrl={item.imgUrl} alt={item.alt} />
        ))}
      </div>
    </section>
  )
}

export default Our_services
