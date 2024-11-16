import CardAbout from '../Cards/CardAbout';
import HeroAbout from '../HeroAbout/HeroAbout';
import Navbar from '../Navbar/Navbar';
import './About.css';


export default function About() {
  let data1=[
    {
      name: 'Marisul Islam',
      specialty:'Web Designer',
      picture:'src/assets/V7-task/04.webp'
    },
    {
      name: 'Jessica Mardol',
      specialty:'Cyber Exprt',
      picture:'src/assets/V7-task/05.webp'
    },
    {
      name: 'Arnold Hemingway',
      specialty:'Web Expert',
      picture:'src/assets/V7-task/06.webp'
    },
    {
      name: 'Shikon Haque',
      specialty:'Data Analyst',
      picture:'src/assets/V7-task/07.webp'
    }
    
    
  ]
  return (
    <>
      <Navbar />
      <HeroAbout />
      <div className='container-about w-100  py-5    '>
        <div className='d-flex  '>
          <img src="src/assets/V7-task/asterisk.svg" alt="" />
          <h4 className='fs-1 my-auto mx-3'>Cyber Security</h4>
        </div>
        <div className='d-flex  deactive'>
          <img src="src/assets/V7-task/asterisk.svg" alt="" />
          <h4 className=' fs-1 my-auto mx-3'>IT Solution</h4>
        </div>
        <div className='d-flex  deactive'>
          <img src="src/assets/V7-task/asterisk.svg" alt="" />
          <h4 className='fs-1 my-auto mx-3'>Technology</h4>
        </div>
        <div className='d-flex deactive'>
          <img src="src/assets/V7-task/asterisk.svg" alt="" />
          <h4 className='fs-1 my-auto mx-3'>Data Security</h4>
        </div>

      </div>
      <section className='w-75 mx-auto my-5'>
        <div className='d-flex w-100 justify-content-between align-items-center'>

          <div>
            <p className='text-primary'>TEAM MEMBERS</p>
            <h3>Our Dedicated team Members</h3>

          </div>
          <button className='text-light bg-primary py-2 px-3 rounded-pill border-0 '>All Members</button>

        </div>
        <div className='d-flex flex-wrap my-5 w-100 justify-content-center align-items-center gap-3'>
          {data1.map(function(item){
            return(
              <CardAbout dat={item} />
            )
          }

          )}


        </div>
        <div className='logos'>
          <div className='label m-auto'><strong> 1k + Brands Trust Us</strong></div>
          <div>
            <img className='mx-3 deactive' src="src/assets/V7-task/photo2_2024-11-11_11-47-51.png" alt="" />
            <img className='mx-3 deactive'  src="src/assets/V7-task/photo2_2024-11-11_11-47-51.png" alt="" />
            <img className='mx-3 '  src="src/assets/V7-task/photo_2024-11-11_11-47-51.jpg" alt="" />
            <img className='mx-3 deactive'  src="src/assets/V7-task/photo2_2024-11-11_11-47-51.png" alt="" />
            <img className='mx-3 deactive'  src="src/assets/V7-task/photo2_2024-11-11_11-47-51.png" alt="" />

          </div>

        </div>

      </section>
    </>

  )
}
