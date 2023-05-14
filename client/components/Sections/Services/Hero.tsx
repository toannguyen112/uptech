import React from 'react'

interface Props {
    title?: string,
    description?: string,
    bgImage?: string,
}

function Hero({
    title = "Website",
    description = "Xây dựng kênh truyền thông chính thức của doanh nghiệp trên nền tảng digital, nơi thể hiện năng lực, các giá trị, và định hướng phát triển bền vững của doanh nghiệp.",
    bgImage = "bg-banner-service" }: Props) {
    return (
        <section
            className={`${bgImage} h-[968px] bg-no-repeat bg-center bg-cover w-full`}>
            <div className="container py-[32px] md:py-[88px] pb-[60px] md:pb-[120px]">
                <div className='display-1 text-[#4FA6FC] opacity-[68] border-b border-[#4FA6FC]'>
                    Dịch vụ
                </div>
                <div className='text-white mt-[24px] md:mt-[56px]'>
                    <div className='grid grid-cols-12 max-md:gap-y-[12px] md:gap-x-[32px]'>
                        <div
                            dangerouslySetInnerHTML={{ __html: title }}
                            className='h1 lg:min-w-[300px] xl:min-w-[492px] col-span-full md:col-span-6'>
                        </div>
                        <div className='body-2 col-span-full md:col-span-6'>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero