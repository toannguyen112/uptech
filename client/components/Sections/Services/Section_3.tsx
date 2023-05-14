import React from 'react'

function Section_3({ section, image = "/images/about/human.png" }: any) {
    return (
        <section>
            <div className="container max-md:pt-[32px] md:py-[76px]">
                <div className='grid grid-cols-12 max-md:gap-y-[32px] md:gap-[2rem]'>
                    <div className='col-span-full md:col-span-6 flex items-center' >
                        <div className='xl:space-y-[103px] space-y-[32px]'>
                            <div className="space-y-[6px]" >
                                <div className='text-[#004EEB] font-semibold' > {section ? section.text_small : "Lý Tưởng Mà Uptech Theo Đuổi"} </div>
                                <div className='h1 text-gray-900'>
                                    {section ? section.header : "Những Giá Trị Đại Diện Cho Uptech"}
                                </div>
                            </div>
                            <div className='space-y-[32px]'>
                                {section && section.sections && section.sections.length ? section.sections.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='space-y-[30px]'>
                                            <div className='text-[28px] font-bold text-[#004EEB] border-b border-gray-300 leading-[130%]'>
                                                {item.title}
                                            </div>
                                            <div className='body-2 text-gray-900'>
                                                {item.value}
                                            </div>
                                        </div>
                                    )
                                }) : ""}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full md:col-span-6' >
                        <img src={image} className='w-full h-full object-fit' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_3