import React from 'react'
import '../Cards/ServiceCard.css'


export default function ServiceCard({dat}) {
  return (
    <div className={dat.class}>
        <img className='my-2 p-2 rounded-3' src={dat.pic} alt="" />
        <h5>{dat.title}</h5>
        <p>{dat.desc}</p>
        <button className='px-3 py-2 text-secondary border-1 rounded-pill'>Read more</button>
    </div>
  )
}
