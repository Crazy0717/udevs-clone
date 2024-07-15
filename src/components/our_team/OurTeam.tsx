import { useTranslations } from "next-intl"
import "./OurTeam.scss"
import Image from "next/image"
import Counter from "../ui/counter/Counter"

interface propsTypes {
  title: string
}

const OurTeam = ({ title }: propsTypes) => {
  const t = useTranslations("ourTeam")
  return (
    <section className="ourTeam">
      <h2 className="primary-heading">{title}</h2>
      <div className="ourTeam_content">
        <div className="content_left">
          <p>{t("text")}</p>
          <p className="left_counter">
            <Counter startValue={70} endValue={100} duration={2} />+
          </p>
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

export default OurTeam
