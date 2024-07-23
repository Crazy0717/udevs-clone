import { useTranslations } from "next-intl"
import Link from "next/link"
import { LogoSvg } from "@/assets"
import Typewriter from "../ui/typewriter/Typewriter"
import Image from "next/image"
import "./Hero.scss"

const Hero = () => {
  const t = useTranslations("hero")

  return (
    <div className="hero">
      <div className="hero_left">
        <div className="hero_logo">
          <LogoSvg />
        </div>
        <h1>{t("heading")}</h1>
        <h1>
          <Typewriter
            strings={[
              t("mobileApps"),
              t("erpSystems"),
              t("ui/ux"),
              t("optimization"),
              t("itConsulting"),
            ]}
          />
        </h1>
        <button>
          <Link href="/#contactUs">{t("contact")}</Link>
        </button>
      </div>
      <div className="hero_right">
        <Image
          src="/svg/TwoHumans.svg"
          alt="Two Humans"
          width={540}
          height={540}
        />
      </div>
    </div>
  )
}

export default Hero
