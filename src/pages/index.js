import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Intro from '../components/index/Intro'
import ParticlesHead from '../components/index/ParticlesHead'
import Blog from '../components/index/Blog'
import Portfolio from '../components/index/Portfolio'
import BlogList from '../components/index/BlogList'
import Footer from '../components/index/Footer'
import Header from '../components/index/Header'
import favicon from '../images/icons/favicon.png'

const IndexPage = () => (
  <Grid>
    <Helmet>
      <title>Daniel Garcia Front End Dev</title>
      <meta name="description" content="Daniel Garcia. Front End Dev." />
      <link rel="canonical" href="http://danielgg.com" />
      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Helmet>
    <Header />
    <ParticlesHead />
    <Intro />
    <BlogList />
    <Blog />
    <Portfolio />
    <Footer />
  </Grid>
)

export default IndexPage

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 180px 600px 100px 800px 80px 400px 80px auto 80px 30px 10px;
  grid-template-areas:
    '... header ...'
    'particles intro ...'
    '... ... ...'
    '... blogList ...'
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

  @media (max-width: 900px) {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 180px 100px 600px auto 300px auto 100px;
    grid-template-areas:
      '... header ...'
      '... particles ...'
      '... intro ...'
      '... blogList ...'
      '... blog ...'
      '... portfolio ...'
      '... footer ...';
  }
`
