import { LogoSvg } from "../../../public/assets"
import Link from "next/link"
import { useTranslations } from "next-intl"
import Image from "next/image"
import "./Footer.scss"

const Footer = () => {
  const t = useTranslations("footer")

  return (
    <footer>
      <div className="footer_top">
        <Link href="/" aria-label="Home">
          <LogoSvg aria-hidden="true" />
        </Link>
      </div>
      <div className="footer_content">
        <ul>
          <h5>{t("aboutUs")}</h5>
          <li>
            <Link href="/#ourServices" aria-label={t("direction")}>
              {t("direction")}
            </Link>
          </li>
          <li>
            <Link href="/#ourTeam" aria-label={t("command")}>
              {t("command")}
            </Link>
          </li>
          <li>
            <Link href="/#tools" aria-label={t("tools")}>
              {t("tools")}
            </Link>
          </li>
          <li>
            <Link href="/#ourClients" aria-label={t("clients")}>
              {t("clients")}
            </Link>
          </li>
        </ul>
        <ul>
          <h5>{t("services")}</h5>
          <li>
            <Link href="/#mobileAppsComponent" aria-label={t("text1")}>
              {t("text1")}
            </Link>
          </li>
          <li>
            <Link href="/#erpSystemsComponent" aria-label={t("text2")}>
              {t("text2")}
            </Link>
          </li>
          <li>
            <Link href="/#designComponent" aria-label={t("text3")}>
              {t("text3")}
            </Link>
          </li>
          <li>
            <Link href="/#itConsultingComponent" aria-label={t("text4")}>
              {t("text4")}
            </Link>
          </li>
          <li>
            <Link
              href="/#optimizationInfrastructureComponent"
              aria-label={t("text5")}
            >
              {t("text5")}
            </Link>
          </li>
        </ul>
        <ul>
          <h5>{t("portfolio")}</h5>
          <li>
            <Link href="/#productDelever" aria-label="Delever">
              Delever
            </Link>
          </li>
          <li>
            <Link href="/#productSmsUz" aria-label="Sms.uz">
              Sms.uz
            </Link>
          </li>
          <li>
            <Link href="/#productGoodzone" aria-label="Goodzone">
              Goodzone
            </Link>
          </li>
          <li>
            <Link href="/#productImanApp" aria-label="Iman">
              Iman
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer_bottom">
        <p>© 2024 Udevs. All rights reserved</p>
        <ol>
          <Link href="/" aria-label="Instagram">
            <Image
              src="/svg/instagramIcon.svg"
              alt="Instagram icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/" aria-label="Twitter">
            <Image
              src="/svg/twitterIcon.svg"
              alt="Twitter icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/" aria-label="YouTube">
            <Image
              src="/svg/youtubeIcon.svg"
              alt="YouTube icon"
              width={24}
              height={24}
            />
          </Link>
        </ol>
      </div>
    </footer>
  )
}

export default Footer
