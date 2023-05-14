import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeaderAdmin() {
  return (
    <header className="text-white">
      <div className=" px-4 flex justify-end">
        <div className="flex items-center space-x-[24px]">
          <Link href="/admin/setting" className=" cursor-pointer setting">
            <Image
              alt="setting"
              src="/svg/setting.svg"
              width="22px"
              height="22px"
            />
          </Link>
          <div className="cursor-pointer bell flex items-center">
            <Image alt="bell"
              src="/svg/bell.svg"
              width="22px"
              height="22px" />
          </div>
          <div className="avatar w-[40px] justify-center flex items-center h-[40px] rounded-full bg-black text-white text-center uppercase cursor-pointer">
            <span>TN</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin
