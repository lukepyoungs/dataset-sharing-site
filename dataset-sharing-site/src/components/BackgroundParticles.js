// src/components/BackgroundParticles.js
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundParticles = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          image: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
        },
        particles: {
          number: { value: 10, density: { enable: true, value_area: 600 } },
          color: { value: "#ffffff" },
          shape: {
            type: "square",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 }
          },
          opacity: { value: 0.25, random: true, anim: { enable: false } },
          size: { value: 29, random: true, anim: { enable: false } },
          move: { enable: true, speed: 0.5, direction: "top", straight: true, out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true,
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default BackgroundParticles;
