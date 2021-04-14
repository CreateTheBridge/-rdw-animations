import React, { useRef, useEffect } from "react"
import { TimelineMax, TweenMax, Power1 } from "gsap/all"
import EnterpriseProduct from "../../assets/svg/enterpriseproduct.svg"


const findElement = (ref, selector) => {
  if (!ref) return
  return ref.querySelector(`#enterpriseproduct_svg__${selector}`)
}

const EnterpriseProductAnimation = () => {

  const elem = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    const svg = elem.current.querySelector("svg")
    const timing = 1.25
    const offset = `-=${timing}`

    const layout = findElement(svg, "layout")
    const line = findElement(svg, "line")
    const cog = findElement(svg, "cog")

    animation.current = new TimelineMax({ repeat: -1, yoyo: true })
    animation.current
      .add(TweenMax.to(layout, timing, { y: 12, opacity: 0.6, easing: Power1.easeInOut }))
      .add(TweenMax.to(line, timing, { y: 9, easing: Power1.easeInOut }), offset)
      .add(TweenMax.to(cog, timing, { y: 10, opacity: 0.6, easing: Power1.easeInOut }), offset)
      .play()

    return () => animation.current.kill()
  })

  return (
    <div className="enterprise-product-animation" ref={elem}>
      <EnterpriseProduct />
    </div>
  )
}

export default EnterpriseProductAnimation
