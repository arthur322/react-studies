import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <h1>Sobre {data.site.siteMetadata.title}</h1>
    <p>
      Sou um estudante de sistemas de informação, estudo e trabalho com
      desenvolvimento web. Gosto muito deste universo e dessa comunidade que me
      encantei assim que tive meu primeiro contato. Estou focando meus estudos
      para sempre estar por dentro das novas tecnologias e sempre buscando
      aprender algo novo sempre.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
