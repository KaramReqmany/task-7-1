import '../Cards/pricingcard.css'
import { FaCloudBolt } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

export default function PricingCard() {
  return (
    <div className='m-3 pricing-card rounded-4  p-3'>
        <div className='d-flex w-100 bg-primary rounded-4 text-light  justify-content-between align-items-center p-3  '>
            <div>
                <p className='my-0' >Regular Plans</p>
                <p className='my-0' ><span className=' fs-3'>$49</span>/Month</p>
            </div>
            <div >
                <FaCloudBolt size={50}/>
                
            </div>

        </div>
        <ul className='text-start my-4 w-100'>
            <li><FaCheck color={'blue'}/> 100 GB SSD Storage</li>
            <li><FaCheck color={'blue'}/> Weekly Backups</li>
            <li><FaCheck color={'blue'}/> Unlimited Free SSL</li>
            <li><FaCheck color={'blue'}/> 24/7 System Monitoring </li>
            <li><FaCheck color={'blue'}/> Free Domain($9.99 Value)</li>
            <li><HiMiniXMark color={'red'} /> Frame 16432</li>
            <li><HiMiniXMark color={'red'} /> 20+ Payment Methods</li>
        </ul>
        <button className='w-100'>GET STARTED NOW</button>


    </div>
  )
}
