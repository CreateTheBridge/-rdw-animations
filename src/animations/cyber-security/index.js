import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import CyberSecuritySvg from "./cybersecurity.svg"
import "./style.scss"

const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#cybersecurity_svg__${selector}`)
}

const CyberSecurityAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")

    const timing = 1.25
    const offset = `-=${timing}`
    const linesup = findElement(svg, "linesup")
    const linesmid = findElement(svg, "linesmid")
    const lights = findElement(svg, "lights")
    const lock = findElement(svg, "lock")

    animation.current = new TimelineMax({ yoyo: true, repeat: -1 })
    animation.current
      .add(TweenMax.to(linesup, timing, { y: 8, opacity: 0.5, easing: Power1.easeInOut }))
      .add(TweenMax.to(linesmid, timing, { y: 18, opacity: 0.7, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(lights, timing, { y: -21, opacity: 0.2, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(lock, timing, { y: -15, opacity: 0.7, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })


  return (
    <div className="cyber-security-animation" ref={elem}>
      <CyberSecuritySvg />
    </div>
  )
}

export default CyberSecurityAnimation
