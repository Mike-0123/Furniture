import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image'; // Import the Fade effect

// Import your images
import { slide1, slide2, slide3 } from '../Object/assets';

const imageSlides = [slide1, slide2, slide3];

export default function Sliders() {
  return (
    <div className="slide-container relative text-card2">
      <Fade
        arrows={true} // Add arrows for navigation
        dots={true} // Add dots for pagination
        autoplay={true} // Enable autoplay
        pauseOnHover={true} // Pause on hover
        duration={5000} // Duration of each slide
        transitionDuration={500} // Transition duration between slides
      >
        {imageSlides.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              height: '400px',
              width: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="flex items-center justify-center relative"
          >
            <div className="text-textColor p-4 md:p-6 lg:p-8 relative z-10">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-medium uppercase mb-2 shadow-md">
                Furniture that <br /> tells a story
              </h1>
              <p className="text-sm md:text-base lg:text-lg mb-4 shadow-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lobortis urna at vestibulum.
              </p>
              <button className="border border-white rounded-lg px-4 py-2 text-sm md:text-base lg:text-lg font-medium hover:bg-white hover:text-black transition shadow-md">
                Explore
              </button>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
