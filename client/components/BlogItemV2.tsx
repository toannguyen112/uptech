import React from 'react'
import Link from 'next/link'

function BlogItemV2({ item }: any) {

    return (
        <div className='cursor-pointer group  bg-white rounded-[1rem]'>
            <div className='w-full min-h-[202px] rounded-[12px] overflow-hidden'>
                <img src="/images/blogs/blog.png" alt="blog"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className='p-[1rem]'>
                <div className='space-y-[12px] mt-[1rem] mb-[24px] '>
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
                    <a
                        href={`/blogs/${item.category_slug}/${item.slug}/${item.id}`}
                        className=' flex items-center space-x-[6px] justify-between'>
                        <div className='title-2 text-blue-fdx'>Xem bài viết</div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17.3821L17 7.38208M17 7.38208H7M17 7.38208V17.3821" stroke="#0647C9" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default BlogItemV2