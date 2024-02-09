import React, { useEffect } from 'react';

const Preloader = ({ images }) => {
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return null; // Preloader doesn't render anything
};

export default Preloader;
