import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import Policy from "../../assets/svg/policy.svg"
import "./style.scss"


const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#policy_svg__${selector}`)
}

const PolicyManagementAnimation = () => {

  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")
    const timing = 1.25
    const offset = `-=${timing}`

    const person = findElement(svg, "person")
    const policy = findElement(svg, "policy")
    const lines = findElement(svg, "lines")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(person, timing, { y: 12, easing: Power1.easeInOut }))
      .add(TweenMax.to(policy, timing, { y: -19, opacity: 0.6, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(lines, timing, { y: -10, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="policy-management-animation" ref={elem}>
      <Policy />
    </div>
  )
}

export default PolicyManagementAnimation
