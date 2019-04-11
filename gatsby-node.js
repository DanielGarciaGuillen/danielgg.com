const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`)

      _.each(result.data.allWordpressPage.edges, edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: pageTemplate,
          context: {
            id: edge.node.id,
          },
        })
      })
    })
    .then(() => graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                modified
                tags {
                  name
                  slug
                }
                categories {
                  name
                  slug
                }
              }
            }
          }
        }
      `))
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const postTemplate = path.resolve(`./src/templates/post.js`)

      // Build a list of categories and tags
      

      // Iterate over the array of posts
      _.each(result.data.allWordpressPost.edges, edge => {
        // Add this post's categories and tags to the global list
       

        // Create the Gatsby page for this WordPress post
        createPage({
          path: `/${edge.node.slug}/`,
          component: postTemplate,
          context: {
            id: edge.node.id,
          },
        })
      })

    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
