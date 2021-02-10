import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Post = styled.div`
  grid-area: blog;
`

const ContentPost = styled.div`
  padding: 20px 0px 20px 0;
  line-height: 1.8;
  width: 900px;
  p, li, code {
    font-size: 22px;
    
  }
  code{
    background: #8080802e;
    padding: 3px;
    @media (max-width: 900px) {
      font-size: 12px;
    }
  }
  pre {
    background: #8080802e;
    padding: 10px;
  }
  img {
    max-width: 100%;
    height: auto;
    width: 900px;
    border-radius: 3px;
    @media (max-width: 900px) {
      width: 500px;
    }
    @media (max-width: 600px) {
      width: 300px;
    }
  }
  @media (max-width: 700px) {
    font-size: 18px;
    width: 300px;
  }
`

const TitlePost = styled.div`
  font-size: 40px;
  font-weight: 900;
  align-self: end;
  color: #5bc0eb;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`

const PostView = (props) => {
  const {
    data: {
      markdownRemark: {
        html: content,
        frontmatter: { title },
      },
    },
  } = props
  return (
    <Layout>
      <Post>
        <TitlePost dangerouslySetInnerHTML={{ __html: title }} />
        <ContentPost dangerouslySetInnerHTML={{ __html: content }} />
      </Post>
    </Layout>
  )
}

PostView.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PostView

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
