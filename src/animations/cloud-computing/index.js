import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import { Cloudcomputing } from "../../svg"


const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#cloudcomputing_svg__${selector}`)
}

const CloudComputingAnimation = () => {

  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")
    const timing = 1.25
    const offset = `-=${timing}`

    const cloud = findElement(svg, "cloud")
    const line1 = findElement(svg, "line1")
    const line2 = findElement(svg, "line2")
    const lights = findElement(svg, "lights")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(cloud, timing, { y: 7, opacity: 0.6, easing: Power1.easeInOut }))
      .add(TweenMax.to(line1, timing, { y: 15, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(line2, timing, { y: 15, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(lights, timing, {y: -9, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="cloud-computing-animation" ref={elem}>
      <Cloudcomputing />
    </div>
  )
}

export default CloudComputingAnimation
