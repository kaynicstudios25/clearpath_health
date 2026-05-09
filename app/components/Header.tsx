import React from 'react'
import { patients } from './constants/patients'

const Header = () => {
  return (
    <>
       <div>
        {patients.map((p) => (
            <div>
                  <h2>{p.name}</h2>
                  <p className='bg-gray-800'>{p.mrn}</p>
                
            </div>
        ))}
       </div>
    </>
  )
}

export default Header