import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"
import styled from "styled-components"

import Layout from "../layouts/main"

import { StyledIconBase } from "@styled-icons/styled-icon"
import { Github } from "@styled-icons/bootstrap/Github"
import { Linkedin } from "@styled-icons/bootstrap/Linkedin"
import { Facebook } from "@styled-icons/bootstrap/Facebook"

export default function Home() {
  return (
    <Layout>
      <Container>
        <Section id={"home"}>
          <SnapTo to={"#social"}>Social</SnapTo>
        </Section>
        <Section>
          Middle
        </Section>
        <Section id={"social"}>
          <Link href="https://facebook.com"><Facebook size="48" title="Facebook" /></Link>
          <Link href="https://linkedin.com"><Linkedin size="48" title="LinkedIn" /></Link>
          <Link href="https://github.com"><Github size="48" title="GitHub" /></Link>
        </Section>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch; /* Fix for smooth scrolling on IOS */

  /* Making scrollbars disappear while maintaining the functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`

const Section = styled.section.attrs({
  className: "d-flex flex-row align-items-center justify-content-center",
})`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`
const SnapTo = styled.div.attrs(props => ({
  className: "position-absolute",
  onClick: () => scrollTo(props.to || "#home"),
  size: 100,
}))`

  &:hover {
    cursor: pointer;
  }
`

const Link = styled.a.attrs({
  className: "mx-2",
  rel: "noreferrer",
  target: "_blank"
})`
  ${StyledIconBase} {
    color: white;

    transition: all .33s ease-in-out;;
    
    &:hover {
      color: rgba(212, 212, 212, 255);
      transform: scale(0.9);
    }
  }
`