import Image from 'next/image'
import React from 'react'
import EventBus from '../event-bus'

function MultipleFile() {
  return (
    <React.Fragment>
      <div
        className="bg-gray-300"
        onClick={() => EventBus.$dispatch('message', true)}
      >
        <div className="bg-gray-300 p-[20px]">
          <Image src="/svg/icon-plus.svg" alt="" width={30} height={30} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MultipleFile
