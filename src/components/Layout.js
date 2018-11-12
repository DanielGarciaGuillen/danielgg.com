import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './index/Header'
import './all.sass'

const Layout = ({ children }) => (
  <Grid>
    <Helmet>
      <title>🤙 Daniel Garcia Front End Dev</title>
      <meta
        name="description"
        content="Daniel Garcia Front End Developer Personal Website"
      />
    </Helmet>
    <Header />
    {children}
  </Grid>
)

export default Layout

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 180px auto 80px 30px;
  grid-template-areas:
    '... header ...'
    '... blog ...'
    '... footer ...'
    '... footer2 ...';
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  background-color: #fff;
  font-family: 'Catamaran', sans-serif;
  justify-content: center;
  align-items: center;


  p {
    font-size: 20px;
    padding-top: 20px;
  }
  h1,h2,h3,h4 {
    font-size: 25px;
    font-weight: bold;
    padding-top: 20px;
  }

  a {
    text-decoration: none;
    color: #5bc0eb;
  }
  .tags {
    display: flex;
    flex-flow: row;
    margin-top: 50px;
    h4 {
      width: 200px;
    }


    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: 180px auto 80px 30px;
      grid-template-areas:
      'header'
      'blog'
      'footer'
      'footer2';
      img {
        max-width: 300px;
      }
    }


`
