import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Seo, Hero, BigText, Timeline, TextScroll, Projects } from "../components/index"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite{
    edges {
      node {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  }
  }
`


const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Sebastian Marin" />
      <Hero id={'intro'} />
      <BigText id={'about'} />
      <Timeline id={'experience'} />
      <TextScroll content={`HTML - CSS - JAVASCRIPT - REACT - NEXT JS - SASS - LESS - STYLED COMPONENTS`} direction={`left`} />
      <Projects
        id={'projects'}
        projects={[
          {
            id: 1,
            name: 'Petgold Shop',
            subTitle: '[ E-commerce ]',
            content: `Tienda virtual de productos para mascotas, realice el diseño de las vistas y programación de la pagina. Próximamente al aire.`,
            image: `petgold-thumbnail.jpg`,
            isLive: false,
            lightbox: `petgold-lightbox.png`,
          },
          {
            id: 2,
            name: 'Camilo Pulido Arquitectos',
            subTitle: '[ E-commerce ]',
            content: `Tienda virtual y portafolio de diseños arquitectónicos para el arquitecto Camilo Pulido. realice el diseño de las vistas y programación de la pagina.`,
            image: `cpa.jpg`,
            isLive: true,
            link: `https://camilopulidoarquitectos.com/`,
          },
          {
            id: 3,
            name: 'Addiuva',
            subTitle: '[ Corporativa ]',
            content: `Pagina corporativa para Addiuva - Consumer Services, esta pagina se diseño y se desarrollo en 360PMI y mi labor fue programar el front-end por completo.`,
            image: `addiuva.jpg`,
            isLive: true,
            link: `https://addiuva.com/`,
          },
          {
            id: 4,
            name: 'CityTrees',
            subTitle: '[ Portafolio ]',
            content: `Pagina para Oasis Cannabis, esta pagina se diseño y se desarrollo en 360PMI y mi labor fue programar el front-end por completo.`,
            image: `citytrees.jpg`,
            isLive: true,
            link: `https://citytrees.com/`,
          },
        ]}
      />
      <TextScroll content={`PHP - BOOTSTRAP - TAILWIND - WEBPACK - GSAP - REST API - MAILING - JQUERY`} direction={`right`} />

    </>
  )
}

export default IndexPage
