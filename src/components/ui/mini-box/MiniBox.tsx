import Image from "next/image"
import "./MiniBox.scss"

interface propsTypes {
  item: {
    imgUrl: string
    alt: string
    text: string
  }
}

const MiniBox = ({ item }: propsTypes) => {
  return (
    <div className="miniBox">
      <Image src={item.imgUrl} alt={item.alt} width={24} height={24} />
      <p>{item.text}</p>
    </div>
  )
}

export default MiniBox
