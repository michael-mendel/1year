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
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
    ,
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
    ,
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
    ,
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
    ,
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
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
