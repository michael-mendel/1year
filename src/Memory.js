import React, { useState, useEffect } from "react";
import Modal from 'react-modal'
import { Carousel } from 'react-carousel-minimal';




export default function Memory
  (props) {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  const [modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <div className="memoryDiv">
      <button onClick={() => setModalIsOpen(true)} className='memory' style={{ left: props.location }}></button>
      {/* computer screen */}
      {matches && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='modal'
          style={{
            overlay: {
              backgroundColor: 'none'
            },
            border: 'none'
          }}
        >
          <div className='modalDiv'>
            <div className="modalRow">
              <button className='modalClose' onClick={() => { setModalIsOpen(false) }}>X</button>
            </div>
            <Carousel
              data={props.data}
              time={2000}
              width="850px"
              height="400px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={false}
              dots={false}
              pauseIconColor="black"
              pauseIconSize="40px"
              slideBackgroundColor="none"
              slideImageFit="contain"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "600px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </Modal>
      )}
      {/* phone screen */}
      {!matches && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className='modal'
          style={{
            overlay: {
              backgroundColor: 'none'
            },
            border: 'none'
          }}
        >
          <div className='modalDivSmall'>
            <div className="modalRowSmall">
              <button className='modalCloseSmall' onClick={() => { setModalIsOpen(false) }}>X</button>
            </div>
            <div className= "carouselDivSmall">
              <Carousel
                data={props.data}
                time={2000}
                width="100%"
                height="100"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={false}
                pauseIconColor="black"
                pauseIconSize="40px"
                slideBackgroundColor="none"
                slideImageFit="contain"
                thumbnails={false}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width:"100%",
                  height:"100",                   
                  margin: "10px",
                  padding: "10px",
                  // backgroundColor: 'red',
                  // display:'flex',
                  // justifyContent:'center',
                  // alignItems:'center'
                }}
              />
              </div>
            </div>
        </Modal>
      )}

    </div>
  );
}
