"use client"
import Link from "next/link"
import { LogoSvg } from "@/assets"
import { HiBars3 } from "react-icons/hi2"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import "./NavSidebar.scss"

interface propsTypes {
  children: React.ReactNode
  btn_text: string
}

const NavSidebar = ({ children, btn_text }: propsTypes) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(true)}
        className="nav_bars"
        role="button"
      >
        <HiBars3 />
      </div>
      <div className={isSidebarOpen ? "nav_sidebar active" : "nav_sidebar"}>
        <div className="sidebar_top">
          <div className="nav_logo">
            <Link href="/">
              <LogoSvg />
            </Link>
          </div>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="nav_close-btn"
            role="button"
          >
            <IoMdClose />
          </div>
        </div>
        <div className="sidebar_main">
          <ol onClick={() => setIsSidebarOpen(false)}>{children}</ol>
        </div>
        <div className="sidebar_footer">
          <button onClick={() => setIsSidebarOpen(false)}>
            <Link href="/#contactUs">{btn_text}</Link>
          </button>
          <div className="nav_social-links">
            <Link href="/" className="circle">
              <FaInstagram />
            </Link>
            <Link href="/" className="circle">
              <FaTwitter />
            </Link>
            <Link href="/" className="circle">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavSidebar
