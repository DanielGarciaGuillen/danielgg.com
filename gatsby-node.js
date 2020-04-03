const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/PostView.jsx`)
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    const blogPageTemplate = path.resolve(`./src/templates/BlogList.jsx`)

    createPaginatedPages({
      edges: posts,
      createPage,
      pageTemplate: blogPageTemplate,
      pageLength: 4, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog',
      buildPath: (index, pathPrefix) =>
        index > 0 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
    })

    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? null : posts[index - 1].node
      const next = index === posts.length - 1 ? null : posts[index + 1].node
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          prev,
          next,
          slug: node.fields.slug,
        },
      })
    })

    return posts
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
