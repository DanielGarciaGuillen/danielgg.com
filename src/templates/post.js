import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Post = styled.div`
  grid-area: blog;
`

const ContentPost = styled.div`
  padding-top: 20px;
  line-height: 1.5;

  @media (max-width: 700px) {
    font-size: 18px;
    img {
      max-width: 300px;
    }
  }
`

const TitlePost = styled.div`
  font-size: 40px;
  font-weight: 900;
  align-self: end;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  return (
    <Layout>
      <Post>
        <TitlePost dangerouslySetInnerHTML={{ __html: post.title }} />
        <ContentPost dangerouslySetInnerHTML={{ __html: post.content }} />
      </Post>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
    }
  }
`
