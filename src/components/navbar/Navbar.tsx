import { LogoSvg } from "@/assets"
import { useTranslations } from "next-intl"
import { Link } from "@/lib/utils/navigation"
import { Dropdown } from "../"
import navbarLinksData from "@/assets/navbar.json"
import Image from "next/image"
import NavSidebar from "./NavSidebar/NavSidebar"
import "./Navbar.scss"

interface LinkItem {
  imgUrl: string
  text: string
  alt: string
  targetEl: string
}
interface LanguageItem extends LinkItem {
  locale: string
}
interface sidebarItem {
  link: string
  text: string
}
interface NavbarLinksData {
  navbarLinks: {
    language: LanguageItem[]
    portfolio: LinkItem[]
    direction: LinkItem[]
    sidebar: sidebarItem[]
  }
}

const Navbar = () => {
  const t = useTranslations("navbar")
  const t2 = useTranslations("hero")

  const NavbarLinks = navbarLinksData as NavbarLinksData

  return (
    <nav>
      <div className="nav_logo">
        <Link href="/">
          <LogoSvg />
        </Link>
      </div>
      <div className="nav_right">
        <ul className="nav_list">
          <li>
            <Link href="/#ourServices">{t("services")}</Link>
          </li>
          <li>
            <Link href="/#ourTeam">{t("team")}</Link>
          </li>
          <li>
            <Dropdown linkText={t("direction")} dropdownTitle={t("direction")}>
              {NavbarLinks.navbarLinks.direction.map((item, i) => (
                <Link
                  href={`/#${item.targetEl}`}
                  key={i}
                  className="dropdown-menu-item extended"
                >
                  <div className="image-wrapper">
                    <Image
                      src={item.imgUrl}
                      alt={item.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p>{t2(item.text)}</p>
                </Link>
              ))}
            </Dropdown>
          </li>
          <li>
            <Link href="/#tools">{t("tools")}</Link>
          </li>
          <li>
            <Link href="/#ourClients">{t("clients")}</Link>
          </li>
          <li>
            <Dropdown linkText={t("portfolio")} dropdownTitle={t("portfolio")}>
              {NavbarLinks.navbarLinks.portfolio.map((item, i) => (
                <Link
                  href={`/#${item.targetEl}`}
                  key={i}
                  className="dropdown-menu-item extended"
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.alt}
                    width={48}
                    height={48}
                  />
                  <p>{item.text}</p>
                </Link>
              ))}
            </Dropdown>
          </li>
          <li>
            <Dropdown linkText={t("language")}>
              {NavbarLinks.navbarLinks.language.map((item, i) => (
                <li key={i} className="dropdown-menu-item">
                  <Link href="/" locale={item.locale}>
                    <Image
                      src={item.imgUrl}
                      alt={item.alt}
                      width={28}
                      height={28}
                    />
                    <p>{item.text}</p>
                  </Link>
                </li>
              ))}
            </Dropdown>
          </li>
        </ul>
        <Link role="button" className="contactUsBtn" href="/#contactUs">
          {t("contact")}
        </Link>
        <NavSidebar btn_text={t("contact")}>
          {navbarLinksData.navbarLinks.sidebar.map((item, i) => (
            <li>
              <Link href={item.link}>{t(item.text)}</Link>
            </li>
          ))}
        </NavSidebar>
      </div>
    </nav>
  )
}

export default Navbar
