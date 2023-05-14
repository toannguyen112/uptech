import Link from 'next/link'
import React from 'react'

function SolutionItem({ item }: any) {
    return (
        <div className='group transition-all'>
            <div className='bg-gradient rounded-[12px] overflow-hidden '>
                <div className='w-full lg:h-[490px] relative'>
                    <div className='group-hover:visible invisible absolute w-full h-full inset-x-0 inset-y-0 space-y-[1rem] title-2 p-[34px] bg-[#0031CB] opacity-80'>
                        {item.children.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    <Link
                                        href={{
                                            pathname: '/services/[slug]/[id]',
                                            query: {
                                                slug: "website",
                                                id: "1",
                                            },
                                        }}

                                        className='text-white opacity-70 hover:opacity-100 hover:underline' >
                                        {item.label}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <img src={item.thumbnail ? item.thumbnail : "/images/home/solution_1.png"} className='w-full h-full object-cover' />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: item.label }}
                    className='text-white text-[20px] font-bold py-[1rem] px-[24px]'>
                </div>
            </div>
        </div>
    )
}

export default SolutionItem