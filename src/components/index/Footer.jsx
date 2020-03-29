import React from 'react'
import styled from 'styled-components'
import Icon from '../../images/icons/favicon.png'

const FooterDiv = styled.div`
  grid-area: footer;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
`

const LineGradient = styled.div`
  background-color: pink;
  text-aling: center;
  width: 1000px;
  height: 10px;
  justify-self: center;
  border-radius: 4px;
  background: linear-gradient(-45deg, #feac5e, #c779d0, #4bc0c8);
  background-size: 400% 400%;
  -webkit-animation: Gradient 25s ease infinite;
  -moz-animation: Gradient 25s ease infinite;
  animation: Gradient 25s ease infinite;
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media (max-width: 800px) {
    width: 300px;
  }
`
const Footer2Div = styled.div`
  align-self: end;
  color: #aec7e2;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 15px;
  align-self: flex-end;
`
const StyledEmoji = styled.img`
  width: 20px;
  height: 20px;
`
const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterDiv>
      <LineGradient />
      <Footer2Div>
        <b>
          {year} - <StyledEmoji src={Icon} />: Daniel GG
        </b>
      </Footer2Div>
    </FooterDiv>
  )
}

export default Footer
