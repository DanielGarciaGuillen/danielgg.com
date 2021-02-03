import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './index/Header'
import Footer from './index/Footer'
import favicon from '../images/icons/favicon.png'

const Layout = ({ children }) => (
  <Grid>
    <Helmet>
      <title>Daniel Garcia. Front End Stuff</title>
      <meta
        name="description"
        content="Daniel Garcia Front End Developer Personal Website"
      />
      <link rel="canonical" href="http://danielgg.com" />
      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </Grid>
)

export default Layout

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 180px auto 80px;
  grid-template-areas:
    '... header ...'
    '... blog ...'
    '... footer ...';
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  background-color: #fff;
  font-family: 'Catamaran', sans-serif;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  p {
    font-size: 22px;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
    padding-top: 10px;
  }
  a {
    text-decoration: none;
    color: #5bc0eb;
  }
`
