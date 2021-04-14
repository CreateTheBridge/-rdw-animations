import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import RdwHeader from "./rdwheader.svg"

import "./style.css"


const HeaderAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")
    animation.current = new TimelineMax({ repeat: -1, yoyo: true })


    // Light
    const chart = svg.querySelector("#rdwheader_svg__chart")
    const spiral = svg.querySelector("#rdwheader_svg__spiral")
    const lightTimeline = new TimelineMax()
    lightTimeline
      .add(TweenMax.to(chart, 1.25, { y: -10, opacity: 1, ease: Power1.easeInOut }))
      .add(TweenMax.to(spiral, 1.25, { y: -17, opacity: 1, ease: Power1.easeInOut }), "-=1.25")


    // Right Panel
    const elem4 = svg.querySelector("#rdwheader_svg__element4")
    const elem5 = svg.querySelector("#rdwheader_svg__element5")
    const rightPanelTimeline = new TimelineMax()
    rightPanelTimeline
      .add(TweenMax.to(elem4, 1.25, { y: -3, opacity: 1, ease: Power1.easeInOut }))
      .add(TweenMax.to(elem5, 1.25, { y: 8, opacity: 1, ease: Power1.easeInOut }), "-=1.25")

    // Left Panel
    const elem1 = svg.querySelector("#rdwheader_svg__element1")
    const elem2 = svg.querySelector("#rdwheader_svg__element2")
    const elem3 = svg.querySelector("#rdwheader_svg__element3")

    const leftPanelTimeline = new TimelineMax()
    leftPanelTimeline
      .add(TweenMax.to(elem1, 1.25, { y: -6, opacity: 1, ease: Power1.easeInOut }))
      .add(TweenMax.to(elem2, 1.25, { y: 11, opacity: 1, ease: Power1.easeInOut }), "-=1.25")
      .add(TweenMax.to(elem3, 1.25, { y: 6, opacity: 1, ease: Power1.easeInOut }), "-=1.25")


    animation.current
      .add(lightTimeline)
      .add(rightPanelTimeline, "-=1")
      .add(leftPanelTimeline, "-=1")
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="header-animation" ref={elem}>
      <RdwHeader />
    </div>
  )
}

export default HeaderAnimation
