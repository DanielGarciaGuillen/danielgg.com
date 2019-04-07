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
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 1fr;
  grid-gap: 80px;
  font-size: 22px;
  background-color: #fff;
  font-family: 'Catamaran', sans-serif;
  place-content: center;
  place-items: center;
  grid-template-areas:
  'title'
  'project1'
  'project2';
`

const Title = styled.h1`
  grid-row: 1;
  align-self: end;
  justify-self: center;
  font-size: 35px;
  font-weight: 900;
`

const ProjectDiv1 = styled.div`
  grid-area: project1;
  place-content: center;
  place-items: center;
`
const ProjectDiv2 = styled.div`
  grid-area: project2;
  place-content: center;
  place-items: center;
`


const ProjectTitle = styled.a`
  text-align: center;
  text-decoration: none;
  color: #6bd2ed;
  font-weight: 900;
  font-size: 30px;
  :visited,
  :hover {
    color: #48abd4;
  }
  `

const IconDiv = styled.div`
display: flex;
justify-content:space-evenly;
padding-bottom: 80px

}
`

const ProjectImage = styled.img`
  
  width: 700px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    border: 10px solid transparent; 
    border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%236bd2ed' fill-opacity='0.36'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E")  20% round;
  }
  }
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }

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

        <ProjectDiv1>       
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
          <div>
            <a href="http://dedd.co/">
              <ProjectImage src={dedd} />
            </a>
          </div>           
         
        </ProjectDiv1>

        <ProjectDiv2>
       
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
        

          <div>
            <a href="http://ottawatech.io/">
              <ProjectImage src={ott} />
            </a>
          </div>

        </ProjectDiv2>
      </PortfolioGrid>
    )
  }
}

export default Portfolio;
