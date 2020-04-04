import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
  grid-area: footer;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
`

const LineGradient = styled.div`
  background-color: pink;
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
  @media (max-width: 900px) {
    width: 300px;
  }
`
const Footer2Div = styled.div`
  align-self: end;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 15px;
  align-self: flex-end;
  font-weight: 900;
  font-family: 'Tajawal', sans-serif;
  color: rgb(51, 51, 51);
  opacity: 0.9;
`

const Footer = () => {
  return (
    <FooterDiv>
      <LineGradient />
      <Footer2Div>Daniel GG</Footer2Div>
    </FooterDiv>
  )
}

export default Footer
