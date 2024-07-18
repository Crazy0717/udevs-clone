import { useTranslations } from "next-intl"
import Image from "next/image"
import "./HowWeWork.scss"

const HowWeWork = () => {
  const t = useTranslations("howWeWork")

  const boxesData = [
    {
      imageUrl: "/svg/phone2.svg",
      title: "contact",
      text: "text1",
    },
    {
      imageUrl: "/svg/chart2.svg",
      title: "analysis",
      text: "text2",
    },
    {
      imageUrl: "/svg/dirWithHeart.svg",
      title: "offer",
      text: "text3",
    },
    {
      imageUrl: "/svg/team2.svg",
      title: "team",
      text: "text4",
    },
    {
      imageUrl: "/svg/toggleBtnIcon.svg",
      title: "start",
      text: "text5",
    },
  ]
  return (
    <div className="howWeWork">
      <div className="primary-heading">{t("howWeWork")}</div>
      <div className="howWeWork_content">
        <div className="dotted-line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1132"
            height="3"
            viewBox="0 0 1132 3"
            fill="none"
          >
            <line
              opacity="0.4"
              x1="1.5"
              y1="1.5"
              x2="1130.5"
              y2="1.5"
              stroke="#1B5BF7"
              stroke-width="3"
              stroke-linecap="round"
              stroke-dasharray="0.2 10"
            />
          </svg>
        </div>
        {boxesData.map((item) => (
          <div key={item.text} className="content_box">
            <Image
              src={item.imageUrl}
              alt="there should be icon"
              width={80}
              height={80}
            />
            <div>
              <h6>{t(item.title)}</h6>
              <p>{t(item.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowWeWork
