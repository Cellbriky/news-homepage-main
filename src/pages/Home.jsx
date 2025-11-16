import React from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
const Home = () => {
  const isMobile=useMediaQuery({maxWidth: 767})
  const isTablet=useMediaQuery({minWidth: 768, maxWidth:991})
  const isDesktop=useMediaQuery({minWidth:992})
  return (
    <div>
      <div className="container" class='flex flex-col p-4 md:p-6 lg:p-12'>
        <div className="sectionOne" class='flex flex-col   xl:flex-row xl:px-8 '>
          <div className="sectionOne" class='flex flex-col justify-start item-center lg: mr-4 xl:mr-8'>
            <div className='image' class='pb-4'>
              {isMobile && <img class='w-full' src='images\image-web-3-mobile.jpg'/>}
              {isTablet && <img class='w-full' src='images\image-web-3-mobile.jpg'/>}
              {isDesktop && <img class='w-full' src='images\image-web-3-desktop.jpg'/>}
            </div>
            <div className='flxName' class='lg:flex'>
              <h1 class='text-4xl text-[var(--Verydarkblue)] font-extrabold md: pt-6 lg:text-5xl xl:text-4xl  w-full lg:flex lg:items-center '>The Bright Future of Web 3.0?</h1>
              <div class='xl:ml-12 lg:w-full'>
                <p class='pt-5 text-[var(--Darkgrayishblue)] md:text-lg lg:text-base  xl:text-base'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fullfilling its promise?</p>
                <button class='my-4 md: my-5 lg:my-0  bg-red-500      cursor-pointer py-2 px-6 text-xs font-bold text-[var(--Verydarkblue)] tracking-widest bg-[var(--SoftRed)] md:text-sm lg:mt-5 hover:cursor-pointer hover:bg-[var(--Verydarkblue)] hover:text-[var(--Offwhite)]'>READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="sectionTw" class='bg-[var(--Verydarkblue)] p-4 mt-8 md:p-6  xl:mt-0 xl:w-full'>
            <h1 class='text-[var(--SoftOrange)] text-2xl font-bold mb-8 md:text-3xl'>New</h1>
            <h2 class='text-[var(--Offwhite)] text-xl font-bold pb-1 md:text-2xl lg:text-2xl xl:text-xl hover:text-[var(--SoftOrange)] cursor-pointer'>Hydrogen vs Electric Cars</h2>
            <p class='text-[var(--Grayishblue)] text-sm md:text-base lg:text-xl lg:pt-2'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div className='line'></div>
            <h2 class='text-[var(--Offwhite)] text-xl font-bold pb-1 md:text-2xl lg:text-2xl xl:text-xl hover:text-[var(--SoftOrange)] cursor-pointer'>The Downsides of AI Artistry</h2>
            <p class='text-[var(--Grayishblue)] text-sm md:text-base lg:text-xl lg:pt-2'>What are the possible adverse effects of on-demand AI image generator?</p>
            <div className='line'></div>
            <h2 class='text-[var(--Offwhite)] text-xl font-bold pb-1 md:text-2xl lg:text-2xl xl:text-xl hover:text-[var(--SoftOrange)] cursor-pointer'>Is VC Funding Drying Up?</h2>
            <p class='text-[var(--Grayishblue)] text-sm md:text-base lg:text-xl lg:pt-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
        <div className="sectionTwo" class='mt-12 xl:flex xl:gap-3 xl:px-8 xl:mt-18'>
          <div className='itemOne' class='flex xl:w-full'>
            <div className='Imag'>
              <img class='w-33  xl:w-33' src='images\image-retro-pcs.jpg'/>
            </div>
            <div className='textBlock' class='ml-5 lg:ml-8 xl:ml-4 xl:mr-8 lg:flex lg:justify-center lg:flex-col xl:justify-start '>
              <h1 class='pb-2 text-[var(--SoftRed)] text-2xl font-bold  lg:text-4xl xl:text-2xl'>01</h1>
              <p class='font-extrabold text-base text-[var(--Verydarkblue) pb-2 lg:text-2xl xl:text-base'>Reviving Retro PCs</p>
              <p class='text-sm text-[var(--Darkgrayishblue)] lg:text-xl xl:text-sm xl:break-words'>what happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className='itemOne' class='flex mt-8 xl:mt-0 xl:w-full'>
            <div className='Imag'>
              <img class='w-28 md:w-33 xl:w-28' src='images\image-top-laptops.jpg'/>
            </div>
            <div className='textBlock' class='ml-5 lg:ml-8 xl:ml-4 xl:mr-8 lg:flex lg:justify-center lg:flex-col xl:justify-start '>
              <h1 class='pb-2 text-[var(--SoftRed)] text-2xl font-bold  lg:text-4xl xl:text-2xl'>02</h1>
              <p class='font-extrabold text-base text-[var(--Verydarkblue) pb-2 lg:text-2xl xl:text-base'>Top 10 laptops of 2022</p>
              <p class='text-sm text-[var(--Darkgrayishblue)] lg:text-xl xl:text-sm'>Our best picks for various needs and budgets?</p>
            </div>
          </div>
          <div className='itemOne' class='flex mt-8 xl:mt-0 xl:w-full'>
            <div className='Imag'>
              <img class='w-30 md:w-33' src='images\image-gaming-growth.jpg'/>
            </div>
            <div className='textBlock' class='ml-5 lg:ml-8 lg:flex lg:justify-center lg:flex-col xl:justify-start '>
              <h1 class='pb-2 text-[var(--SoftRed)] text-2xl font-bold  lg:text-4xl xl:text-2xl' >03</h1>
              <p class='font-extrabold text-base text-[var(--Verydarkblue) pb-2 lg:text-2xl xl:text-base'>The Growth of Gaming</p>
              <p class='text-sm text-[var(--Darkgrayishblue)] lg:text-xl xl:text-sm'>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home