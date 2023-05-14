import Link from 'next/link'
import React from 'react'

interface Props {
    title?: string,
    description?: string,
    titleButton?: string,
    bgImage?: string,
    url?: string,
}

function SectionNearFooter({
    title = "Bắt đầu hành trình số của doanh nghiệp bạn",
    description = "Uptech đồng hành cùng doanh nghiệp chuyển đổi số toàn diện.",
    url = "/contact",
    titleButton = "Hợp tác", bgImage = "bg-banner_footer_home" }: Props) {
    return (
        <section className={`${bgImage} h-[277px] bg-no-repeat bg-cover`}>
            <div className="container h-full flex items-center">
                <div className='space-y-[1rem]'>
                    <div>
                        <div className='h1'>{title} </div>
                        <div className='body-2'>{description}</div>
                    </div>
                    <Link href={url}>
                        <div className='bg-blue-light text-white py-[12px] px-[20px] inline-flex items-center justify-center space-x-[12px] rounded-[8px] cursor-pointer hover:bg-primary'>
                            <div> {titleButton} </div>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16675 6.99984H12.8334M12.8334 6.99984L7.00008 1.1665M12.8334 6.99984L7.00008 12.8332" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SectionNearFooter