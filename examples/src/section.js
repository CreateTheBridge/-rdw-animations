import React from "react"

const AnimationSection = ({ title, children }) => {
  return (
    <section className="animation-section">
      <div className="title">{title}</div>
      {children}
    </section>
  )
}

export default AnimationSection