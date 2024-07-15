import { Hero, Our_services } from "@/components"
import { useTranslations } from "next-intl"

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
      text: t2("uiux"),
    },
    {
      imgUrl: "/svg/monitor.svg",
      alt: "monitor icon",
      text: t2("itConsulting"),
    },
    {
      imgUrl: "/svg/gear.svg",
      alt: "gear icon",
      text: t2("optimization"),
    },
  ]
  return (
    <div className="home">
      <header>
        <Hero />
      </header>
      <main>
        <Our_services title={t("ourServices")} data={OurServicesBoxesData} />
      </main>
    </div>
  )
}
