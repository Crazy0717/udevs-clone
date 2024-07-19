import {
  directionDesign,
  directionErpSystems,
  directionItConsulting,
  directionMobileAppData,
  directionOptInf,
  productDelever,
  productGoodzone,
  productIman,
  productSmsUz,
} from "@/assets"
import {
  ContactUs,
  Direction,
  Hero,
  HowWeWork,
  Our_services,
  OurClients,
  OurTeam,
  Product,
} from "@/components"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function Home() {
  const t = useTranslations("ourServices")
  const t2 = useTranslations("hero")

  const OurServicesBoxesData = [
    {
      imgUrl: "/svg/team.svg",
      alt: "team icon",
      text: t2("team"),
    },
    {
      imgUrl: "/svg/phone.svg",
      alt: "phone icon",
      text: t2("mobileApps"),
    },
    {
      imgUrl: "/svg/branch.svg",
      alt: "branch icon",
      text: t2("erpSystems"),
    },
    {
      imgUrl: "/svg/layer.svg",
      alt: "layer icon",
      text: t2("ui/ux"),
    },
    {
      imgUrl: "/svg/gear.svg",
      alt: "gear icon",
      text: t2("optimization"),
    },
    {
      imgUrl: "/svg/monitor.svg",
      alt: "monitor icon",
      text: t2("itConsulting"),
    },
  ]
  return (
    <div className="home">
      <header>
        <Hero />
      </header>
      <main>
        <Our_services title={t("ourServices")} data={OurServicesBoxesData} />
        <OurTeam title={t2("team")} />
        <Direction
          data={directionMobileAppData}
          background="url(/images/hero_bg.jpg)"
        />
        <Direction
          data={directionErpSystems}
          background="#f4f7ff"
          reversed
          miniboxesBackColor="#e0e8ff"
        />
        <Direction data={directionDesign} />
        <Direction
          data={directionOptInf}
          background="#f4f7ff"
          reversed
          miniboxesBackColor="#e0e8ff"
        />
        <Direction
          data={directionItConsulting}
          background="url(/images/hero_bg.jpg)"
        />
        <OurClients />
        <Product
          data={productDelever}
          background="url(/images/hero_bg.jpg)"
          reversed
        />
        <Product data={productSmsUz} background="url(/images/hero_bg.jpg)" />
        <Product
          data={productGoodzone}
          background="url(/images/hero_bg.jpg)"
          reversed
        />
        <Product data={productIman} background="url(/images/hero_bg.jpg)" />
        <HowWeWork />
        <ContactUs />
      </main>
    </div>
  )
}
