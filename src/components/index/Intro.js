import React from 'react'
import styled from 'styled-components'

const IntroDiv = styled.div`
  grid-area: intro;
  align-self: flex-start;
  font-size: 22px;
  padding-left: 180px;
  padding-top: 30px;

  @media (max-width: 900px) {
    padding-left: 0px;
    padding-top: 0px;
  }
`

const Copy = styled.div`
  padding-top: 120px;
  line-height: 2;
`

const IconMove = styled.div`
  justify-self: end;
  width: 20px;
  transform: rotate(-300deg);
  animation: bounce 1.5s infinite alternate;
  -webkit-animation: bounce 1.5s infinite alternate;

  @-webkit-keyframes bounce {
    100% {
      -webkit-transform: translateY(-5px);
    }
    50% {
      -webkit-transform: translateY(0);
    }
  }

  @keyframes bounce {
    100% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0);
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M4.34 15.66A7.97 7.97 0 0 0 9 17.94V10H5V8h4V5.83a3 3 0 1 1 2 0V8h4v2h-4v7.94a7.97 7.97 0 0 0 4.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 0 1-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            fill="#37ADD3"
          />
        </svg>
      </IconMove>
    </Copy>
  </IntroDiv>
)

export default Intro
