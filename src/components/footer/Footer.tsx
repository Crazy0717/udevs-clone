import { LogoSvg } from "@/assets"
import Link from "next/link"
import { useTranslations } from "next-intl"
import Image from "next/image"
import "./Footer.scss"

const Footer = () => {
  const t = useTranslations("footer")

  return (
    <footer>
      <div className="footer_top">
        <Link href="/">
          <LogoSvg />
        </Link>
      </div>
      <div className="footer_content">
        <ul>
          <h5>{t("aboutUs")}</h5>
          <li>
            <Link href="/#ourServices">{t("direction")}</Link>
          </li>
          <li>
            <Link href="/#ourTeam">{t("command")}</Link>
          </li>
          <li>
            <Link href="/#tools">{t("tools")}</Link>
          </li>
          <li>
            <Link href="/#ourClients">{t("clients")}</Link>
          </li>
        </ul>
        <ul>
          <h5>{t("services")}</h5>
          <li>
            <Link href="/#mobileAppsComponent">{t("text1")}</Link>
          </li>
          <li>
            <Link href="/#erpSystemsComponent">{t("text2")}</Link>
          </li>
          <li>
            <Link href="/#designComponent">{t("text3")}</Link>
          </li>
          <li>
            <Link href="/#itConsultingComponent">{t("text4")}</Link>
          </li>
          <li>
            <Link href="/#optimizationInfrastructureComponent">
              {t("text5")}
            </Link>
          </li>
        </ul>
        <ul>
          <h5>{t("portfolio")}</h5>
          <li>
            <Link href="/#productDelever">Delever</Link>
          </li>
          <li>
            <Link href="/#productSmsUz">Sms.uz</Link>
          </li>
          <li>
            <Link href="/#productGoodzone">Goodzone</Link>
          </li>
          <li>
            <Link href="/#productImanApp">Iman</Link>
          </li>
        </ul>
      </div>
      <div className="footer_bottom">
        <p>© 2024 Udevs. All rights reserved</p>
        <ol>
          <Link href="/">
            <Image
              src="/svg/instagramIcon.svg"
              alt="instagram icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/twitterIcon.svg"
              alt="youtube icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/">
            <Image
              src="/svg/youtubeIcon.svg"
              alt="instagram icon"
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
