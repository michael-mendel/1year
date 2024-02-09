import React, { useCallback, useEffect, useState } from "react";
// import Particles from "react-particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import './App.css';
import Memory from "./Memory";
import Preloader from './Preloader';

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
      caption: "Chipotle and drinks on the beach"
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
      caption: "This ones my favorite"
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
      caption: "Piña colodas all day"
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
      caption: "Ooo Ooo Ahh Ahh"
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
      caption: "Ribbit Ribbit"
    },
    {
      image: 'images/cruise43.JPG',
      caption: "Safest Ride of our lives with the IceCream Man"
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
      caption: "I almost didnt graduate"
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
      caption: "To Be Continued..."
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
      image: 'images/kbday5.JPG',
      caption: "I surprised you for your 21st"
    },
    {
      image: 'images/food1.JPG',
      caption: "First time at Houstons"
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
  ];

  const mbday = [
    {
      image: 'images/mbday6.JPEG',
      caption: "I turned 21"
    },
    {
      image: 'images/kbday1.JPEG',
      caption:""
    },
    {
      image: 'images/mbday.jpg',
      caption: "And tali too but im just grouping these pics with my bday"
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
      caption: "RIP apple watch #1"
    }
  ];

  const out = [
    {
      image: 'images/out3.JPG',
      caption: "Me and you drunkie"
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
      caption: "Mehul's blurry picture"
    },
    {
      image: 'images/out9.JPEG',
      caption: ""
    },
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
      image: 'images/rl6.png',
      caption: ""
    },
    {
      image: 'images/rl2.png',
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
      caption: "Rip apple watch #2"
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
      caption: "Mike Box"
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
      caption: "When we won a free drink"
    },
    {
      image: 'images/ween7.JPG',
      caption: ""
    },
    {
      image: 'images/ween8.JPG',
      caption: "My Buzz"
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

  const y2_boat = [
    {
      image: 'images2/boat1.png',
      caption: ""
    },
    // {
    //   image: 'images2/boat2.png',
    //   caption: ""
    // },
    {
      image: 'images2/boat3.png',
      caption: ""
    },
    {
      image: 'images2/boat4.jpeg',
      caption: ""
    },
    {
      image: 'images2/boat5.jpeg',
      caption: ""
    },
    {
      image: 'images2/boat6.jpeg',
      caption: ""
    }
  ];

  const y2_club = [
    {
      image: 'images2/club1.png',
      caption: ""
    },
    {
      image: 'images2/club2.png',
      caption: ""
    },
    {
      image: 'images2/club3.png',
      caption: ""
    },
    {
      image: 'images2/club4.png',
      caption: ""
    },
    {
      image: 'images2/club6.png',
      caption: ""
    },
    {
      image: 'images2/club6.JPG',
      caption: ""
    },
    {
      image: 'images2/club.GIF',
      caption: ""
    },
    {
      image: 'images2/club2.GIF',
      caption: ""
    },
    {
      image: 'images2/club3.GIF',
      caption: ""
    },
    {
      image: 'images2/club4.GIF',
      caption: ""
    }
  ];

  const y2_paris = [
    {
      image: 'images2/paris1.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris2.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris3.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris4.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris5.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris6.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris7.jpeg',
      caption: ""
    },
    {
      image: 'images2/paris8.jpeg',
      caption: ""
    }
  ];

  const y2_ita = [
    {
      image: 'images2/ita1.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita2.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita3.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita4.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita5.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita6.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita7.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita8.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita9.jpeg',
      caption: ""
    },
    {
      image: 'images2/ita10.jpeg',
      caption: ""
    }
  ];

  const y2_italy = [
    {
      image: 'images2/italy1.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy2.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy3.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy4.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy5.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy6.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy7.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy8.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy9.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy10.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy11.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy12.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy13.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy14.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy15.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy16.jpeg',
      caption: ""
    },
    {
      image: 'images2/italy16.GIF',
      caption: ""
    }
  ];

  const y2_pisa = [
    {
      image: 'images2/pisa1.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa2.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa3.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa4.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa5.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa6.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa7.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa8.png',
      caption: ""
    },
    {
      image: 'images2/pisa9.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa10.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa11.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa12.jpeg',
      caption: ""
    },
    {
      image: 'images2/pisa13.jpeg',
      caption: ""
    }
  ];

  const y2_flor = [
    {
      image: 'images2/flor1.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor2.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor3.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor4.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor5.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor6.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor7.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor8.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor9.jpeg',
      caption: ""
    },
    {
      image: 'images2/flor10.jpeg',
      caption: ""
    }
  ];

  const y2_kgrad = [
    {
      image: 'images2/grad1.jpeg',
      caption: ""
    },
    {
      image: 'images2/grad2.jpeg',
      caption: ""
    },
    {
      image: 'images2/grad.GIF',
      caption: ""
    },
    {
      image: 'images2/grad3.jpeg',
      caption: ""
    },
    {
      image: 'images2/grad4.jpeg',
      caption: ""
    },
    {
      image: 'images2/grad5.jpeg',
      caption: ""
    }
  ];

  const y2_wed = [
    {
      image: 'images2/wed1.jpeg',
      caption: ""
    },
    {
      image: 'images2/wed2.jpeg',
      caption: ""
    },
    {
      image: 'images2/wed3.jpeg',
      caption: ""
    }
  ];

  const y2_shab = [
    {
      image: 'images2/shab1.jpeg',
      caption: ""
    },
    {
      image: 'images2/shab2.jpeg',
      caption: ""
    },
    {
      image: 'images2/shab3.jpeg',
      caption: ""
    },
    {
      image: 'images2/shab.GIF',
      caption: ""
    }
  ];

  const y2_paco = [
    {
      image: 'images2/bday.GIF',
      caption: ""
    },
    {
      image: 'images2/paco.jpeg',
      caption: ""
    },
    {
      image: 'images2/baxter.jpeg',
      caption: ""
    }
  ];

  const y2_halo = [
    {
      image: 'images2/halo1.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo2.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo3.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo4.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo5.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo6.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo7.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo8.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo9.jpeg',
      caption: ""
    },
    {
      image: 'images2/halo10.jpeg',
      caption: ""
    },
  ];

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const options = {
    background: {
      color: "#000000"
    },
    particles: {
      number: {
        value: 120,
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
        enable: false,
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

  const imagesToPreload = [
    ...aug.map(item => item.image),
    ...cruise.map(item => item.image),
    ...game.map(item => item.image),
    ...gat.map(item => item.image),
    ...grad.map(item => item.image),
    ...hallo.map(item => item.image),
    ...kbday.map(item => item.image),
    ...mbday.map(item => item.image),
    ...out.map(item => item.image),
    ...panda.map(item => item.image),
    ...rl.map(item => item.image),
    ...seattle.map(item => item.image),
    ...ween.map(item => item.image),
    ...y2_boat.map(item => item.image),
    ...y2_club.map(item => item.image),
    ...y2_paris.map(item => item.image),
    ...y2_ita.map(item => item.image),
    ...y2_italy.map(item => item.image),
    ...y2_pisa.map(item => item.image),
    ...y2_flor.map(item => item.image),
    ...y2_kgrad.map(item => item.image),
    ...y2_wed.map(item => item.image),
    ...y2_shab.map(item => item.image),
    ...y2_paco.map(item => item.image),
    ...y2_halo.map(item => item.image),
  ];  

  return (
    <div className="App">
      <Preloader images={imagesToPreload} />
      <div className="background">
        {/* <Particles options={options} init={particlesInit} /> */}
      </div>
      <div className="body">
        <h1 className="title">Kari & Mike's Memories</h1>
        <h3 className="subtitle">Happy 2 Year Anniversary!</h3>
        <h3 className="subtitle">Click on the circles to explore our best moments together!</h3>
        {/* computer screen */}
        {matches && (
          <div className="memories">
            {/* year 1 */}
            <h3 className="subtitle">Chapter 1</h3>
            <Memory location={'10vw'} data={rl} />
            <Memory location={'70vw'} data={out} />
            <Memory location={'30vw'} data={hallo} />
            <Memory location={'80vw'} data={gat} />
            <Memory location={'50vw'} data={panda} />
            <Memory location={'10vw'} data={aug} />
            <Memory location={'80vw'} data={kbday} />
            <Memory location={'40vw'} data={cruise} />
            <Memory location={'10vw'} data={mbday} />
            <Memory location={'75vw'} data={seattle} />
            <Memory location={'50vw'} data={game} />
            <Memory location={'20vw'} data={ween} />
            <Memory location={'60vw'} data={grad} />

            {/* year 2 */}
            <h3 className="subtitle">Chapter 2</h3>
            <Memory location={'10vw'} data={y2_boat} />
            <Memory location={'70vw'} data={y2_club} />
            <Memory location={'30vw'} data={y2_shab} />
            <Memory location={'80vw'} data={y2_paris} />
            <Memory location={'50vw'} data={y2_ita} />
            <Memory location={'10vw'} data={y2_italy} />
            <Memory location={'80vw'} data={y2_pisa} />
            <Memory location={'40vw'} data={y2_flor} />
            <Memory location={'10vw'} data={y2_paco} />
            <Memory location={'75vw'} data={y2_wed} />
            <Memory location={'50vw'} data={y2_kgrad} />
            <Memory location={'20vw'} data={y2_halo} />
          </div>
        )}
        {/* phone screen */}
        {!matches && (
          <div className="memories">
            {/* year 1 */}
            <h3 className="subtitle">Chapter 1</h3>
            <Memory location={'5vw'} data={rl} />
            <Memory location={'60vw'} data={out} />
            <Memory location={'20vw'} data={hallo} />
            <Memory location={'65vw'} data={gat} />
            <Memory location={'12vw'} data={panda} />
            <Memory location={'55vw'} data={aug} />
            <Memory location={'15vw'} data={kbday} />
            <Memory location={'50vw'} data={cruise} />
            <Memory location={'10vw'} data={mbday} />
            <Memory location={'52vw'} data={seattle} />
            <Memory location={'15vw'} data={game} />
            <Memory location={'65vw'} data={ween} />
            <Memory location={'20vw'} data={grad} />

            {/* year 2 */}
            <h3 className="subtitle">Chapter 2</h3>
            <Memory location={'5vw'} data={y2_boat} />
            <Memory location={'60vw'} data={y2_club} />
            <Memory location={'20vw'} data={y2_shab} />
            <Memory location={'65vw'} data={y2_paris} />
            <Memory location={'12vw'} data={y2_ita} />
            <Memory location={'55vw'} data={y2_italy} />
            <Memory location={'15vw'} data={y2_pisa} />
            <Memory location={'50vw'} data={y2_flor} />
            <Memory location={'52vw'} data={y2_paco} />
            <Memory location={'15vw'} data={y2_wed} />
            <Memory location={'65vw'} data={y2_kgrad} />
            <Memory location={'20vw'} data={y2_halo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App
