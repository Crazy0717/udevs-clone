import { useTranslations } from "next-intl"
import Image from "next/image"
import ComponentRight from "../component_right/ComponentRight"
import MiniBox from "../ui/mini-box/MiniBox"
import "./Product.scss"

interface propsTypes {
  reversed?: boolean
  background?: string
  miniboxesBackColor?: string
  data: {
    logoUrl: string
    text: string
    id: string
    directionBoxesData: { imgUrl: string; alt: string; text: string }[]
    badge: {
      iconUrl: string
      text: string
      bgColor: string
      color: string
    }
    rightImages: {
      backgroundImage?: string
      image: string
    }
  }
}

const Product = ({
  data,
  reversed,
  background,
  miniboxesBackColor,
}: propsTypes) => {
  const t = useTranslations("product")

  return (
    <section
      style={{ background: background }}
      className="product"
      id={data.id}
    >
      <div
        className="product_content"
        style={{ flexDirection: reversed ? "row-reverse" : "row" }}
      >
        <div className="content_left">
          <Image
            src={data.logoUrl}
            alt="there should be image"
            width={300}
            height={64}
            loading="lazy"
          />

          <div
            style={{ background: data.badge.bgColor, color: data.badge.color }}
            className="badge"
          >
            <div
              className="icon"
              style={{
                backgroundColor: data.badge.color,
                WebkitMaskImage: `url(${data.badge.iconUrl})`,
                maskImage: `url(${data.badge.iconUrl})`,
              }}
            />
            {data.badge.text}
          </div>
          <p>{t(data.text)}</p>
          <b>{t("whatWeDid")}</b>
          <div
            className="left_miniBoxes"
            data-miniboxesbackcolor={miniboxesBackColor}
          >
            {data.directionBoxesData.map((item, i) => (
              <MiniBox key={i} item={item} />
            ))}
          </div>
        </div>
        <ComponentRight images={data.rightImages} />
      </div>
    </section>
  )
}

export default Product
