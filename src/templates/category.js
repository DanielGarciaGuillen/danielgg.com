import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allWordpressPost.edges
    const postLinks = posts.map(post => (
      <li key={post.node.slug}>
        <Link to={post.node.slug}>
          <h2>{post.node.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.name
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allWordpressPost.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } in the “${tag}” category`

    return (
      <Layout>
        <section>
          <Helmet title={`${tag} | ${title}`} />
          <div>
            <div>
              <div s-10 style={{ marginBottom: '6rem' }}>
                <h3>{tagHeader}</h3>
                <ul>{postLinks}</ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: { categories: { slug: { eq: $slug } } }) {
      totalCount
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`
