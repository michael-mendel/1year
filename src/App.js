import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './App.css';
import Memory from "./Memory";
import React, { useState, useEffect } from "react";

const App = () => {

  const data = [
    {
      image: 'images/aug5.png',
      caption: ""
    },
    
    
  ];

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

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
        distance: 170,
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
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 5
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
        <h1 className="title">Kari & Mike's Memories</h1>
        <h3 className="subtitle">Happy 1 Year Anniversary!</h3>
        <h3 className="subtitle">Click on the circles to explore our best moments together!</h3>
        {/* computer screen */}
        {matches && (
            <div className="memories">
              <Memory location={'10vw'} data={data}/>
              <Memory location={'70vw'} data={data}/>
              <Memory location={'30vw'} data={data}/>
              <Memory location={'80vw'} data={data}/>
              <Memory location={'50vw'} data={data}/>
              <Memory location={'10vw'} data={data}/>
              <Memory location={'80vw'} data={data}/>
              <Memory location={'40vw'} data={data}/>
              <Memory location={'10vw'} data={data}/>
            </div>
        )}
        {/* phone screen */}
        {!matches && (
            <div className="memories">
              <Memory location={'5vw'} data={data}/>
              <Memory location={'60vw'} data={data}/>
              <Memory location={'20vw'} data={data}/>
              <Memory location={'65vw'} data={data}/>
              <Memory location={'12vw'} data={data}/>
              <Memory location={'55vw'} data={data}/>
              <Memory location={'15vw'} data={data}/>
              <Memory location={'50vw'} data={data}/>
              <Memory location={'10vw'} data={data}/>
            </div>
        )}
      </div>
    </div>
  );
};

export default App
