import React from "react"
import { Link } from "gatsby"

const ListLink = ({ to, children }) => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={to}>{children}</Link>
  </li>
)

export default ListLink
