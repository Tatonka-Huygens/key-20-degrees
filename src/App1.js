import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import image1 from './Key-20---Carousel-pic-1.jpg';
import image2 from './Key-20---Carousel-pic-2.jpg';
import image3 from './Key-20---Carousel-pic-3.jpg';

function App() {
  const images = [image1, image2, image3];

  return (
    <div className="App">
      <header className="App-header">
        <Carousel autoPlay interval={1000}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`carousel-${index}`} />
            </div>
          ))}
        </Carousel>
        <h2>Creating Awareness</h2>
        <a
          className="App-link"
          href="https://www.key20degrees.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <h2>www.key20degrees.com</h2>
        </a>
      </header>
    </div>
  );
}

export default App;
