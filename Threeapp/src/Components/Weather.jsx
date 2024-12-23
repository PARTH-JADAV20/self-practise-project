import React, { useState } from 'react'

export default function Weather() {
  let [city,setCity]=useState('')
  let [wDeatils,setWdetails]=useState()
  let [loading,setLoading]=useState(false)

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=>res.json())
    .then((data)=>{
      if(data.cod=="404"){
        setWdetails(undefined)
      }else{
        setWdetails(data)
      }
      setLoading(false);
    })

    setCity('')
  }
  return (
    <div className='mt-[5%]'>
      <h2 className='text-center mb-[10%] text-[150%] font-bold'>Weather App</h2>

      <form onSubmit={handleSave} className='flex  gap-1'>
        <input type="text" placeholder='Enter city Name' className='basis-[80%] text-black p-1 rounded-[7px]' value={city} onChange={(e)=>setCity(e.target.value)}/> 
        <button className='basis-[20%] bg-slate-500 p-1 rounded-[7px]'>Submit</button>
      </form>
      

      <div className='bg-white shadow-lg mt-[20%] p-[15px] text-black rounded-[10px] relative w-[280px] h-[170px]'>
      <img src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif" 
      className={`absolute top-[-10px] left-[-3px] ${loading?'':'hidden'}`} />
        
        {wDeatils!==undefined
        ?
        <>
        <h3 className='font-bold text-[18px] text-black'>{wDeatils.name} <span className='bg-[yellow]'>{wDeatils.sys.country}</span></h3>
        <h2 className='font-bold text-[28px] text-black'>{wDeatils.main.temp}</h2>
        <img src={`https://api.openweathermap.org/img/w/${wDeatils.weather[0].icon}.png`} alt="" />
        <p>{wDeatils.weather[0].description}</p>
        </>
        :
        "No Data"
      }
        
      </div>
    </div>
  )
}
