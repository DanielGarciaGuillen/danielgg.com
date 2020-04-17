import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PortfolioItem = styled(motion.div)`
  box-shadow: 6px 2px 44px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  width: 400px;
  font-size: 16px;
  margin-bottom: 50px;
  @media (max-width: 700px) {
    width: 350px;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`
const Title = styled.a`
  text-decoration: none;
  color: #6bd2ed;
  font-weight: 900;
  font-size: 24px;
  :visited,
  :hover {
    color: #48abd4;
  }
`

const TitleDiv = styled.div`
  padding: 15px 0 0 20px;
`

const SubtitleDiv = styled.div`
  padding: 10px 0 0 20px;
`

const CreatedWith = styled.div`
  padding: 15px 0 0 20px;
`

const IconDiv = styled.div`
  display: flex;
  place-content: space-evenly;
  padding: 15px 0 15px 20px;
`

const TechIcon = styled.img`
  width: 40px;
  border-radius: 3px;
`

const ProjectImage = styled.img`
  width: 400px;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`

const Project = ({ project: { title, subTitle, url, image, tech } }) => (
  <PortfolioItem
    whileHover={{
      scale: 1.1,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    <a href={url}>
      <ProjectImage src={image} />
    </a>
    <TitleDiv>
      <Title href={url}>{title}</Title>
    </TitleDiv>
    <SubtitleDiv>{subTitle}</SubtitleDiv>
    <CreatedWith>Using</CreatedWith>
    <IconDiv>
      {tech.map((item) => (
        <a href={item.url} key={item.url}>
          <TechIcon src={item.image} />
        </a>
      ))}
    </IconDiv>
  </PortfolioItem>
)

export default Project
