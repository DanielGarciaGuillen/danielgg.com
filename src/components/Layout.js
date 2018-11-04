import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/index/Header'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <Grid>
 <Helmet>
          <title>🤙 Daniel Garcia Front End Dev</title>
          <meta name="description" content="Daniel Garcia Front End Developer Personal Website" />
        </Helmet>
  <Header/>
  {children}
</Grid>
)

export default TemplateWrapper



const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 3fr;
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
  img {
    max-width: 980px;
    max-height: 550px;
    text-align: center;
    border-radius: 5px;
  }

  a {
    img {
      max-width: 980px;
      max-height: 550px;
      padding-bottom: 30px;
      text-align: center;
    }
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
    
`
