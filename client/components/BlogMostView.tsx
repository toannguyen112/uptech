import React from 'react'

function BlogMostView({ item }: any) {
    return (
        <div>
            <div className='border-b border-gray-300 pb-[12px] body-1 mb-[12px] md:mb-[24px] text-gray-900'>
                Bài đọc nhiều nhất
            </div>
            <div className='space-y-[12px]'>
                <div className='text-gray-700 bg-gray-100 title-3 inline-block py-[4px] px-[12px]'>
                    {item.category_name}
                </div>
                <div className='display-2 text-[#1A1919]'>
                    {item.name || ""}
                </div>
                <div className='body-1 text-gray-900'>
                    {item.description || ""}
                </div>
            </div>
            <div className='inline-flex space-x-[6px] text-blue-fdx mt-[12px] md:mt-[24px]'>
                <div className='title-2' >Xem chi tiết</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#0647C9" />
                    <path d="M9.5 17L14.5 12L9.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default BlogMostView