import React from 'react'

interface Props {
    title?: string,
    description?: string,
    titleButton?: string,
    bgImage?: string,
    url?: string,
}

function Discover({
    title = "Khám phá",
    description = "Trải nghiệm sản phẩm số của Uptech",
    url = "/contact",
    bgImage = 'bg-banner_service_footer',
    titleButton = "Bắt đầu",
}: Props) {
    return (
        <section className={`${bgImage} h-[450px] bg-no-repeat bg-cover text-gray-900 bg-center`}>
            <div className="container h-full flex items-center">
                <div className='space-y-[24px]'>
                    <div className='space-y-[8px]'>
                        <div className='title-3 text-[#004EEB]'>
                            {title}
                        </div>
                        <div className='h1 text-gray-900'>
                            {description}
                        </div>
                    </div>
                    <div className=' bg-blue-light text-white py-[12px] px-[20px] inline-flex items-center justify-betweenjus  space-x-[8px] rounded-[8px] cursor-pointer hover:bg-primary'>
                        <div className="min-w-[88px]" > {titleButton} </div>
                        <div>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16675 6.99984H12.8334M12.8334 6.99984L7.00008 1.1665M12.8334 6.99984L7.00008 12.8332" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover