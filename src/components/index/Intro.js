import React from 'react'
import styled from 'styled-components'

const IntroDiv = styled.div`
  grid-area: intro;
  align-self: flex-start;
  font-size: 22px;
  padding-left: 180px;
  padding-top: 30px;
`


const Copy = styled.div`
  padding-top: 120px;
  line-height: 2;

`

const IconMove = styled.div`
  justify-self: end;
  width: 20px;
  transform: rotate(-270deg);
  animation: bounce 1.5s infinite alternate;
  -webkit-animation: bounce 1.5s infinite alternate;

  @-webkit-keyframes bounce {
    100% {
      -webkit-transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-5px);
    }
  }

  @keyframes bounce {
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`

const Intro = () => (
  <IntroDiv>
    <Copy>
      <p>Imagine... </p>
      <p>You have less than 20 seconds to grab your users attention...</p>
      <p>Your website needs to make a good impression in your users.</p>
      <p>
        My passion is to create amazing websites that your users <br /> will
        remember and will help them achieve your goals.
      </p>

      <p>Do you want to make your users feel awesome? </p>
      <IconMove>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z"/></svg>
      </IconMove>
    </Copy>
  </IntroDiv>
)

export default Intro
