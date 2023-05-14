import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';

function Loading() {
  return (
    <div className='h-full  w-full flex justify-center items-center'>
      <ProgressSpinner />
    </div>
  )
}

export default Loading
