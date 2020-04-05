import React from 'react'
import Link from 'gatsby-link'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostItem from './PostItem'

const BlogPosts = styled.div`
  grid-area: blog;
  width: 900px;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
`
const Pagination = styled.div`
  grid-area: blog;
  align-self: flex-end;
  display: flex;
  place-content: space-evenly;
`

const PaginationButton = styled(motion.button)`
  background: ${(props) => (props.primary ? '#4392f1' : 'white')};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 800;
  color: ${(props) => (props.primary ? 'white' : '#4392f1')};
  width: 150px;
  height: 40px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #4392f1')};
  border-radius: 3px;
`

const BlogList = ({ pageContext }) => {
  const { group, index, pathPrefix } = pageContext

  const previousUrl =
    index - 1 === 0 ? '/' : `${pathPrefix}/${(index - 1).toString()}`
  const correctPreviousUrl = previousUrl === 'blog/1' ? 'blog' : previousUrl
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`

  return (
    <Layout>
      <BlogPosts>
        {group.map(({ node }) => (
          <PostItem post={node} key={node.id} />
        ))}
      </BlogPosts>
      <Pagination>
        <Link to={correctPreviousUrl}>
          <PaginationButton
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{ scale: 0.9 }}
          >
            Previous
          </PaginationButton>
        </Link>
        <Link to={nextUrl}>
          <PaginationButton
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            primary
          >
            Next
          </PaginationButton>
        </Link>
      </Pagination>
    </Layout>
  )
}

export default BlogList
