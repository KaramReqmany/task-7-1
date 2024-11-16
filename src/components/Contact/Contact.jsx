import '../Contact/Contact.css'
import HeroAbout from '../HeroAbout/HeroAbout'
import Navbar from '../Navbar/Navbar'

export default function Contact() {
    return (
        <>
            <Navbar />
            <HeroAbout />
            <section className='p-5 w-100 d-flex justify-content-center align-items-center my-5' >
                <div className='details mx-3 '>
                    <div className='p-3 w-100 border-bottom border-light d-flex j align-items-center'>
                        <img src="" alt="" />
                        <div>
                            <p className='m-1'>Call Us 7/24</p>
                            <h6 className='m-0 fs-5' >+2998-332-455</h6>
                        </div>


                    </div>
                    <div className='p-3 w-100 border-bottom border-light d-flex  align-items-center'>
                        <img src="" alt="" />
                        <div>
                            <p className='m-1'>Make a Quote</p>
                            <h6 className='m-0 fs-5' >infotech@gmail.com</h6>
                        </div>


                    </div>
                    <div className='p-3 w-100 d-flex  align-items-center'>
                        <img src="" alt="" />
                        <div>
                            <p className='m-1'>Location</p>
                            <h6 className='m-0 fs-5' >4517 Washington ave</h6>
                        </div>


                    </div>
                    <img className='video position absolute bottom-0' src="src/assets/V7-task/video.webp" alt="" />

                </div>
                <div className='form mx-3'>
                    <div className='w-100'>
                        <h4>Ready to Get Started?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dignissimos, reprehenderit delectus soluta in aut!</p>

                    </div>
                    <div className='d-flex my-3 w-100 justify-content-between'>
                        <div >
                            <label className='d-block my-2' htmlFor="">Your name</label>
                            <input className='border rounded-2 py-2 px-4' type="text" />
                        </div>
                        <div className=''>
                            <label className='d-block my-2' htmlFor="">Email</label>
                            <input className='border rounded-2 py-2 px-4' type="email" />
                        </div>



                    </div>
                    <label className='d-block my-2' htmlFor="">Write Message</label>
                    <textarea className='w-50 border rounded-2' name="" id=""></textarea>
                    <button className='my-3 text-light py-2 px-3 bg-primary rounded-pill border-0'>Send Message</button>



                </div>

            </section>
            <section className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7421.7615180110315!2d35.79044283167192!3d35.517776681596594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1731544971404!5m2!1sen!2s" width="1920" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </>
    )
}
