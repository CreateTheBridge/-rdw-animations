import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import AiSvg from "../../assets/svg/ai.svg"

const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#ai_svg__${selector}`)
}

const AiAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    // Find root svg
    const svg = elem.current.querySelector("svg")

    const timing = 1.25
    const line1 = findElement(svg, "line1")
    const line2 = findElement(svg, "line2")
    const brain = findElement(svg, "brain")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(line1, timing, { y: 10, opacity: 0.2, easing: Power1.easeInOut }))
      .add(TweenMax.to(line2, timing, { y: 10, opacity: 0.2, easing: Power1.easeInOut }), `-=${timing}`)
      .add(TweenMax.to(brain, timing, { y: 10, opacity: 0.2, easing: Power1.easeInOut }), `-=${timing}`)
      .play()


    return () => animation.current.kill()
  })

  return (
    <div className="ai-animation" ref={elem}>
      <AiSvg />
    </div>
  )
}

export default AiAnimation
