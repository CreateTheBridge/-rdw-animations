import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import TechnologySvg from "../../assets/svg/technology.svg"
import "./style.scss"

const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#technology_svg__${selector}`)
}

const TechnologyAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")

    const timing = 1.25
    const offset = `-=${timing}`
    const up = findElement(svg, "up")
    const shapeRight = findElement(svg, "shaperight")
    const shapeLeft = findElement(svg, "shapeleft")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(up, timing, { y: -6, opacity: 0.6, easing: Power1.easeInOut }))
      .add(TweenMax.to(shapeRight, timing, { y: 5, opacity: 0.1, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(shapeLeft, timing, { y: 5, opacity: 0.1, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="technology-animation" ref={elem}>
      <TechnologySvg />
    </div>
  )
}

export default TechnologyAnimation
