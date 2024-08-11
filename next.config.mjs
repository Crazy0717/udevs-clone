import withPWAInit from "@ducanh2912/next-pwa"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(withPWA(nextConfig))
