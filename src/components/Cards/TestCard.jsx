import '../Cards/TestCard.css'
import { RiDoubleQuotesR } from "react-icons/ri";

export default function TestCard({dat}) {
    return (
        <div className={dat.class} >
            <img className='stars' src="src/assets/V7-task/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png" alt="" />
            <p>{dat.desc}</p>
            <div className='d-flex'>
                <img className='profile mx-2'  src={dat.pic} alt="" />
                <div className='w-50'>
                    <h5 className='fs-5'>{dat.name}</h5>
                    <p>{dat.spec}</p>
                </div>
                <div className='quote'>
                    <RiDoubleQuotesR color={'white'} size={50} />
                </div>
                <div className='test-shape'>
                    <img src="src/assets/V7-task/testimonialShape3_1.webp" alt="" />

                </div>

            </div>

        </div>
    )
}
