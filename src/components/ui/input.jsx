import React from 'react'

export default function Input({type="",value, label, name, onChange, className="", placeholder}) {
  return (
    <div>

        <div className={"space-y-2 flex flex-col"} >
            <label className='font-bold text-medium'   htmlFor={name}>{label}</label>
            <input  value={value} placeholder={placeholder} className={`${className}`} type={type} name={name} onChange={onChange}/>
        </div>
      
    </div>
  )
}
