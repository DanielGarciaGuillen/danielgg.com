import React, { Component } from 'react'
import styled from 'styled-components'

import dedd from '../../images/dedd/dedd.png'
import ott from '../../images/ottawatech/ott.png'
import reactimage from '../../images/icons/react.png'
import styledimage from '../../images/icons/styled.jpeg'
import giphy from '../../images/icons/giphy.png'
import firebase from '../../images/icons/firebase.png'

const Rotate = styled.img`
  width: 100px;
  heigth: 100px;
  -webkit-animation:spin 8s linear infinite;
    -moz-animation:spin 8s linear infinite;
    animation:spin 8s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg);
`

const PortfolioGrid = styled.div`
  grid-area: portfolio;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
  font-size: 22px;
  background-color: #fff;
  font-family: 'Catamaran', sans-serif;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`

const Title = styled.h1`
  grid-column: 1/3;
  grid-row: 1;
  align-self: end;
  justify-self: center;
  font-size: 35px;
  font-weight: 900;
`

const DeddCopy = styled.div`
  grid-column: 2;
  grid-row: 2;
`
const DeddImages = styled.div`
  grid-column: 1;
  grid-row: 2;
  ${DeddCopy}:hover & {
    transform: scale(1.05);
  }
`
const ProjectTitle = styled.a`
  text-align: center;
  text-decoration: none;
  color: #60b3d8;
  font-weight: 900;
  :visited,
  :hover {
    color: #48abd4;
  }
`
const OttawaCopy = styled.div`
  grid-column: 1;
  grid-row: 3;
`

const OttawaImages = styled.div`
  grid-column: 2;
  grid-row: 3;
`

const IconDiv = styled.div`
display: flex;
justify-content:space-evenly;
}
`

const ProjectImage1 = styled.img`
  width: 500px;
  &:hover {
    transform: scale(1.12);

`

const ProjectImage = styled.img`
  width: 500px;
  &:hover {
    transform: scale(1.05);

`

const TechIcon = styled.img`
  width: 80px;
  border-radius: 3px;
`

class Portfolio extends Component {
  render() {
    return (
      <PortfolioGrid>
        <Title>Portfolio</Title>

        <DeddImages>
          <a href="http://dedd.co/">
            <ProjectImage src={dedd} />
          </a>
        </DeddImages>

        <DeddCopy>
          <ProjectTitle href="http://dedd.co/">Dedd.co</ProjectTitle>
          <p>Do you need some inspiration? The answer is an GIF!</p>
          <p> Using... </p>
          <IconDiv>
            <a href="https://reactjs.org/">
              <Rotate src={reactimage} />
            </a>
            <a href="https://github.com/styled-components/styled-components">
              <TechIcon src={styledimage} />
            </a>
            <a href="https://developers.giphy.com/">
              <TechIcon src={giphy} />
            </a>
          </IconDiv>
        </DeddCopy>

        <OttawaCopy>
          {' '}
          <ProjectTitle href="http://dedd.co/">OttawaTech</ProjectTitle>
          <p>Looking for a Tech Job in Ottawa?</p>
          <p>Check this directory with 200+ Tech Companies</p>
          <p> Using... </p>
          <IconDiv>
            <a href="https://reactjs.org/">
              <Rotate src={reactimage} />
            </a>
            <a href="https://github.com/styled-components/styled-components">
              <TechIcon src={styledimage} />
            </a>
            <a href="https://https://firebase.google.com/">
              <TechIcon src={firebase} />
            </a>
          </IconDiv>
        </OttawaCopy>

        <OttawaImages>
          <a href="http://ottawatech.io/">
            <ProjectImage1 src={ott} />
          </a>
        </OttawaImages>
      </PortfolioGrid>
    )
  }
}

export default Portfolio;
