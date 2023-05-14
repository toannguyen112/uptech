import React from 'react'
import Link from 'next/link'

function ViewItem({ item }: any) {

    return (
        <div className='group'>
            <div className='aspect-w-2 aspect-h-1 w-full rounded-[12px] overflow-hidden  xl:min-h-[256px]'>
                <img src={item && item.thumbnail ? item.thumbnail.path : "/images/blogs/blog.png"} alt="blog"
                    width="100%"
                    height="100%"
                    className="object-cover"
                />
            </div>
            <div className='space-y-[12px] mt-[1rem] mb-[12px] md:mb-[24px]'>
                <div className='text-[#313D51] bg-[#E6E9EF] title-3 inline-block py-[4px] px-[12px]'>
                    {item.category_name}
                </div>
                <div className='text-gray-900 font-semibold'>
                    {item.name}
                </div>
            </div>
            <Link
                href={{
                    pathname: '/blogs/[categories]/[slug]/[id]',
                    query: {
                        categories: item.category_slug,
                        slug: item.slug,
                        id: item.id,
                    },
                }}
            >
                <a href={`/blogs/${item.category_slug}/${item.slug}/${item.id}`} className='flex items-center space-x-[8px] cursor-pointer'>
                    <div className='title-2 text-[#155EEF]'>Xem chi tiết</div>
                    <div className="rotate-360 rounded-full  text-white flex item-center justify-center" >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="white" />
                            <path d="M11 20L17 14L11 8" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                        </svg>

                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ViewItem