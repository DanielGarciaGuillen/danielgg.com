/*  import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout' */

/*
export default class BlogList extends React.Component {
  getPostList() {
    const postList = []
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

    console.log(this.props)
    const postList = this.getPostList()


    return (
      <Layout>
        <BlogPosts>
          {postList.map(post => (
            <PostListContainer>            
              <Link className="post-link" to={post.slug} key={post.title}>
                {post.featuredImageUrl !== '' ? (
                  <FeaturedImage
                    src={post.featuredImageUrl}
                    alt=""
                  />
                ) : (
                  null
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

BlogList.propTypes = {
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
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
` */

import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Layout from '../components/Layout'

const BlogPosts = styled.div`
  grid-area: blog;
`
const Excerpt = styled.div`
  line-height: 1.5;
  margin-top: -25px;
  margin-bottom: -25px;  
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

const FeaturedImage = styled.img`
  width: 700px;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }

`
const PostListContainer = styled.div` 
  transition: all .2s ease-in-out;
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
  h3 {
    position: relative;
  }
  post-link {
    display: flex;
    flex-direction: column;
  }
    .title-link {
    font-size: 25px;
  }
  }
`
const Pagination = styled.div`
  grid-area: blog;
  align-self: flex-end;
  display: flex;
  place-content: space-evenly;
`

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } 
    return <span>{props.text}</span>
  
}

const IndexPage = ({pageContext}) => {

  console.log(pageContext)
  
  const { group, index, first, last, pageCount, pathPrefix } = pageContext
  const previousUrl = index - 1 === 1 ? '' : `${pathPrefix}/${(index - 1).toString()}`
  const nextUrl =  `${pathPrefix}/${(index  + 1).toString()}`

  const post = group.map(item => console.log(item))

  return (
    <Layout>
      <BlogPosts>
        {group.map(({node}) => (
          <PostListContainer>            
            <Link className="post-link" to={node.slug} key={node.title}>
              {node.featured_media !== '' ? (
                <FeaturedImage
                  src={node.featured_media.source_url}
                  alt=""
                />
            ) : (
              null
            )}
              <Title dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>

            <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />

            <Link to={node.slug}>
              <h4 className="title-link">Read More</h4>
            </Link>
          </PostListContainer>
      ))}
      </BlogPosts>
      <Pagination>
        <div>
          <NavLink test={first} url={previousUrl} text="Previous Page" />
        </div>
        <div>
          <NavLink test={last} url={nextUrl} text="Next Page" />
        </div>
      </Pagination>
    
    </Layout>
  )
}


export default IndexPage