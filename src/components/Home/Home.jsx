import React from 'react'
import "../Home/Home.css"
import Hero from '../Hero'
import ServiceCard from '../Cards/ServiceCard'
import Navbar from '../Navbar/Navbar'
import PricingCard from '../Cards/PricingCard'
import TestCard from '../Cards/TestCard'
import Blogcard from '../Cards/Blogcard'
import FooterComp from '../FooterComp/FooterComp'

export default function Home() {
  let data2 = [
    {
      pic: 'src/assets/V7-task/serviceIcon1_1.svg',
      title: 'Woo Commerce',
      desc: 'Collaboratively Formulate principle capotal. progressively evolve user revolutionary hosting srvices',
      class:'deactive rounded-4 service-card p-4 '

    },
    {
      pic: 'src/assets/V7-task/serviceIcon1_2.svg',
      title: 'CRM Solutions',
      desc: 'Collaboratively Formulate principle capotal. progressively evolve user revolutionary hosting srvices',
      class:'deactive rounded-4 service-card p-4 '

    },
    {
      pic: 'src/assets/V7-task/serviceIcon1_3.svg',
      title: 'Web Design',
      desc: 'Collaboratively Formulate principle capotal. progressively evolve user revolutionary hosting srvices',
      class:'active rounded-4 service-card p-4 '

    },
    {
      pic: 'src/assets/V7-task/serviceIcon1_4.svg',
      title: 'data Guard Sentinel',
      desc: 'Collaboratively Formulate principle capotal. progressively evolve user revolutionary hosting srvices',
      class:'deactive rounded-4 service-card p-4 '

    }
  ]
  let data3 = [
    {
      pic: 'src/assets/V7-task/testiThumb3_1.webp',
      name: 'Kristin Watson',
      spc: 'Web Designer',
      desc: ' "Extech has completely transformed our process. the user-friendly interface powerful features maintaining our Website"',
      class:'deactive test-card m-2 rounded-4 text-light '
    },
    {
      pic: 'src/assets/V7-task/testiThumb3_2.webp',
      name: 'theresa Webb',
      spc: 'Tech enthusiast',
      desc: '"Ive been using Extech for several months now. the user-friendly interface powerful features maintaining our Website"',
      class:'active test-card m-2 rounded-4 text-light '
    },
    {
      pic: 'src/assets/V7-task/testiThumb3_3.webp',
      name: 'Ronald Richards',
      spc: 'Web Enterpenuor',
      desc: '"Extech has completely transformed our process. the user-friendly interface powerful features maintaining our Website"',
      class:'deactive test-card m-2 rounded-4 text-light '
    }
  ]
  let data4 = [
    {
      title: 'best And fastest data Server Ever',
      pic: 'src/assets/V7-task/blogProfile1_1.webp',
      date: 'March 14,2024',
      catagory: 'uncatagorized',
      image: 'src/assets/V7-task/blogThumb1_1.webp',
      class:'deactive position-relative mx-4 blog-card shadow p-3 rounded-3 bg-light '


    },
    {
      title: 'Life Wont One Beast Air Above All',
      pic: 'src/assets/V7-task/blogProfile1_2.webp',
      date: 'March 29,2024',
      catagory: 'Technology',
      image: 'src/assets/V7-task/blogThumb1_2.webp',
      class:'active position-relative mx-4 blog-card shadow p-3 rounded-3 bg-light '

    },
    {
      title: 'attentive Was Born in 2015 Help Sales Teams',
      pic: 'src/assets/V7-task/blogProfile1_3.webp',
      date: 'March 24,2024',
      catagory: 'Shared Hosting',
      image: 'src/assets/V7-task/blogThumb1_3.webp',
      class:'deactive position-relative mx-4 blog-card shadow p-3 rounded-3 bg-light '

    }

  ]
  return (

    <>
      <Navbar />
      <Hero />
      <section className='w-75 m-auto services'>

        <div className='my-5'>
          <p className='text-primary'>our services</p>
          <h3>Elevating Business With IT Ingenuity</h3>
        </div>
        <div className='d-flex  justify-content-center flex-wrap align-items-center gap-3'>
          {
            data2.map(function (item) {
              return (
                <ServiceCard dat={item} />

              )
            }
            )
          }

        </div>

      </section>
      <section className='pricing w-75 m-auto position-relative my-5  '>
        <p className='text-primary text-center'>our pricing</p>
        <div className='w-25 mx-auto d-flex '>
          <div className=' monthly-yearly  rounded-pill p-1 d-flex   '>
            <div className='text-light rounded-pill p-2 bg-primary'>
              Monthly
            </div>
            <div className='mx-2 my-auto text-body-secondary'>
              Yearly
            </div>

          </div>
          <p className='text-primary my-auto mx-4'>Save 25%</p>

        </div>
        <div className='d-flex flex-wrap justify-content-center '>
          <div className="deactive">
            <PricingCard />
          </div>
          <PricingCard />
          <div className="deactive">
            <PricingCard />
          </div>

        </div>
        <div className='diamond'>
          <img src="src/assets/V7-task/pricingShape1_2.webp" alt="" />

        </div>
        <div className='hand'>
          <img src="src/assets/V7-task/pricingShape1_1.webp" alt="" />
        </div>

      </section>
      <section className='testimonials position-relative w-100 my-5 '>
        <p className='text-primary text-center mx-auto '>Testimonials</p>
        <h3 className='text-center mx-auto my-4'>Our latest Client feedback</h3>
        <div className='d-flex justify-content-center align-items-center flex-wrap m-auto'>
          {
            data3.map(function (item) {
              return(
                <TestCard dat={item} />
              )
            }
            )
          }


        </div>
        <div className='scroll rounded-pill my-3 mx-auto ps-5 '>
          <div className='bg-primary rounded-pill h-100  ms-5 ' ></div>
        </div>
        <div className='p-5  contact-us position-absolute rounded-4 d-flex flex-wrap align-items-center  justify-content-between p-5 text-light'>
          <img className='' src="src/assets/V7-task/ctaThumb1_1.webp" alt="" />
          <div className='  w-50'>
            <p>Contact Us</p>
            <h3>24/7 Expert Hosting Support Our Customers Love</h3>

          </div>
          <button className=' rounded-pill bg-light text-dark py-2 px-3 border-0  '> TALK TO A SPECIALIST </button>
        </div>


      </section>
      <section className='blog  mx-auto my-5 '>
        <p className='text-primary fs-6'>BLOG & NEWS</p>
        <h3>Featured News And Insights</h3>
        <div className='blogcards text-center  d-flex flex-wrap mx-auto gap-3 justify-content- '>


          {
            data4.map(function (item) {
              return(
                <Blogcard dat={item} />
              )
              
            }
            )
          }




        </div>



      </section>
    </>
  )
}
