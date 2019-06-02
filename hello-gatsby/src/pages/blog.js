import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <b>{data.allMarkdownRemark.totalCount} Posts</b>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/blog/${node.fields.slug}`}>
            <h3 style={{ display: "inline" }}>{node.frontmatter.title}</h3> -{" "}
          </Link>
          <i>{node.frontmatter.date}</i>
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
