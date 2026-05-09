import React from 'react'
import { patients } from './constants/patients'

const Header = () => {
  return (
    <>
       <div>
        {patients.map((p) => (
            <div>
                <div className='flex gap-4'>
                  <h2>{p.name}</h2>
                  <p className='bg-gray-400'>{p.mrn}</p>  
                </div>
                
            </div>
        ))}
       </div>
    </>
  )
}

export default Header