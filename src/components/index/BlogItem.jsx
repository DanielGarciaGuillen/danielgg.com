import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BlogItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: 6px 2px 44px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 350px;
  height: 320px;
  margin-bottom: 50px;
  font-size: 16px;
  @media (max-width: 700px) {
    width: 280px;
    height: 300px;
    margin-bottom: 20px;
  }
`
const Title = styled.a`
  text-decoration: none;
  color: #6bd2ed;
  font-weight: 800;
  font-size: 20px;
  :visited,
  :hover {
    color: #48abd4;
  }
`

const TitleDiv = styled.div`
  margin-top: auto;
  padding: 10px;
`

const ProjectImage = styled.img`
  width: 350px;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 700px) {
    width: 280px;
  }
`

const BlogItem = ({ url, post }) => (
  <BlogItemContainer
    whileHover={{
      scale: 1.1,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    <a href={url}>
      <ProjectImage src={post.featuredImage.childImageSharp.fluid.src} />
    </a>
    <TitleDiv>
      <Title href={url}>{post.title}</Title>
    </TitleDiv>
  </BlogItemContainer>
)

export default BlogItem
