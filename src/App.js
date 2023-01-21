import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './App.css';
import Memory from "./Memory";
import React from "react";
import { config } from "react-spring";
import ImageContainer from "./ImageContainer";


const App = () => {
  const options = {
    background: {
      color: "#000000"
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#FFFFFF"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 2 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 15
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <div className="background">
        <Particles options={options} init={particlesInit} />    
      </div>
      <div className="body">
        <h1 className="title">Hello world</h1>
        <div className="memories">
            <Memory location={'50vw'} />
        </div>
      </div>
    </div>
  );
};

export default App
