import '../Cards/BlogCard.css'

export default function Blogcard({dat}) {


    
    return (
        <div className={dat.class}>
            <div className='my-2 d-flex'>
                <div className='p-2 rounded-pill custom-border  text-primary'>
                    {dat.catagory}
                </div>
                <p className='mx-3 my-auto text-secondary'>{dat.date}</p>
            </div>
            <div className='w-75'>
                <h4 className='fs-5 my-2' >{dat.title}</h4>

            </div>
            <div className='py-2 w-100 d-flex border-top '>
                <img className='mx-2 py-1' src={dat.pic} alt="" />
                <div className='mx-2'>
                    <p className='my-0'><strong>Admin</strong></p>
                    <p className='my-0 text-secondary'>Co Founder</p>
                </div>


            </div>
            <div className='picture'>
                <img src={dat.image} alt="" />

            </div>



        </div>
    )
}
