import React, { useState } from 'react';
import Layout from '../../../layout';
import SubPageHero from '../../../components/SubPageHero';
import Slider from 'react-slick';
// import './Gallery.css';

const Gallery = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Layout>
    <SubPageHero title={"Gallery"}/>
    <Slider
          {...settings}
          className="max-w-full my-20 overflow-hidden gallery"
          adaptiveHeight
        >
          {images.map((image,index) => {
            return (
              <div key={index} className="w-100 mx-6 rounded-md">
                <img
                  src={image}
                  alt={index}
                  className="rounded-lg"
                  onClick={() => openImage(image)}
                />
                
              </div>
            );
          })}
          
        </Slider>
        {selectedImage && (
        <div onClick={closeImage}
        className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-black bg-opacity-75">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-w-full  h-4/5 rounded-lg"
          />
        </div>
      )}
    {/* <div className="gallery-container">
      <h1 className="gallery-title">My Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="gallery-image cursor-pointer"
            onClick={() => openImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div onClick={closeImage}
        className="fixed top-20 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-w-full max-h-full rounded-lg"
          />
           <button
            onClick={closeImage}
            className="absolute top-10 right-44 p-1 bg-white rounded-full text-gray-800"
          >
            Close
          </button> 
        </div>
      )}
    </div> */}
  </Layout>
  );

};

export default Gallery;