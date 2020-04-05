import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
const PostListContainer = styled(motion.div)`
  width: 900px;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
  box-shadow: 6px 2px 44px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin-bottom: 100px;
  a {
    text-decoration: none;
    color: #5bc0eb;
    &:hover {
      color: #9c6ccc;
    }
  }
`

const Title = styled.div`
  padding: 15px 0 15px 20px;
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

const Excerpt = styled.div`
  padding: 0px 0 0px 20px;
  line-height: 1.5;
  font-size: 18px;
  color: black;
`
const ReadMoreDiv = styled.div`
  padding: 0px 0 5px 20px;
`

const PostItem = ({ post }) => {
  return (
    <Link to={post.fields.slug} key={post.frontmatter.title}>
      <PostListContainer
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        key={post.fields.slug}
      >
        {post.frontmatter.featuredImage !== null ? (
          <FeaturedImage
            src={post.frontmatter.featuredImage.childImageSharp.fluid.src}
          />
        ) : null}
        <Title dangerouslySetInnerHTML={{ __html: post.frontmatter.title }} />

        <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <ReadMoreDiv>
          <Link to={post.fields.slug}>
            <h4>Read More</h4>
          </Link>
        </ReadMoreDiv>
      </PostListContainer>
    </Link>
  )
}

export default PostItem
