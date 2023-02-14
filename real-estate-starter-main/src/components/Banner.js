import React from 'react';

//import image
import Image from '../assets/img/house-banner.png';

//import components
import Search from '../components/Search';
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
          <span style={{color: "seagreen "}}>Buy</span> Your Dream Villa With Us.
        </h1>
        <p className='max-w-[480px] mb-8'>
        Dream Villa provides you fully furnished and spacious villas at your nearby desired locations. 
        Make the villa your next and permanent home.<br /> Get the best deals here and fulfill your dream of living in your own villa
        with <span style={{color: "seagreen"}}><b>DREAM VILLA</b></span>
        </p>
      </div>
      {/*image*/}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={"https://www.luxuryresidences.in/central-park-sky-villas-sector-48-gurgaon/images/center-park-sky-villas-mobile-banner.webp"} style={{borderRadius: '85px 5px 5px 95px'}} alt='' />
      </div>
     </div> 
      <Search />
    </section>
  );
};

export default Banner;
