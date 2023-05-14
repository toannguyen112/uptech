import Link from 'next/link'
import React from 'react'

function RelatedItem({ item }: any) {
    return (
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
            <div className='flex items-center py-[1rem] border-t border-b border-gay-200'>
                <div className='flex items-start'>
                    <div className='text-gray-400 leading-[160%] text-[1rem]'> 0.1 </div>
                    <div className='text-gray-900 title-3 ml-[10px] mr-[24px]'>
                        {item.name}
                    </div>
                </div>
                <div className="flex item-center justify-center" >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.500122" width="27" height="27" rx="13.5" fill="white" />
                        <path d="M11 20.0001L17 14.0001L11 8.00012" stroke="#0647C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.5" y="0.500122" width="27" height="27" rx="13.5" stroke="#B2CCFF" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default RelatedItem