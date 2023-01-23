import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './App.css';
import Memory from "./Memory";
import React, { useState, useEffect } from "react";

const App = () => {

  const aug = [
    {
      image: 'images/aug9.JPG',
      caption: "A little trip to St.Augustine"
    }, 
    {
      image: 'images/aug1.JPG',
      caption: ""
    },
    {
      image: 'images/aug2.JPG',
      caption: ""
    },
    {
      image: 'images/aug5.JPG',
      caption: ""
    },
    {
      image: 'images/aug5.png',
      caption: ""
    },
    {
      image: 'images/aug6.PNG',
      caption: ""
    },
    {
      image: 'images/aug7.JPG',
      caption: ""
    },
    {
      image: 'images/aug8.png',
      caption: ""
    },
    {
      image: 'images/aug3.JPG',
      caption: ""
    }, 
  ];

  const cruise = [
    {
      image: 'images/cruise39.png',
      caption: "The cruise"
    },
    {
      image: 'images/cruise2.JPG',
      caption: ""
    },
    {
      image: 'images/cruise3.JPG',
      caption: ""
    },
    {
      image: 'images/cruise4.JPG',
      caption: ""
    },
    {
      image: 'images/cruise5.JPG',
      caption: ""
    },
    {
      image: 'images/cruise7.JPG',
      caption: ""
    },
    {
      image: 'images/cruise21.png',
      caption: ""
    },
    {
      image: 'images/cruise22.JPG',
      caption: ""
    },
    {
      image: 'images/cruise23.png',
      caption: ""
    },
    {
      image: 'images/cruise24.JPG',
      caption: ""
    },
    {
      image: 'images/cruise25.png',
      caption: ""
    },
    {
      image: 'images/cruise26.png',
      caption: ""
    },
    {
      image: 'images/cruise27.JPG',
      caption: ""
    },
    {
      image: 'images/cruise28.png',
      caption: ""
    },
    {
      image: 'images/cruise29.png',
      caption: ""
    },
    {
      image: 'images/cruise30.png',
      caption: ""
    },
    {
      image: 'images/cruise34.png',
      caption: ""
    },
    {
      image: 'images/cruise35.png',
      caption: ""
    },
    {
      image: 'images/cruise37.png',
      caption: ""
    },
    {
      image: 'images/cruise40.png',
      caption: ""
    },
    {
      image: 'images/cruise41.png',
      caption: ""
    },
    {
      image: 'images/cruise42.png',
      caption: ""
    },
    {
      image: 'images/cruise43.JPG',
      caption: ""
    },
    {
      image: 'images/cruise44.png',
      caption: ""
    },
    {
      image: 'images/cruise45.JPG',
      caption: ""
    },
    {
      image: 'images/cruise46.JPG',
      caption: ""
    },
    {
      image: 'images/cruise47.JPG',
      caption: ""
    },
    {
      image: 'images/cruise48.JPG',
      caption: ""
    },
    {
      image: 'images/cruise49.png',
      caption: ""
    },
    {
      image: 'images/cruise50.png',
      caption: ""
    },
  ]

  const game = [
    {
      image: 'images/game3.PNG',
      caption: "Gamedays together"
    },
    {
      image: 'images/game1.JPG',
      caption: ""
    },
    {
      image: 'images/game2.JPG',
      caption: ""
    },
    {
      image: 'images/game2.png',
      caption: ""
    },
    {
      image: 'images/game3.JPG',
      caption: ""
    },
    {
      image: 'images/game4.JPG',
      caption: ""
    },
    {
      image: 'images/game4.png',
      caption: ""
    },
    {
      image: 'images/game5.png',
      caption: ""
    },
    {
      image: 'images/game7.png',
      caption: ""
    },
  ];

  const gat = [
    {
      image: 'images/gat14.png',
      caption: "That time we almost got caught in a snow storm"
    },  
    {
      image: 'images/gat12.png',
      caption: ""
    },  
    {
      image: 'images/gat4.JPG',
      caption: ""
    },
    {
      image: 'images/gat5.png',
      caption: ""
    },
    {
      image: 'images/gat6.JPG',
      caption: ""
    },
    {
      image: 'images/gat7.JPG',
      caption: ""
    },
    {
      image: 'images/gat8.png',
      caption: ""
    },
    {
      image: 'images/gat9.JPG',
      caption: ""
    },  
    {
      image: 'images/gat10.png',
      caption: ""
    },    
    {
      image: 'images/gat13.png',
      caption: ""
    },  
    {
      image: 'images/gat15.JPG',
      caption: ""
    }, 
    {
      image: 'images/gat16.png',
      caption: ""
    },   
    {
      image: 'images/gat17.png',
      caption: ""
    }, 
    {
      image: 'images/gat18.png',
      caption: ""
    },  
    {
      image: 'images/gat19.png',
      caption: ""
    },   
    {
      image: 'images/gat20.png',
      caption: ""
    },    
    {
      image: 'images/gat21.png',
      caption: ""
    },    
  ];

  const grad = [
    {
      image: 'images/grad2.JPG',
      caption: "Mike's Graduation"
    },
    {
      image: 'images/grad1.png',
      caption: ""
    },
    {
      image: 'images/grad3.png',
      caption: ""
    },
    {
      image: 'images/grad4.png',
      caption: ""
    },
    {
      image: 'images/grad5.png',
      caption: ""
    },
  ];

  const hallo = [
    {
      image: 'images/hallo16.png',
      caption: "Our first Halloween"
    },

    {
      image: 'images/hallo2.JPG',
      caption: ""
    },
    {
      image: 'images/hallo3.png',
      caption: ""
    },
    {
      image: 'images/hallo4.JPG',
      caption: ""
    },
    {
      image: 'images/hallo5.JPG',
      caption: ""
    },
    {
      image: 'images/hallo6.JPG',
      caption: ""
    },
    {
      image: 'images/hallo7.JPG',
      caption: ""
    },
    {
      image: 'images/hallo8.JPG',
      caption: ""
    },
    {
      image: 'images/hallo9.JPG',
      caption: ""
    },
    {
      image: 'images/hallo10.JPG',
      caption: ""
    },
    {
      image: 'images/hallo11.JPG',
      caption: ""
    },
    {
      image: 'images/hallo12.JPG',
      caption: ""
    },
    {
      image: 'images/hallo13.JPG',
      caption: ""
    },
    {
      image: 'images/hallo14.JPG',
      caption: ""
    },
    {
      image: 'images/hallo15.JPG',
      caption: ""
    },
    {
      image: 'images/hallo17.JPG',
      caption: ""
    },
    {
      image: 'images/hallo17.PNG',
      caption: ""
    },
    {
      image: 'images/hallo20.JPG',
      caption: ""
    },
    {
      image: 'images/hallo21.JPG',
      caption: ""
    },
    {
      image: 'images/hallo22.JPG',
      caption: ""
    },
  ];

  const kbday = [
    {
      image: 'images/kbday1.JPEG',
      caption: "Kari's 21st BDay"
    },
    {
      image: 'images/kbday2.JPG',
      caption: ""
    },
    {
      image: 'images/kbday3.JPG',
      caption: ""
    },
    {
      image: 'images/kbday4.JPG',
      caption: ""
    },
    {
      image: 'images/kbday5.JPG',
      caption: ""
    },
  ];

  const mbday = [
    {
      image: 'images/mbday6.JPEG',
      caption: "Mike's 21st BDay"
    },
    {
      image: 'images/mbday.jpg',
      caption: ""
    },
    {
      image: 'images/mbday1.jpg',
      caption: ""
    },
    {
      image: 'images/mbday3.JPEG',
      caption: ""
    },
    {
      image: 'images/mbday4.JPEG',
      caption: ""
    }
  ];

  const out = [
    {
      image: 'images/out3.JPG',
      caption: "Some pictures going out"
    },
    {
      image: 'images/out1.JPG',
      caption: ""
    },
    {
      image: 'images/out2.JPG',
      caption: ""
    },
    {
      image: 'images/out4.JPG',
      caption: ""
    },
    {
      image: 'images/out6.JPG',
      caption: ""
    },
    {
      image: 'images/out8.png',
      caption: ""
    },
    {
      image: 'images/out9.JPEG',
      caption: ""
    },
    {
      image: 'images/out9.png',
      caption: ""
    }
  ];

  const panda = [
    {
      image: 'images/panda8.png',
      caption: "That time we were pandas"
    },
    {
      image: 'images/panda1.JPG',
      caption: ""
    },
    {
      image: 'images/panda2.JPG',
      caption: ""
    },
    {
      image: 'images/panda3.JPG',
      caption: ""
    },
    {
      image: 'images/panda5.png',
      caption: ""
    },
    {
      image: 'images/panda6.png',
      caption: ""
    },
    {
      image: 'images/panda7.png',
      caption: ""
    },
  ];

  const rl = [
    {
      image: 'images/rl1.png',
      caption: "Where it all began"
    },
    {
      image: 'images/rl2.png',
      caption: ""
    },
    {
      image: 'images/rl6.png',
      caption: ""
    },
  ];

  const seattle = [
    {
      image: 'images/seattle2.png',
      caption: "Fuck Seattle"
    },
    {
      image: 'images/seattle1.JPG',
      caption: "But we had some good times here"
    },
    {
      image: 'images/seattle4.png',
      caption: ""
    },
    {
      image: 'images/seattle4.JPG',
      caption: ""
    },
    {
      image: 'images/seattle5.png',
      caption: ""
    },
    {
      image: 'images/seattle5.JPG',
      caption: ""
    },
    {
      image: 'images/seattle6.JPG',
      caption: ""
    },
    {
      image: 'images/seattle6.png',
      caption: ""
    },
    {
      image: 'images/seattle7.JPG',
      caption: ""
    },
    {
      image: 'images/seattle7.png',
      caption: ""
    },
    {
      image: 'images/seattle8.png',
      caption: ""
    },
    {
      image: 'images/seattle8.jpg',
      caption: ""
    },
    {
      image: 'images/seattle9.png',
      caption: ""
    },
  ];

  const ween = [
    {
      image: 'images/ween23.png',
      caption: "Our second Halloween"
    },
    {
      image: 'images/ween1.JPG',
      caption: ""
    },
    {
      image: 'images/ween2.JPG',
      caption: ""
    },
    {
      image: 'images/ween3.JPG',
      caption: ""
    },
    {
      image: 'images/ween4.JPG',
      caption: ""
    },
    {
      image: 'images/ween5.JPG',
      caption: ""
    },
    {
      image: 'images/ween7.JPG',
      caption: ""
    },
    {
      image: 'images/ween8.JPG',
      caption: ""
    },
    {
      image: 'images/ween9.png',
      caption: ""
    },
    {
      image: 'images/ween10.png',
      caption: ""
    },
    {
      image: 'images/ween11.png',
      caption: ""
    },
    {
      image: 'images/ween19.png',
      caption: ""
    },
    {
      image: 'images/ween21.png',
      caption: ""
    },
    {
      image: 'images/ween22.png',
      caption: ""
    }
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
              <Memory location={'10vw'} data={rl}/>
              <Memory location={'70vw'} data={out}/>
              <Memory location={'30vw'} data={hallo}/>
              <Memory location={'80vw'} data={gat}/>
              <Memory location={'50vw'} data={panda}/>
              <Memory location={'10vw'} data={aug}/>
              <Memory location={'80vw'} data={kbday}/>
              <Memory location={'40vw'} data={cruise}/>
              <Memory location={'10vw'} data={mbday}/>
              <Memory location={'75vw'} data={seattle}/>
              <Memory location={'50vw'} data={game}/>
              <Memory location={'20vw'} data={ween}/>
              <Memory location={'60vw'} data={grad}/>
            </div>
        )}
        {/* phone screen */}
        {!matches && (
            <div className="memories">
              <Memory location={'5vw'} data={rl}/>
              <Memory location={'60vw'} data={out}/>
              <Memory location={'20vw'} data={hallo}/>
              <Memory location={'65vw'} data={gat}/>
              <Memory location={'12vw'} data={panda}/>
              <Memory location={'55vw'} data={aug}/>
              <Memory location={'15vw'} data={kbday}/>
              <Memory location={'50vw'} data={cruise}/>
              <Memory location={'10vw'} data={mbday}/>
              <Memory location={'52vw'} data={seattle}/>
              <Memory location={'15vw'} data={game}/>
              <Memory location={'65vw'} data={ween}/>
              <Memory location={'20vw'} data={grad}/>
            </div>
        )}
      </div>
    </div>
  );
};

export default App
