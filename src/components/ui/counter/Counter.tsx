"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface NumberCounterProps {
  startValue: number
  endValue: number
  duration: number
}

const NumberCounter = ({
  startValue,
  endValue,
  duration,
}: NumberCounterProps) => {
  gsap.registerPlugin(ScrollTrigger)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const counter = { value: startValue }

    gsap
      .timeline({ scrollTrigger: { trigger: counterRef.current } })
      .to(counter, {
        value: endValue,
        duration: duration,
        ease: "power1.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(
              counter.value
            ).toString()
          }
        },
      })
  }, [startValue, endValue, duration])

  return <span ref={counterRef}>{startValue}</span>
}

export default NumberCounter
