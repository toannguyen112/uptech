import Link from 'next/link'
import React from 'react'

function CardJob({ item }: any) {
    return (

        <div className='bg-white p-[12px] md:p-[32px] col-span-full md:col-span-6 rounded-[8px]' >
            <div className='space-y-[4px] pb-[16px] border-b border-gray-300' >
                <div className='title-1 text-gray-900' >
                    {item.name}
                </div>
                <div className='text-gray-400 body-3'>
                    Hạn nộp: <span className='text-gray-700'>{item.expried_date}</span> <span className='mx-[8px]' >|</span> Địa điểm làm việc: <span className='text-gray-700'>{item.address_work}</span>
                </div>
            </div>
            <div className='body-3 text-gray-700 py-[1rem]'>
                {item.description}
            </div>
            <Link
                href={{
                    pathname: '/recruitments/[slug]/[id]',
                    query: {
                        slug: item.slug,
                        id: item.id,
                    },
                }}
            >
                <div className=" cursor-pointer flex items-center space-x-[8px] title-2 text-[#155EEF]">
                    <div>
                        Xem chi tiết
                    </div>
                    <div>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="white" />
                            <path d="M11 20L17 14L11 8" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default CardJob