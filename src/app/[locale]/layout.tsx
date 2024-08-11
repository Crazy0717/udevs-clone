import "./globals.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import Providers from "@/lib/providers/Provider"
import { useLocale } from "next-intl"
import { notFound } from "next/navigation"
import { Navbar } from "@/components"

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title:
    "IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры",
  description:
    "Udevs - компания по разработке веб и мобильных приложения под заказ. Разработка IT cистемы любого уровня сложности в удобные для вас сроки.",
  icons: {
    icon: "/images/favicon.webp",
  },
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: any
}>) {
  const locale = useLocale()
  if (params.locale !== locale) {
    notFound()
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Udevs clone" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
      </head>
      <Providers>
        <body className={manrope.className}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
