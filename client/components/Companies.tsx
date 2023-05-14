import Image from 'next/image'
import React from 'react'
import { logos } from '../seeds/home'

function Companies() {
    return (
        <section>
            <div className="container md:pt-[72px] md:pb-[32px] max-md:py-[32px]">
                <div className="space-y-[12px]">
                    <div className='text-center text-blue-fdx font-semibold'>
                        Khách hàng
                    </div>
                    <div className='text-center h1 text-gray-900'>
                        Đồng Hành Cùng Doanh Nghiệp
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-5 mt-[2rem] gap-y-[12px] gap-x-[32px] '>
                    {logos.map((logo: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="col-span-1 ">
                                <div>
                                    <div className='flex items-center justify-center relative py-[22px] border-t border-b border-gray-200'>
                                        <div className='absolute right-[-1rem] h-[64px] bg-gray-200 w-[1px] top-1/2 -translate-y-1/2'></div>
                                        <Image src={logo.image} alt={logo.name}
                                            width={137}
                                            height={60}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Companies