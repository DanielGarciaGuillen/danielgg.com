import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
  }
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
  width: 900px;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
  box-shadow: 6px 2px 44px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  margin-bottom: 100px;
  a {
    text-decoration: none;
    color: #5bc0eb;
    &:hover {
      color: #9c6ccc;
    }
  }
`
const ReadMoreDiv = styled.div`
  padding: 0 0 5px 12px;
`

const PostItem = ({ post }) => {
  console.log(post)
  return (
    <PostListContainer key={post.fields.slug}>
      <Link to={post.fields.slug} key={post.frontmatter.title}>
        {post.frontmatter.featuredImage !== null ? (
          <FeaturedImage
            src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
          />
        ) : null}
        <Title dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />
      </Link>

      <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <ReadMoreDiv>
        <Link to={post.fields.slug}>
          <h4>Read More</h4>
        </Link>
      </ReadMoreDiv>
    </PostListContainer>
  )
}

export default PostItem
