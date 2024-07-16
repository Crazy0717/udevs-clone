"use client"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import "./DirectionRight.scss"

interface propsTypes {
  images: {
    backgroundImage: string
    image: string
  }
}

const DirectionRight = ({ images }: propsTypes) => {
  const elRef = useRef(null)

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 98%",
          end: "bottom 60%",
        },
      })
      .fromTo(
        elRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
        }
      )
  }, [])
  return (
    <div
      ref={elRef}
      className="directionRight"
      style={{ background: images.backgroundImage }}
    >
      <Image src={images.image} alt="Two Humans" width={500} height={420} />
    </div>
  )
}

export default DirectionRight
