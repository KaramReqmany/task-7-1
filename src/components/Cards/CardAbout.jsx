import '../Cards/CardAbout.css'

export default function CardAbout({dat}) {
  return (
    <div className='card-about rounded-4 border-0 position-relative  '>
        <img className='position-absolute top-0 ' src={dat.picture} alt="" />
        <div className='square text-light'></div>
        <div className='text-center position w-100 '>
            <h4 className='text-light '>{dat.name}</h4>
            <p className=' my-0'>{dat.specialty}</p>
        </div>
        



    </div>
  )
}
