import React from 'react'
import ButtonViewMore from './ButtonViewMore'
import Link from 'next/link'

interface Props {
    direction?: string,
    item: any
}

function CardService({ item, direction = 'col' }: Props) {
    return (
        <div>
            {
                direction === 'col' ? (
                    <div className="rounded-[24px] overflow-hidden bg-white" >
                        <div className="aspect-w-2 aspect-h-1 max-h-[300px] rounded-[24px] overflow-hidden">
                            <img src={item.file ?? "/images/services/card.png"} alt="card" className="w-full max-h-[300px]" />
                        </div>
                        <div className=" p-[1rem] xl:p-[32px] ">
                            <div className="pb-[1rem] h2" >
                                {item.title}
                            </div>
                            <div className="body-2 py-[1rem] border-b border-t border-gray-200">
                                {item.value}
                            </div>
                            <Link href={'/contact'}>
                                <div className="mt-[24px]">
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
                                </div>
                            </Link>
                        </div>
                    </div>
                ) :
                    (
                        <div className="grid grid-cols-12 text-gray-900 mt-[46px] bg-white rounded-[24px]">
                            <div className="col-span-full md:col-span-7">
                                <div className="aspect-w-2 aspect-h-1  max-h-[364px] rounded-[24px] overflow-hidden">
                                    <img src={item.file} alt="card" className="w-full max-h-[364px]" />
                                </div>
                            </div>
                            <div className="col-span-full md:col-span-5 p-[1rem] xl:p-[48px] ">
                                <div className="pb-[1rem]  h2" >
                                    {item.title}
                                </div>
                                <div className="body-2 py-[1rem] border-b border-t border-gray-200">
                                    {item.value}
                                </div>
                                <Link href={'/contact'} >
                                    <div className='inline-flex items-center space-x-[8px] cursor-pointer mt-[24px]'>
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
                            </div>
                        </div>
                    )
            }

        </div>
    )
}

export default CardService