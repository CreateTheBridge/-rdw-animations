import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"

import { About } from "../../svg"


const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#about_svg__${selector}`)
}

const AboutAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")

    const timing = 1.25
    const offset = `-=${timing}`
    const flag = findElement(svg, "flag")
    const center = findElement(svg, "center")
    const calendar = findElement(svg, "calendar")
    const cloud = findElement(svg, "cloud")
    const user = findElement(svg, "user")
    const mail = findElement(svg, "mail")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(flag, timing, { y: -15, opacity: 0.7, easing: Power1.easeInOut }))
      .add(TweenMax.to(center, timing, { y: 12, opacity: 0.7, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(calendar, timing, { y: 15, opacity: 0.4, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(cloud, timing, { y: 20, opacity: 0.6, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(user, timing, { y: -21, opacity: 0.6, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(mail, timing, { y: 14, opacity: 0.4, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="about-animation"  ref={elem}>
      <About />
    </div>
  )
}

export default AboutAnimation
