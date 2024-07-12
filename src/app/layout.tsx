import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Providers from "@/lib/providers/Provider"

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title:
    "IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры",
  description:
    "Udevs - компания по разработке веб и мобильных приложения под заказ. Разработка IT cистемы любого уровня сложности в удобные для вас сроки.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={manrope.className}>{children}</body>
      </Providers>
    </html>
  )
}
