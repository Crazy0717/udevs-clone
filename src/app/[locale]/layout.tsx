import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
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
    icon: "/images/favicon.png",
  },
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
      <Providers>
        <body className={manrope.className}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
