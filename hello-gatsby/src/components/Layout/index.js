import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header
      style={{ margin: "3rem auto", maxWidth: "700px", padding: "0 1rem" }}
    >
      <h3 style={{ marginBottom: "2rem", display: "inline" }}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h3>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Principal</ListLink>
        <ListLink to="/about">Sobre</ListLink>
      </ul>
      {children}
    </header>
  )
}

export default Layout
