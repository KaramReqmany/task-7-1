import React from 'react'
import './Hero.css'


export default function Hero() {
  return (
    <>
      <section className='hero d-flex flex-wrap-reverse gap-5 d-flex align-items-center justify-content-evenly  ' >
        <div className='side-1 mx-5   text-light'>
          <div className='custom-width border border-1 border-light rounded-pill  px-3 py-2  my-3 '>Everything you Need To Create a Website</div>
          <h1 className='my-4'>Business Innovation With IT Services Expertise</h1>
          <div className='d-flex flex-wrap gap-3 my-4 '>
            <ul className='p-0 m-0 gap-5'>
              <li className='d-block me-3 my-3'>Deployment and Support</li>
              <li className='d-block'>Discovery and Analysis</li>
            </ul>
            <ul className='p-0 m-0 gap-5'>
              <li className='d-block me-3 my-3'>flexibility and Adaptability</li>
              <li className='d-block'>Competitive Advantage</li>
            </ul>

          </div>
          <button className='border-0 rounded-pill orange px-3 py-2 text-light my-2'>GET STARTED</button>
          <div>
            
          </div>

        </div>

        <div className='side-2 mx-5 '>
          <img src="src/assets/V7-task/heroThumb1_1.webp" alt="" />


        </div>


      </section>
      <div className='circle-shape'>
        <img src="src/assets/V7-task/heroShape1_3.webp" alt="" />
      </div>
      <div className=' brands  border-bottom p-4 d-flex justify-content-center align-items-center flex-wrap gap-5'>
        <img src="src/assets/V7-task/brandLogo1_1.svg" alt="" />
        <img src="src/assets/V7-task/brandLogo1_2.svg" alt="" />
        <img src="src/assets/V7-task/brandLogo1_3.svg" alt="" />
        <img src="src/assets/V7-task/brandLogo1_4.svg" alt="" />
        <img src="src/assets/V7-task/brandLogo1_5.svg" alt="" />

      </div>




    </>
  )
}
