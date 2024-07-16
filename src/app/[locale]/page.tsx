import { Direction, Hero, Our_services, OurTeam } from "@/components"
import { useTranslations } from "next-intl"
import directionMobileAppData from "@/assets/directionMobileApps.json"
import directionErpSystems from "@/assets/directionErpSystems.json"
import OurServicesBoxesData from "@/assets/OurServicesBoxesData.json"

export default function Home() {
  const t = useTranslations("ourServices")
  const t2 = useTranslations("hero")

  return (
    <div className="home">
      <header>
        <Hero />
      </header>
      <main>
        <Our_services
          title={t("ourServices")}
          data={OurServicesBoxesData.OurServicesBoxesData}
        />
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
      </main>
    </div>
  )
}
