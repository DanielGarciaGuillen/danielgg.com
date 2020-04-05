import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlogItem from './BlogItem'

const BlogListGrid = styled.div`
  grid-area: blogList;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-gap: 30px;
  font-size: 22px;
  background-color: #fff;
  place-content: center;
  place-items: center;
  grid-template-areas:
    'title'
    'projects';
  @media (max-width: 900px) {
    padding: 40px;
  }
`

const TitleDiv = styled.div`
  grid-row: 1;
  align-self: end;
  justify-self: center;
  h1 : {
    font-size: 40px;
    opacity: 0.8;
    font-weight: 900;
  }
`

const Projects = styled.div`
  grid-area: 'projects';
  display: flex;
  flex-direction: row;
  place-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 4
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  console.log(posts)
  return (
    <BlogListGrid>
      <TitleDiv>
        <h1>Latest Post</h1>
      </TitleDiv>
      <Projects>
        {posts.map(({ node }) => {
          console.log(node)
          return (
            <BlogItem
              url={node.fields.slug}
              post={node.frontmatter}
              key={node.id}
            />
          )
        })}
      </Projects>
    </BlogListGrid>
  )
}

export default BlogList
