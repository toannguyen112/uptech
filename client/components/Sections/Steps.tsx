import React from 'react'
import Heading from '../Heading'

function Steps({ title = "Dịch vụ", steps = [], description = "Phát Triển Dịch Vụ Đa Dạng Đáp Ứng Thị Trường" }: any) {
    return (
        <div className="container">
            <Heading
                title={title}
                description={description} />
            <div className="grid grid-cols-12 max-md:gap-y-[32px] md:gap-x-[32px] md:gap-y-[64px] pt-[32px] md:pt-[56px]">
                {steps.map((step: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="col-span-full md:col-span-3" >
                            <div className="display-3 text-blue-fdx pb-[8px] border-b border-gray-300">
                                {index + 1}
                            </div>
                            <div className="space-y-[8px] text-gray-900 mt-[24px]">
                                <div className="title-1">
                                    {step.title}
                                </div>
                                <div className="body-2">
                                    {step.value}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Steps