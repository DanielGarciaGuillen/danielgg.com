import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-top: -20px;
  font-family: 'Tajawal', sans-serif;
`
const Menu = styled.div`
display: flex;
flex-direction: column;

`
const LinkMenu = styled.a` 
  pointer: hand;
  padding-bottom: 30px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`

const HeaderDiv = styled.div`
  grid-area: header;  
  display: flex;
  align-content: space-between;
  justify-content: space-between;
`

const linkStyles ={
  textDecoration : "none",
  color: '#333',
  opacity: '0.9',
}

const Header = () => (
  <HeaderDiv>
    <Link to="/" style={linkStyles}>
      <Title>
Daniel Garcia
        <Subtitle> Front End Developer </Subtitle>
      </Title>
    </Link>
    <Menu>
      <LinkMenu href="https://github.com/DanielGarciaGuillen">
        <img
          height="36"
          width="36"
          alt="github"
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
        />
      </LinkMenu>
      <LinkMenu href="https://twitter.com/dangguillen?lang=en">
        <img
          height="36"
          width="36"
          alt="twitter"
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
        />
        {' '}
      </LinkMenu>
    </Menu>
  </HeaderDiv>
)

export default Header
