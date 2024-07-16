import Image from "next/image"
import "./Box.scss"
import { useTranslations } from "next-intl"

interface propsTypes {
  imgUrl: string
  title: string
  alt: string
}

const Box = ({ imgUrl, title, alt }: propsTypes) => {
  return (
    <div className="box">
      <Image src={imgUrl} alt={alt} width={24} height={24} />
      <p>{title}</p>
    </div>
  )
}

export default Box
