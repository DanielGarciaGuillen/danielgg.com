const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                title
                excerpt
                author {
                  name
                }
                featured_media {
                  source_url
                }
                date(formatString: "MMMM DD, YYYY")
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
      createPaginatedPages({
        edges: result.data.allWordpressPost.edges,
        createPage,
        pageTemplate: 'src/templates/blogList.js',
        pageLength: 6, // This is optional and defaults to 10 if not used
        pathPrefix: 'blog',
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, 
      })

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
