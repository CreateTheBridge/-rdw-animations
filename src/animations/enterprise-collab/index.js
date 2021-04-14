import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import EnterpriseSvg from "../../assets/svg/enterprise.svg"


const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#enterprise_svg__${selector}`)
}

const EnterpriseCollabAnimation = () => {
  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")

    const timing = 1.25
    const offset = `-=${timing}`

    const people = findElement(svg, "people")
    const cube = findElement(svg, "cube")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(people, timing, { y: -10, opacity: 0.7, easing: Power1.easeInOut }))
      .add(TweenMax.to(cube, timing, { y: 8, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="enterprise-collab-animation" ref={elem}>
      <EnterpriseSvg />
    </div>
  )
}

export default EnterpriseCollabAnimation
