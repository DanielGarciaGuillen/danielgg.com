import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
  width: 950px;
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
  padding-bottom: 100px;
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

export default class BlogList extends React.Component {
  render() {
    const { postList } = this.props

    return (
      <BlogPosts>
        {postList.map(post => (
          <PostListContainer>
            <Link className="post-link" to={post.slug} key={post.title}>
              {post.featuredImageUrl !== '' ? (
                <FeaturedImage src={post.featuredImageUrl} alt="" />
              ) : null}
              <Title dangerouslySetInnerHTML={{ __html: post.title }} />
            </Link>

            <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt }} />

            <Link to={post.slug}>
              <h4 className="title-link">Read More</h4>
            </Link>
          </PostListContainer>
        ))}
      </BlogPosts>
    )
  }
}
