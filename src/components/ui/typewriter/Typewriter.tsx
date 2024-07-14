"use client"
import TypewriterComponent from "typewriter-effect"

interface TypewriterProps {
  strings: string[]
  delay?: number
  loop?: boolean
}

const Typewriter: React.FC<TypewriterProps> = ({
  strings,
  delay = 2500,
  loop = true,
}) => {
  return (
    <TypewriterComponent
      options={{
        strings: strings,
        autoStart: true,
        loop: loop,
      }}
      onInit={(typewriter) => {
        typewriter.typeString(strings[0]).pauseFor(delay).deleteAll().start()
      }}
    />
  )
}

export default Typewriter
