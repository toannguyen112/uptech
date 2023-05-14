import Link from 'next/link'
import React from 'react'

function ButtonViewMore() {
    return (
        <Link
            href={{
                pathname: '/blogs/[categories]/[slug]',
                query: {
                    categories: "webiste",
                    slug: "test"
                },
            }}
        >
            <div className='flex items-center space-x-[8px] cursor-pointer'>
                <div className='title-2 text-[#155EEF]'>Xem chi tiết</div>
                <div className="rotate-360 rounded-full  text-white flex item-center justify-center" >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="white" />
                        <path d="M11 20L17 14L11 8" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                    </svg>

                </div>
            </div>
        </Link>
    )
}

export default ButtonViewMore