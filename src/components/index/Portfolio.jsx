import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import portfolioList from './PortfolioList'

const PortfolioGrid = styled.div`
  grid-area: portfolio;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 1fr;
  grid-gap: 30px;
  font-size: 22px;
  background-color: #fff;
  font-family: 'Catamaran', sans-serif;
  place-content: center;
  place-items: center;
  grid-template-areas:
    'title'
    'project1'
    'project2';
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

const Portfolio = () => (
  <PortfolioGrid>
    <TitleDiv>
      <h1>Portfolio</h1>
    </TitleDiv>
    {portfolioList.map(project => (
      <Project project={project} key={project.url} />
    ))}
  </PortfolioGrid>
)

export default Portfolio
