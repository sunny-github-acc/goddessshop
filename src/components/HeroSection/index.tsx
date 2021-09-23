import { graphql, Link, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "mint.jpg" }) {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `,
  )
  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
      <Container>
        <StyledLink to="/products">
          <H1>NATŪRALI KOSMETIKA</H1>
        </StyledLink>
      </Container>
    </BackgroundImage>
  )
}

export default HeroSection

const Container = styled.div`
  background-image: url('../../images/background.jpg');
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
`
const H1 = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fonts.size.xxl};
  margin-top: 0px;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: ${props => props.theme.fonts.size.xl};
  }
`

// const P = styled.p`
//   margin-top: 8px;
//   color: ${props => props.theme.colors.white10};
//   font-size: ${props => props.theme.fonts.size.l};
//   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
//     'Lucida Sans', Arial, sans-serif;

//   @media screen and (max-width: 768px) {
//     font-size: ${props => props.theme.fonts.size.m};
//   }
// `

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
