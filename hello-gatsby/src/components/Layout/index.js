import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import ListLink from "./ListLink"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ margin: "3rem auto", maxWidth: "700px", padding: "0 1rem" }}>
      <div>
        <h3 style={{ marginBottom: "2rem", display: "inline" }}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h3>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/about">Sobre</ListLink>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default Layout
