import React from 'react'
import styled from 'styled-components'
import Intro from '../components/index/Intro'
import ParticlesHead from '../components/index/ParticlesHead'
import Blog from '../components/index/Blog'
import Portfolio from '../components/index/Portfolio'
import Footer from '../components/index/Footer'
import Header from '../components/index/Header'
import Helmet from 'react-helmet'


const IndexPage = () => (
  <Grid>
    <Helmet>
          <title>🤙 Daniel Garcia Front End Dev</title>
          <meta name="description" content="Daniel Garcia Front End Developer Personal Website" />
        </Helmet>
    <Header />
    <ParticlesHead />
    <Intro />
    <Blog />
    <Portfolio />
    <Footer />
  </Grid>
)

export default IndexPage

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 180px 600px 80px 400px 80px auto 80px 30px 10px;
  grid-template-areas:
    '... header ...'
    'particles intro ...'
    '... ... ...'
    '... blog ...'
    '... ... ...'
    '... portfolio ...'
    '... ... ...'
    '... footer ...'
    '... footer2 ...';
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  background-color: #fff;
  font-family: 'Catamaran', sans-serif;
  justify-content: center;
  align-items: center;
`
