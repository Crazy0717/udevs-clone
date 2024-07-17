import { Direction, Hero, Our_services, OurClients, OurTeam } from "@/components"
import { useTranslations } from "next-intl"
import directionMobileAppData from "@/assets/directionMobileApps.json"
import directionErpSystems from "@/assets/directionErpSystems.json"
import directionDesign from "@/assets/directionDesign.json"
import directionOptInf from "@/assets/directionOptInf.json"
import directionItConsulting from "@/assets/directionItConsulting.json"

export default function Home() {
  const t = useTranslations("ourServices")
  const t2 = useTranslations("hero")
  const t3 = useTranslations("ourClients")

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
        <OurClients title={t3("ourClients")}/>
      </main>
    </div>
  )
}
