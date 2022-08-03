import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#5271ff] text-[#ffbd59]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Van, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent work that improves
              the lives of those around me. I specialize in painting and decorating
              for clients ranging from hallways and small-bedrooms all the
              way to large houses. What would you do if you had
              a painting & decorating expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
