import React, { useState, useEffect } from "react";
import Modal from 'react-modal'
import { Carousel } from 'react-carousel-minimal';
import { AiFillCloseCircle } from 'react-icons/ai';



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

  const [modalIsOpen, setModalIsOpen] = useState(false)

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
              <AiFillCloseCircle color='red' size='30pt' onClick={() => { setModalIsOpen(false) } } />
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
              thumbnailWidth="50px"
              style={{
                textAlign: "center",
                maxWidth: "600px",
                maxHeight: "500px",
                margin: "40px auto",
                width: "100%",
                height:"100%",
                alignItems:"center",
                justifyContent:"center",
                backgroundColor: 'red',
                display:"flex",
                flexDirection:"column",
                margin: "10px",
                padding: "10px"
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
          className='modalSmall'
          style={{
            overlay: {
              backgroundColor: 'none'
            },
            border: 'none'
          }}
        >
          <div className='modalDivSmall'>
            <div className="modalRowSmall">
              <AiFillCloseCircle color="red" size={"25pt"} onClick={() => { setModalIsOpen(false) }} />
            </div>
            <div className="carouselDivSmall">
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
                  width: "100%",
                  height: "100",
                  margin: "10px",
                  padding: "10px",
                  backgroundColor: 'black',
                  // display:'flex',
                  // justifyContent:'center',
                  // alignItems:'center',
                  // flexDirection:'column'
                }}
              />
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
