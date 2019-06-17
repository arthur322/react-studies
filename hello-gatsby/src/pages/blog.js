import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => {
  const postCount = data.allMarkdownRemark.totalCount

  return (
    <Layout>
      <h1>Blog</h1>
      <p>
        Seja bem vindo ao meu blog pessoal. Aqui você pode achar alguns posts
        sobre coisas que estudei e achei legal fazer uma publicação sobre.
        Também pode encontrar minhas redes sociais e contato.
      </p>
      <b>
        {postCount} {postCount > 0 ? "posts" : "post"}
      </b>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/blog/${node.fields.slug}`}>
            <h3 style={{ display: "inline" }}>{node.frontmatter.title}</h3>
          </Link>
          <i> - {node.frontmatter.date}</i>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`
