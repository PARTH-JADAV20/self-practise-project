import React, { useState } from 'react'
import { LC, NC, SC, UC } from './Passchar'

export default function Password() {
  let [uppercase, setUppercase]=useState(false)
  let [lowercase, setLowercase]=useState(false)
  let [number, setNumber]=useState(false)
  let [symbols, setSymbols]=useState(false)
  let [passlen, setPasslen]=useState(8)
  let [fpass, setFpass]=useState('')

  let createPassword = ()=>{
    let finalpass=''
    let charset=''
    if (uppercase || lowercase || number || symbols){
      if(uppercase) charset+= UC
      if(lowercase) charset+= LC
      if(number) charset+= NC
      if(symbols) charset+= SC
      for(let i=0;i<passlen;i++){
        finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }

      setFpass(finalpass)
    }else{
      alert("D")
    }
  }

  let copypass =()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <div className='mt-[5%]'>
      <h2 className='text-center mb-[5%] text-[120%] font-bold'>Password Generator</h2>

      <div className='flex  gap-1'>
        <input type="text" readOnly value={fpass} className='basis-[80%] text-black p-1 rounded-[7px]'/> 
        <button className='basis-[20%] bg-slate-500 p-1 rounded-[7px]' onClick={copypass}>Copy</button>
      </div>

      <div className='mt-[5%] flex justify-between'>
        <label className='font-bold'>Password Length</label>
        <input type="number" max={20} min={8} value={passlen} onChange={(e)=>setPasslen(e.target.value)} className='w-[50px] text-black text-center' />
      </div>

      <div className='mt-[5%]  flex justify-between'>
        <label className='font-bold'>Include Uppercase Letters</label>
        <input type="checkbox" className='w-[50px]' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>

      <div className='mt-[5%]  flex justify-between'>
        <label className='font-bold'>Include Lowercase Letters</label>
        <input type="checkbox" className='w-[50px]' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div>

      <div className='mt-[5%]  flex justify-between'>
        <label className='font-bold'>Include Numbers</label>
        <input type="checkbox" className='w-[50px]' checked={number} onChange={()=>setNumber(!number)} />
      </div>

      <div className='mt-[5%]  flex justify-between'>
        <label className='font-bold'>Include Symbols</label>
        <input type="checkbox" className='w-[50px]' checked={symbols} onChange={()=>setSymbols(!symbols)} />
      </div>

      <div className='flex justify-center mt-[5%]'>
      <button className='bg-slate-600 p-4 rounded-lg ' onClick={createPassword}> Genrate Password</button>
      </div>
    </div>
  )
}
