import React from 'react'

// const prices = [
//     {
//         name: "Nhận diện thương hiệu",
//         description: "Uptech thiết kế website riêng biệt mang đậm sắc màu của thương hiệu bằng cách áp dụng bộ brand guideline đồng bộ, hiệu quả theo nguyên tắc thiết kế vàng."
//     },
//     {
//         name: "Trải nghiệm khách hàng",
//         description: "Thông qua thiết kế động cùng các lời kêu gọi hành động phù hợp, chúng tôi hướng dẫn người dùng khám phá website với sự hào hứng."
//     },
//     {
//         name: "Tối ưu chi phí",
//         description: "Chúng tôi phát triển website dựa trên nhu cầu của khách hàng cùng các giải pháp tốt nhất về nhân sự và công nghệ để tối ưu hóa chi phí cho khách hàng."
//     },
//     {
//         name: "Tối ưu SEO",
//         description: "Áp dụng kiến trúc website tối ưu, mã code hiện tại, và thiết kế tương tác, Uptech giúp các công cụ tìm kiếm thấu hiểu website của bạn."
//     },
// ];


function Prices({ prices }: any) {
    return (
        <div className="grid grid-cols-12 md:gap-x-[32px] max-md:gap-y-[32px] pt-[52px]" >
            <div className="col-span-full md:col-span-2">
                <div className='border-t border-b border-gray-300 ' >
                    <div className="text-gray-300 py-[1rem] text-[96px] leading-[130%]" >
                        04
                    </div>
                    <div className="text-gray-400 display-2" >
                        Giá trị
                    </div>
                </div>
            </div>
            <div className="col-span-full md:col-start-4 md:col-span-9">
                <div className='grid grid-cols-2 gap-x-[48px] gap-y-[52px]'>
                    {
                        prices && prices.length && prices.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="col-span-full md:col-span-1 group">
                                    <div className='group-hover:border-[#155EEF] border-gray-50 transition-all border-b-[5px] border-solid pb-[1rem]'>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5917 11.3327C10.866 13.9993 8.14551 16.6013 5.50125 19.2797C4.78255 20.0057 4.37066 20.2347 3.61467 19.3306C2.76715 18.3129 1.73996 17.4155 0.755141 16.508C0.202559 15.9992 0.0110199 15.7006 0.695815 15.0374C3.32143 12.493 5.85721 9.8502 8.42349 7.23456C8.61334 7.03949 8.88454 6.89531 8.90827 6.55606C8.59469 6.27617 8.2167 6.41187 7.876 6.40848C5.52159 6.39491 3.16718 6.38473 0.812773 6.40848C0.21951 6.40848 -0.0161011 6.28126 0.000849274 5.63668C0.0432252 4.00657 0.033055 2.37477 0.000849274 0.744659C-0.00593088 0.20864 0.126282 0 0.72124 0C6.91717 0.021486 13.112 0.021486 19.3056 0C19.9667 0 20.065 0.251047 20.0633 0.822688C20.0475 7.02309 20.0475 13.2224 20.0633 19.4205C20.0633 20.099 19.8481 20.2924 19.1938 20.2686C17.6682 20.2296 16.1427 20.2161 14.6307 20.2686C13.8798 20.2958 13.6442 20.099 13.6629 19.3137C13.7154 16.9949 13.6866 14.6727 13.6764 12.359C13.6798 12.018 13.7781 11.6516 13.5917 11.3327Z" fill="#155EEF" />
                                        </svg>
                                        <div className='text-gray-900 title-1 mt-[1rem] mb-[8px]'>{item.title} </div>
                                        <div className='body-2 text-gray-900'> {item.value} </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Prices