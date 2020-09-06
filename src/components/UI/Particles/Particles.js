import React from 'react';
import Particles from 'react-particles-js'
import './Particles.css'

const Particle = (props) => (
    <Particles 
        className="Particles"
        params={{
            particles: {
              opacity: {
                value: 0.1,
                anim: {
                  enable: false,
                  speed: 0.55,
                  opacity_min: 0,
                  sync: false
                }
              },
              color: {
                value: "#000000"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                }
              },
              line_linked: {
                enable:false
              },
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 4000
                }
              },
              size: {
                value: 10,
                random: false,
                anim: {
                  enable: true,
                  speed: 15,
                  size_min: 0,
                  sync: false

                }
              },
              move: {
                enable: true,
                speed:0,
                direction: "none",


              }
            },
            interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
            }
          }}/>
);

export default Particle;