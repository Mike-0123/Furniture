import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image'; // Only import Fade effect (optional)

// Import your images directly (avoid relative paths)
import { slide1 } from '../Object/assets';
import { slide2 } from '../Object/assets';
import { slide3 } from '../Object/assets';
// Alternative approach using a single import statement (optional)
// import slide1Image from '../Object/assets/slide1.jpg';
// import slide2Image from '../Object/assets/slide2.jpg';
// import slide3Image from '../Object/assets/slide3.jpg';
// const imageSlides = [slide1Image, slide2Image, slide3Image];

const imageSlides = [
  slide1,
  slide2,
  slide3,
];

const divStyle = {
  display: 'flex',
  height: '400px',
};

export default function Sliders() {
  return (
    <>
        
    <div className="slide-container object-cover">
      <Fade // Use the Fade effect here (optional)
        arrows={true} // Add arrows for navigation
        dots={true} // Add dots for pagination
      
      >
        {imageSlides.map((image, index) => (
          <div key={index} style={{ backgroundImage: `url(${image})`,height:'400px',width:`100%`,backgroundSize:'cover',backgroundPosition:'center',transform:`scaleX(-1)`}} 
        >
           <div className='w-48 gap-2 flex flex-col ml-36 text-[13px] pt-24 lg:w-96 lg:relative lg:left-[600px] lg:pt-20 lg:gap-5' style={{transform:`scaleX(-1)`}}>
            <div><h1 className='uppercase text-textColor lg:text-4xl font-medium'>Furniture that <br />tells a story</h1></div>
            <div><p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer euismod lobortis urna at vestibulum. </p></div>
            <div><button className='border-solid border-textColor border-[1px] rounded-lg w-24 items-center font-medium h-8 text-textColor' >Expore</button>
            </div>
           </div>
          </div>
        ))}
      </Fade>
    </div>
    </>

  );
}