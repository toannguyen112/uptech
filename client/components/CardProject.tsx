import Link from 'next/link'
import React from 'react'

function CardProject({ item }: any) {
    return (
        <Link
            href={{
                pathname: '/projects/[slug]/[id]',
                query: {
                    slug: item.slug,
                    id: item.id,
                },
            }}
        >
            <a href={`/projects/${item.slug}/${item.id}`}>
                <div className='aspect-2/1 rounded-[1rem] overflow-hidden cursor-pointer'>
                    <img src={item.thumbnail ? item.thumbnail.path : "/images/projects/card_project.png"} alt={item.name}
                        width="100%"
                        height="100%"
                        className='object-cover rounded-[1rem] w-full h-full'
                    />
                </div>
                <div className='flex items-center space-x-[10px] mt-[20px] mb-[10px] whitespace-nowrap overflow-x-scroll'>
                    {item && item.services && item.services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className='text-gray-500   inline-block 
                    cursor-pointer hover:border-[#155EEF] py-[6px] px-[1rem] 
                    text-[14px]  hover:text-[#155EEF] border border-gray-300 rounded-[8px]' > {service.name}
                            </div>
                        )
                    })}
                </div>
                <div className='text-[18px] leading-[150%] font-semibold text-gray-900'>
                    {item.name}
                </div>
            </a>
        </Link>
    )
}

export default CardProject