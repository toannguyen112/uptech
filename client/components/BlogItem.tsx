import Link from 'next/link'
import React from 'react'

function BlogItem({ item }: any) {

    return (
        <div className='cursor-pointer group'>
            <div className='w-full xl:min-h-[200px] rounded-[12px] overflow-hidden'>
                <img src={item.thumbnail ? item.thumbnail.path : " /images/blogs/blog.png"} alt="blog"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className='space-y-[12px] mt-[1rem] mb-[24px]'>
                <div className='text-gray-900 font-semibold'>
                    {item.name}
                </div>
                <div className='body-3 text-gray-900'>
                    {item.description}
                </div>
            </div>
            <Link
                href={{
                    pathname: '/blogs/[categories]/[slug]/[id]',
                    query: {
                        categories: item.category_slug,
                        slug: item.slug,
                        id: item.id
                    },
                }}
            >
                <a href={`/blogs/${item.category_slug}/${item.slug}/${item.id}`}>
                    <div className=' flex items-center space-x-[6px] '>
                        <div className='title-2 text-blue-fdx'>Xem chi tiết</div>
                        <div className="-rotate-90 rounded-full bg-blue-fdx text-white flex item-center justify-center p-[6px]" >
                            <svg width="10" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07275 1.5L6.07275 6.5L11.0728 1.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default BlogItem