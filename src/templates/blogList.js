import React from 'react'
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
  width: 900px;
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

const NavLink = ({test, url, text}) => {
  
  if (!test) {
    return <Link to={url}>{text}</Link>
  } 
    return <span>{text}</span>
  
}

const IndexPage = ({pageContext}) => {

  
  const { group, index, first, last, pathPrefix } = pageContext
  const previousUrl = index - 1 === 1 ? '' : `${pathPrefix}/${(index - 1).toString()}`
  const nextUrl =  `${pathPrefix}/${(index  + 1).toString()}`


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