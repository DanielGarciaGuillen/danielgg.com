import React from 'react'
import Link from 'gatsby-link'
import { motion } from 'framer-motion'

import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import trian3 from '../../images/assets/trianglify.png'

const BlogDiv = styled.div`
  grid-area: blog;
  height: 400px;
  border-radius: 2px;
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;

  @media (max-width: 800px) {
    width: 300px;
  }
`

const Triangles = styled(motion.div)`
  background-image: url(${trian3});
  height: 100px;
  border-radius: 2px;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  -webkit-transition: width 1s, height 1s;
  transition: width 1s, height 1s;
  &:hover {
    width: 1000px;
    height: 400px;
  }

  @media (max-width: 800px) {
    width: 300px;
  }
`

const ReadBlog = styled(motion.button)`
  cursor: pointer;
  background: white;
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  width: 200px;
  height: 50px;
  border: none;
  border-color: 0px solid;
  border-radius: 3px;
  background: #4392f1;
`

const Blog = () => {
  return (
    <BlogDiv>
      <Triangles
        whileHover={{ width: '1000px', height: '400px' }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
          to="/blog"
        >
          <ReadBlog whileTap={{ scale: 0.9 }}>Read Blog</ReadBlog>
        </Link>
      </Triangles>
    </BlogDiv>
  )
}

export default Blog
