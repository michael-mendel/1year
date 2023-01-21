import React, { useState } from "react";
import Modal from 'react-modal'
import uuidv4 from "uuid";
import ImageContainer from "./ImageContainer";



export default function Memory
(props) {
  const slides = [
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/801/?random" alt="1" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/802/?random" alt="2" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/600/803/?random" alt="3" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/500/?random" alt="4" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/804/?random" alt="5" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/500/800/?random" alt="6" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/800/600/?random" alt="7" />
      },
      {
        key: uuidv4(),
        content: <img src="https://picsum.photos/805/800/?random" alt="8" />
      }
    ].map((slide, index) => {
      return { ...slide, onClick: () => {props.state.goToSlide=index} };
    });

  const[modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <div className="memoryDiv">
      <button onClick = {() => setModalIsOpen(true)} className='memory' style={{left:props.location}}></button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal'>
        <div className='modalDiv'>
          {/* <div className='modalRow'>
            <button className='modalClose' onClick = {() => setModalIsOpen(false)} >X</button>
          </div> */}
            <ImageContainer/>
        </div>
      </Modal>
    </div>
  );
}
