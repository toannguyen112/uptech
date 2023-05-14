import React from 'react'
import TechItem from './TechItem'
import { tech } from '../seeds/home'

function Techs() {
    return (
        <section>
            <div className="container py-[2rem] md:py-[72px]">
                <div className='text-center space-y-[12px]'>
                    <div className='text-primary font-semibold'>Công nghệ</div>
                    <div className='h1 text-gray-900'>Tự Tin Làm Chủ Công nghệ</div>
                </div>
                <div className='grid grid-cols-4  mt-[48px] max-md:gap-[12px]'>
                    {tech.map((item: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className='col-span-full md:col-span-2 lg:col-span-1 group'>
                                <TechItem item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Techs