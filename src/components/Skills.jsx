import React from 'react';

import Painting from '../assets/painting.jpg';
import Decorating from '../assets/decorating.jpg';
import Plastering from '../assets/plastering.jpg';
import Lawnmowing from '../assets/lawnmowing.jpg';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#5271ff] text-[#ffbd59]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the work, I speciallised in.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={Painting} alt="Painting icon" />
                  <p className='my-4'>PAINTING</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={Decorating} alt="Decorating icon" />
                  <p className='my-4'>DECORATING</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={Plastering} alt="Plastering icon" />
                  <p className='my-4'>PLASTERING</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-40 mx-auto' src={Lawnmowing} alt="Lawnmowing icon" />
                  <p className='my-4'>LAWNMOWING</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
