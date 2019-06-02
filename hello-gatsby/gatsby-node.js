const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

// Gera os slugs pra cada post
module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Gera os arquivos das páginas a partir de cada slug criado acima
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
