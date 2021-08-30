import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Image({ name, atr }) {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(
          edge => {
            return edge.node.fluid.originalName === name
          }
        )

        if (!image) {
          return null
        }

        return <Img className={atr} fluid={image.node.fluid} />
      }}
    />
  )
}