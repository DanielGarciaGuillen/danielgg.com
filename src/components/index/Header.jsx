import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const HeaderDiv = styled.div`
  grid-area: header;
  display: flex;
  place-content: space-between;
  @media (max-width: 900px) {
    place-content: space-around;
  }
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-top: -20px;
  font-family: 'Tajawal', sans-serif;
  @media (max-width: 900px) {
    font-size: 30px;
  }
`

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  place-content: space-around;
`
const LinkMenu = styled.a`
  cursor: pointer;
  padding-bottom: 30px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`

const LinkImg = styled.img`
  height: 36px;
  width: 36px;
  @media (max-width: 900px) {
    height: 30px;
    width: 30px;
  }
`

const linkStyles = {
  textDecoration: 'none',
  color: '#333',
  opacity: '0.9',
}

const Header = () => (
  <HeaderDiv>
    <Link to="/" style={linkStyles}>
      <Title>
        Daniel GG
        <Subtitle> Front End Developer </Subtitle>
      </Title>
    </Link>
    <Menu>
      <LinkMenu href="https://github.com/DanielGarciaGuillen">
        <LinkImg
          alt="github"
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
        />
      </LinkMenu>
      <LinkMenu href="https://twitter.com/dangguillen?lang=en">
        <LinkImg
          alt="twitter"
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"
        />
      </LinkMenu>
    </Menu>
  </HeaderDiv>
)

export default Header
