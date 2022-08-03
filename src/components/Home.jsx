import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#5271ff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Van The Man
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffbd59]'>
          I'm a Painter & Decorator Specialist.
        </h2>
        <p className='text-[#ffbd59] py-4 max-w-[700px]'>
          I’m a creative artist specializing in paiting and decorating (and occasionally
          designing) exceptional decoration work. Currently, I’m focused on
          painting and decorating houses and comercial buildings.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
