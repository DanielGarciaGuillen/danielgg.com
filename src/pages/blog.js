import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPosts = styled.div`
  grid-area: blog;
`
const Excerpt = styled.div`
  p {
    padding-top: 20px;
  }
`
const Title = styled.div`
  font-size: 33px;
  color: #5bc0eb;
  padding: 15px 0px 15px 0;
  font-weight: bold;
  line-height: 40px;
  &:hover {
    color: #9c6ccc;
  }
  @media (max-width: 700px) {
    font-size: 25px;
`
const PostListContainer = styled.div`
  margin: 0 0 120px;
  p {
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: #5bc0eb;
    &:hover {
      color: #9c6ccc;
    }
  }
  h3 {
    position: relative;
  }
  post-link {
    display: flex;
    flex-direction: column;
  }
  .featured-image {
    max-height: 950px;
    object-fit: cover;
    border-radius: 2px;
    :hover {
      transform: scale(1.005);
    }
  }

  .title-link {
    font-size: 25px;
  }

  @media (max-width: 700px) {
    .featured-image {
      max-width: 350px;
      object-fit: cover;
      border-radius: 2px;
      :hover {
        transform: scale(1.005);
      }
    }
  }
`

export default class IndexPage extends React.Component {
  getPostList() {
    const postList = []
    console.log('prop', this.props)
    const {
      data: {
        allWordpressPost: { edges: posts },
      },
    } = this.props
    posts.forEach(post => {
      postList.push({
        slug: post.node.slug,
        cover: post.node.cover,
        title: post.node.title,
        date: post.node.date,
        excerpt: post.node.excerpt,
        featuredImageUrl:
          post.node.featured_media !== null
            ? post.node.featured_media.source_url
            : '',
        authorName: post.node.author.name,
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()

    console.log('postList', postList)

    return (
      <Layout>
        <BlogPosts>
          {postList.map(post => (
            <PostListContainer>
              <Link className="post-link" to={post.slug} key={post.title}>
                {post.featuredImageUrl !== '' ? (
                  <img
                    className="featured-image"
                    src={post.featuredImageUrl}
                    alt="featured-image"
                  />
                ) : (
                  <div />
                )}
                <Title dangerouslySetInnerHTML={{ __html: post.title }} />
              </Link>

              <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />

              <Link to={post.slug}>
                <h4 className="title-link">Read More</h4>
              </Link>
            </PostListContainer>
          ))}
        </BlogPosts>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(sort: { fields: date, order: DESC }) {
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
            localFile {
              childImageSharp {
                resolutions(width: 500, height: 300) {
                  ...GatsbyImageSharpResolutions_withWebp
                }
              }
            }
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
