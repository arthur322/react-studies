import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <i>{data.markdownRemark.frontmatter.date}</i>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
      }
      html
    }
  }
`
