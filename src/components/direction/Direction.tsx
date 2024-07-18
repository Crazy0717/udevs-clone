import { useTranslations } from "next-intl"
import MiniBox from "../ui/mini-box/MiniBox"
import Image from "next/image"
import ComponentRight from "../component_right/ComponentRight"
import "./Direction.scss"

interface propsTypes {
  reversed?: boolean
  background?: string
  miniboxesBackColor?: string
  data: {
    title: string
    text: string
    directionBoxesData: { imgUrl: string; alt: string; text: string }[]
    technologies?: { imgUrl: string; alt: string; text: string }[]
    rightImages: {
      backgroundImage?: string
      image: string
    }
  }
}

const Direction = ({
  data,
  reversed,
  background,
  miniboxesBackColor,
}: propsTypes) => {
  const t = useTranslations("direction")

  return (
    <section style={{ background: background }} className="direction">
      <h2 className="primary-heading">{t(data.title)}</h2>
      <div
        className="direction_content"
        style={{ flexDirection: reversed ? "row-reverse" : "row" }}
      >
        <div className="content_left">
          <p>{t(data.text)}</p>
          <div
            className="left_miniBoxes"
            data-miniboxesbackcolor={miniboxesBackColor}
          >
            {data.directionBoxesData.map((item, i) => (
              <MiniBox key={i} item={item} />
            ))}
          </div>
          <div className="left_techs">
            <h4>{data.technologies && t("technologies")}</h4>
            <div className="techs_boxes">
              {data.technologies?.map((item, i) => (
                <div key={i} className="tech">
                  <Image
                    src={item.imgUrl}
                    alt={item.alt}
                    width={56}
                    height={56}
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ComponentRight images={data.rightImages} />
      </div>
    </section>
  )
}

export default Direction
