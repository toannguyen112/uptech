import React from 'react'

function ButtonJob() {
  return (
      <div className='bg-primary text-white py-[10px] px-[2rem] inline-flex items-center justify-center space-x-[8px] rounded-[8px] cursor-pointer hover:bg-secondary font-semibold'>
          <div>Gửi đơn ứng tuyển</div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16675 9.99999H15.8334M15.8334 9.99999L10.0001 4.16666M15.8334 9.99999L10.0001 15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
      </div>
  )
}

export default ButtonJob