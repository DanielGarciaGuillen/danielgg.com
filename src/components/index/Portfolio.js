import React, { Component } from 'react'
import styled from 'styled-components'
import dedd from '../../images/dedd/dedd.png'
import ott from '../../images/ottawatech/ott.png'
import reactimage from '../../images/icons/react.png'
import styledimage from '../../images/icons/styled.jpeg'
import giphy from '../../images/icons/giphy.png'
import firebase from '../../images/icons/firebase.png'

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
`

const TitleDiv = styled.div`
  grid-row: 1;
  align-self: end;
  justify-self: center;
  h1 :{
    font-size: 40px;
    opacity: 0.8;
    font-weight: 900;
  }
`

const ProjectDiv1 = styled.div`
  grid-area: project1;
  place-content: center;
  place-items: center;  
  @media (min-width: 700px) {
    width: 800px;
  }
`
const ProjectDiv2 = styled.div`
  grid-area: project2;
  place-content: center;
  place-items: center;  
  @media (min-width: 700px) {
    width: 800px;    
  }
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
  padding-bottom: 45px;
`


const TechIcon = styled.img`
  width: 80px;
  border-radius: 3px;
`
const Rotate = styled.img`
  width: 100px;
  -webkit-animation:spin 8s linear infinite;
    -moz-animation:spin 8s linear infinite;
    animation:spin 8s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg);
`

const ProjectImage = styled.img`  
  width: 700px;
  transition: all .2s ease-in-out;
  border: 2px solid aliceblue; 
  border-radius: 10px;
  &:hover {
    transform: scale(1.02);
    border: 4px solid aliceblue; 
  }  
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
`



class Portfolio extends Component {
  render() {
    return (
      <PortfolioGrid>
        <TitleDiv>
          <h1>Portfolio</h1>
        </TitleDiv>

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
              <ProjectImage alt="OttawaTechPhoto" src={ott} />
            </a>
          </div>

        </ProjectDiv2>
      </PortfolioGrid>
    )
  }
}

export default Portfolio;
