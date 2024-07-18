import React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import "./OurClients.scss"

const OurClients = React.memo(() => {
  const t = useTranslations("ourClients")
  const images1 = [
    {
      id: 1,
      imgUrl: "/svg/fonon.svg",
    },
    {
      id: 2,
      imgUrl: "/svg/akfaMedline.svg",
    },
    {
      id: 3,
      imgUrl: "/svg/hamkorbankLogo.svg",
    },
    {
      id: 4,
      imgUrl: "/svg/imanLogo.svg",
    },
    {
      id: 5,
      imgUrl: "/svg/hoshimovLogo.svg",
    },
    {
      id: 6,
      imgUrl: "/svg/cspace.svg",
    },
  ]
  const images2 = [
    {
      id: 7,
      imgUrl: "/svg/myTaxi.svg",
    },
    {
      id: 8,
      imgUrl: "/svg/shefBurger.svg",
    },
    {
      id: 9,
      imgUrl: "/svg/maxTrack.svg",
    },
    {
      id: 10,
      imgUrl: "/svg/smsUz.svg",
    },
    {
      id: 11,
      imgUrl: "/svg/goodZone.svg",
    },
    {
      id: 12,
      imgUrl: "/svg/workly.svg",
    },
  ]

  return (
    <section className="ourClients">
      <h2 className="primary-heading">{t("ourClients")}</h2>
      <div className="ourClients_content">
        <div className="marquee-wrapper normal">
          <div className="marquee">
            {images1.map((image) => (
              <Image
                loading="lazy"
                key={image.id}
                src={image.imgUrl}
                width={212}
                height={128}
                alt=""
              />
            ))}
          </div>
          <div className="marquee">
            {images1.map((image) => (
              <Image
                loading="lazy"
                key={image.id}
                src={image.imgUrl}
                width={212}
                height={128}
                alt=""
              />
            ))}
          </div>
          <div className="marquee">
            {images1.map((image) => (
              <Image
                loading="lazy"
                key={image.id}
                src={image.imgUrl}
                width={212}
                height={128}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee">
            {images2.map((image) => (
              <Image
                loading="lazy"
                key={image.id}
                src={image.imgUrl}
                width={212}
                height={128}
                alt=""
              />
            ))}
          </div>
          <div className="marquee">
            {images2.map((image) => (
              <Image
                loading="lazy"
                key={image.id}
                src={image.imgUrl}
                width={212}
                height={128}
                alt=""
              />
            ))}
          </div>
          <div className="marquee">
            {images2.map((image) => (
              <Image
                loading="lazy"
                key={image.id}
                src={image.imgUrl}
                width={212}
                height={128}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default OurClients
