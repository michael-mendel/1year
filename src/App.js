import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './App.css';
import Memory from "./Memory";
import React, { useState, useEffect } from "react";


const App = () => {

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


  const data = [
    {
      image: "https://www.shutterstock.com/image-photo/high-altitude-vertical-aerial-sunny-260nw-1282914517.jpg",
      caption: ""
    },
    {
      image: "https://www.shutterstock.com/image-photo/high-altitude-vertical-aerial-sunny-260nw-1282914517.jpg",
      caption: ""
    },
    {
      image: "https://www.shutterstock.com/image-photo/high-altitude-vertical-aerial-sunny-260nw-1282914517.jpg",
      caption: ""
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    
  ];

  return (
    <div className="App">
      <div className="background">
        <Particles options={options} init={particlesInit} />    
      </div>
      <div className="body">
        <h1 className="title">Hello world</h1>
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
              {/* <Memory location={'60vw'} data={data}/>
              <Memory location={'20vw'} data={data}/>
              <Memory location={'65vw'} data={data}/>
              <Memory location={'12vw'} data={data}/>
              <Memory location={'55vw'} data={data}/>
              <Memory location={'15vw'} data={data}/>
              <Memory location={'50vw'} data={data}/>
              <Memory location={'10vw'} data={data}/> */}
            </div>
        )}
      </div>
    </div>
  );
};

export default App
