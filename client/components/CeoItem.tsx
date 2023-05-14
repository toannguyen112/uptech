import Link from 'next/link'
import React from 'react'

function CeoItem({ item }: any) {
    return (
        <Link
            href={{
                pathname: '/ceos/[slug]/[id]',
                query: {
                    slug: item.slug,
                    id: item.id,
                },
            }}
        >
            <a className="col-span-full md:col-span-4 cursor-pointer">
                <img src={item.thumbnail ? item.thumbnail.path :
                    "/images/about/member.png"} className='w-full min-h-[373px] max-h-[373px] object-cover' />
                <div className='text-gray-900 font-bold mt-[24px] mb-[5px]'>
                    {item.name}
                </div>
                <div className='text-[#155EEF] font-semibold uppercase'>
                    {item.title}
                </div>
            </a>
        </Link>
    )
}

export default CeoItem