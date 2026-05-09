import React from 'react'
import Patients from './components/sidebar/patients'
import Display from './components/display'

const page = () => {
  return (
    <>
    <div className='flex flex-row'>
      <Patients />
      <Display />
    </div>
      
    </>
  )
}

export default page