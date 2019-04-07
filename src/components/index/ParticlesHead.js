import React, { Component } from 'react'

import Particles from 'react-particles-js'
import styled from 'styled-components'
import './particles.css'

const Parti = styled.div`
  grid-area: particles;
  justify-self: end;
  align-self: center;
  padding-left: 50px;

  @media (max-width: 1000px) {
    grid-area: particles;
    justify-self: center;
    padding-left: 0;
  }
`

class ParticlesHead extends Component {
  render() {
    return (
      <Parti>
        <Particles
          params={{
            particles: {
              number: {
                value: 155,
                density: { enable: true, value_area: 900 },
              },
              color: { value: '#3a4750' },
              move: {
                enable: true,
                speed: 2.5,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: '#3A4750',
                opacity: 0.8,
                width: 1,
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 5,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {               
                onclick: { enable: true, mode: 'bubble' },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: { opacity: 0.7, color: '#3CA9D1' },
                },
                bubble: {
                  distance: 1000,
                  size: 2,
                  duration: 2,
                  opacity: 6,
                  speed: 10,
                  line_linked: { color: '#3A4750' },
                },
              },
            },
          }}
          className="canvita"
          style={{
            /*   background: "black", */
            width: '100%',
            heigth: '100%',
          }}
        />
      </Parti>
    )
  }
}

export default ParticlesHead
