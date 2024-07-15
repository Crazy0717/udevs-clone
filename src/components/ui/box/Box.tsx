import Image from "next/image"
import "./Box.scss"

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
