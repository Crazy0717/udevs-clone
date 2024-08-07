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
} from "../../../public/assets"
import {
  ContactUs,
  Direction,
  Footer,
  Hero,
  HowWeWork,
  OurClients,
  OurTeam,
  Product,
} from "@/components"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"
const Tools = dynamic(() => import("../../components/tools/Tools"))
const Our_services = dynamic(
  () => import("../../components/our_services/Our_services")
)

export default function Home() {
  const t = useTranslations("ourServices")
  const t2 = useTranslations("hero")
  const t3 = useTranslations("navbar")

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
          background="url(/images/hero_bg.webp)"
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
          background="url(/images/hero_bg.webp)"
        />
        <Tools title={t3("tools")} />
        <OurClients />
        <Product
          data={productDelever}
          background="url(/images/hero_bg.webp)"
          reversed
        />
        <Product data={productSmsUz} background="url(/images/hero_bg.webp)" />
        <Product
          data={productGoodzone}
          background="url(/images/hero_bg.webp)"
          reversed
        />
        <Product data={productIman} background="url(/images/hero_bg.webp)" />
        <HowWeWork />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
