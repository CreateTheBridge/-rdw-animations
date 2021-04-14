import React from 'react'
import { render} from 'react-dom'

import { default as AnimationSection } from "./section"
import { 
  HeaderAnimation,
  AboutAnimation,
  AiAnimation,
  CyberSecurityAnimation,
  EnterpriseCollabAnimation,
  EnterpriseProductAnimation,
  PolicyManagementAnimation,
  TechnologyAnimation,
  CloudComputingAnimation,
  BigDataAnimation
} from "../../src"

import './index.css';

const App = () => (
  <main style={{
    minHeight: "100vh",
    background: "#10102A",
    overflow: "hidden"
  }}>
    <AnimationSection title="Header Animation">
      <HeaderAnimation />
    </AnimationSection>

    <AnimationSection title="About Animation">
      <AboutAnimation />
    </AnimationSection>

    <AnimationSection title="AI Animation">
      <AiAnimation />
    </AnimationSection>

    <AnimationSection title="Big Data Animation">
      <BigDataAnimation />
    </AnimationSection>

    <AnimationSection title="Cloud Computing Animation">
      <CloudComputingAnimation />
    </AnimationSection>

    <AnimationSection title="Cyber Security Animation">
      <CyberSecurityAnimation />
    </AnimationSection>

    <AnimationSection title="Enterprise Collab Animation">
      <EnterpriseCollabAnimation />
    </AnimationSection>

    <AnimationSection title="Enterprise Product Animation">
      <EnterpriseProductAnimation />
    </AnimationSection>

    <AnimationSection title="Policy Management Animation">
      <PolicyManagementAnimation />
    </AnimationSection>

    <AnimationSection title="Technology Animation">
      <TechnologyAnimation />
    </AnimationSection>

  </main>
)

render(<App />, document.getElementById("root"));