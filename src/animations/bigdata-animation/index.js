import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"

import { Bigdata } from "../../svg"

const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#bigdata_svg__${selector}`)
}

const BigdataAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")

    const timing = 1.25
    const offset = `-=${timing}`
    const screens = findElement(svg, "screens")
    const lights = findElement(svg, "lights")
    const chart = findElement(svg, "chart")

    animation.current = new TimelineMax({ yoyo: true, repeat: -1 })
    animation.current
      .add(TweenMax.to(screens, timing, { y: -7, opacity: 0.7, easing: Power1.easeInOut }))
      .add(TweenMax.to(lights, timing, { y: 9, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(chart, timing, { y: 6, opacity: 0.5, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="big-data-animation" ref={elem}>
      <Bigdata />
    </div>
  )
}

export default BigdataAnimation
