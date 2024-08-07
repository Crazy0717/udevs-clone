import { useTranslations } from "next-intl"
import Input from "../ui/input/Input"
import "./ContactUs.scss"
import Image from "next/image"
import Link from "next/link"

const ContactUs = () => {
  const t = useTranslations("contactUs")
  return (
    <div className="contactUs" id="contactUs">
      <div className="primary-heading">{t("contactUs")}</div>
      <div className="contactUs_content">
        <form className="content_left">
          <h6>{t("leftTitle")}</h6>
          <Input placeholder={t("name")} />
          <Input placeholder={t("yourEmail")} />
          <Input placeholder={t("yourEmail")} textarea />
          <button type="submit">{t("send")}</button>
        </form>
        <div className="content_right">
          <ul>
            <li>
              <Link
                href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                aria-label="Our location on Yandex Maps"
              >
                <Image
                  src="/svg/locationIcon.svg"
                  alt="Location icon"
                  width={24}
                  height={24}
                />
                <p>Ташкент, Юнусабадский район, проспект Амира Темура, 129Б</p>
              </Link>
            </li>
            <li>
              <Link
                href="tel:+998336600999"
                aria-label="Call us at +998 33 66 00 999"
              >
                <Image
                  src="/svg/phoneOutlined.svg"
                  alt="Phone icon"
                  width={24}
                  height={24}
                />
                <p>+998 33 66 00 999</p>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:azizbek.b@udevs.io"
                aria-label="Email us at azizbek.b@udevs.io"
              >
                <Image
                  src="/svg/envelope.svg"
                  alt="Email icon"
                  width={24}
                  height={24}
                />
                <p>azizbek.b@udevs.io</p>
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/azizbekbakhodirov"
                aria-label="Connect with us on Telegram"
              >
                <Image
                  src="/svg/telegramIcon.svg"
                  alt="Telegram icon"
                  width={24}
                  height={24}
                />
                <p>t.me/azizbekbakhodirov</p>
              </Link>
            </li>
            <li className="social-icons">
              <Link href="/" aria-label="YouTube">
                <Image
                  src="/svg/youtubeIcon.svg"
                  alt="YouTube icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/" aria-label="Instagram">
                <Image
                  src="/svg/instagramIcon.svg"
                  alt="Instagram icon"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/" aria-label="Facebook">
                <Image
                  src="/svg/facebookIcon.svg"
                  alt="Facebook icon"
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
            </li>
          </ul>

          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&amp;source=constructor"
            frameBorder="0"
            width="400px"
            height="200px"
            title="Udevs location"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
