import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Excerpt = styled.div`
  padding: 15px 0 0 20px;
  line-height: 1.5;
  margin-top: -25px;
  margin-bottom: -25px;
`
const Title = styled.div`
  padding: 15px 0 0 20px;
  font-size: 33px;
  color: #5bc0eb;
  font-weight: bold;
  line-height: 40px;
  &:hover {
    color: #9c6ccc;
  }
  @media (max-width: 700px) {
    font-size: 25px;
`

const FeaturedImage = styled.img`
  width: 900px;
  border-radius: 10px 10px 0 0;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
`
const PostListContainer = styled.div`
  box-shadow: 6px 2px 44px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  margin-bottom: 100px;
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
`
const ReadMoreDiv = styled.div`
  padding: 0 0 5px 15px;
`

const PostItem = ({ post }) => (
  <PostListContainer key={post.slug}>
    <Link to={post.slug} key={post.title}>
      {post.featured_media !== '' ? (
        <FeaturedImage src={post.featured_media.source_url} alt="" />
      ) : null}
      <Title dangerouslySetInnerHTML={{ __html: post.title }} />
    </Link>

    <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    <ReadMoreDiv>
      <Link to={post.slug}>
        <h4>Read More</h4>
      </Link>
    </ReadMoreDiv>
  </PostListContainer>
)

export default PostItem
