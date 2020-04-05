import React from 'react'
import styled from 'styled-components'

const Copy = styled.div`
  grid-area: intro;
  line-height: 2;
  font-size: 22px;
  align-self: center;
  justify-self: center;
  @media (max-width: 900px) {
    font-size: 20px;
    width: 80%;
  }
`

const Intro = () => (
  <Copy>
    <p>Imagine... </p>
    <p>You have less than 20 seconds to grab your users attention...</p>
    <p>Your website needs to make a good impression in your users.</p>
    <p>
      My passion is to create amazing websites that your users
      <br />
      will remember and will help them achieve your goals.
    </p>

    <p>Do you want to make your users feel awesome? </p>
  </Copy>
)

export default Intro
