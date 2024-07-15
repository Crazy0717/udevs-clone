import { useDispatch, useSelector, useStore } from "react-redux"
import type { RootState, AppDispatch, AppStore } from "../redux/store"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

interface FadeInConfig {
  targetEl: gsap.DOMTarget | null
  duration: number
  startPosition?: string
  endPosition?: string
  showMarkers?: boolean
}

gsap.registerPlugin(ScrollTrigger)

const useFadeIn = () => {
  const fadeIn = (config: FadeInConfig) => {
    const {
      targetEl,
      duration,
      startPosition = "top 90%",
      endPosition = "bottom 60%",
      showMarkers = false,
    } = config

    if (!targetEl) {
      console.warn("Target element is null")
      return
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: targetEl,
          start: startPosition,
          end: endPosition,
          markers: showMarkers,
        },
      })
      .fromTo(
        targetEl,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: duration }
      )
  }

  return fadeIn
}

export default useFadeIn
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
