"use client"
import Link from "next/link"
import { LogoSvg } from "../../../../public/assets"
import { useLayoutEffect, useState } from "react"
import Image from "next/image"
import "./NavSidebar.scss"

interface propsTypes {
  children: React.ReactNode
  btn_text: string
}

const NavSidebar = ({ children, btn_text }: propsTypes) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useLayoutEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return null // to prevent the sidebar from appearing on loading on large screens
  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(true)}
        className="nav_bars"
        role="button"
      >
        <Image src="/svg/barsIcon.svg" alt="bars icon" width={26} height={26} />
      </div>
      <div className={isSidebarOpen ? "nav_sidebar active" : "nav_sidebar"}>
        <div className="sidebar_top">
          <div className="nav_logo">
            <Link aria-label="home" href="/">
              <LogoSvg />
            </Link>
          </div>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="nav_close-btn"
            role="button"
          >
            <Image
              src="/svg/closeIcon.svg"
              alt="bars icon"
              width={26}
              height={26}
              loading="lazy"
            />
          </div>
        </div>
        <div className="sidebar_main">
          <ol onClick={() => setIsSidebarOpen(false)}>{children}</ol>
        </div>
        <div className="sidebar_footer">
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar and go to contact us"
          >
            <Link href="/#contactUs" aria-label={btn_text}>
              {btn_text}
            </Link>
          </button>
          <div className="nav_social-links">
            <Link href="/" className="circle" aria-label="Instagram">
              <Image
                src="/svg/instagramIcon.svg"
                alt="Instagram icon"
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>
            <Link href="/" className="circle" aria-label="Twitter">
              <Image
                src="/svg/twitterIcon.svg"
                alt="Twitter icon"
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>
            <Link href="/" className="circle" aria-label="YouTube">
              <Image
                src="/svg/youtubeIcon.svg"
                alt="YouTube icon"
                width={20}
                height={20}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavSidebar
