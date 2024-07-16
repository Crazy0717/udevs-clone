import { useTranslations } from "next-intl"
import "./Product.scss"
import Image from "next/image"

const Product = () => {
  const t = useTranslations("hero")
  const t2 = useTranslations("product")
  return (
    <section className="product">
      <h2 className="primary-heading" style={{ maxWidth: "800px" }}>
        {t("mobileApps")}
      </h2>
      <div className="product_content">
        <div className="content_left">
          <p>{t2("text1")}</p>
          <h3>{t("dedicatedTeam")}</h3>
        </div>
        <div className="content_right">
          <Image
            src="/svg/TwoHumans2.svg"
            alt="Two Humans"
            width={500}
            height={420}
          />
        </div>
      </div>
    </section>
  )
}

export default Product
