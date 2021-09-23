import { graphql, useStaticQuery } from 'gatsby'
// import Img, { GatsbyImageProps } from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const Images = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <H1>View our Destinations</H1>
      <Flex>
        <Grid>
          {/* {data.allFile.edges.map((image, key) => (
            <StyledImage
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split('.')[0]} // only use section of the file extension with the filename
            />
          ))} */}
        </Grid>
      </Flex>
    </Container>
  )
}

export default Images

const Container = styled.div`
  text-align: center;
`

const H1 = styled.h1`
  margin: 24px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
  grid-auto-rows: minmax(50px, auto);
  width: 100%;
  max-width: 1000px;
`

const Flex = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

// const StyledImage = styled(Img)<{
//   fluid: GatsbyImageProps
// }>`
//   margin: 10px;

//   &:nth-child(5) {
//     grid-column-end: span 2;
//   }

//   &:nth-child(9) {
//     grid-row-start: 4;
//     grid-column-end: span 2;
//   }

//   & picture img:hover {
//     transform: scale(1.1);
//     transition: 0.6s all ease !important;
//     cursor: pointer;
//   }
// `
