import Image from 'next/image'
import React from 'react'

function TechItem({ item }: any) {
    return (
        <div className=' xl:py-[24px] h-[248px] max-xl:p-[1rem] xl:px-[2rem] overflow-hidden transition-all group-hover:bg-gradient items-center rounded-[12px] flex group-hover:items-start'>
            <div>
                <div className='space-y-[28px]'>
                    <div>
                        <Image src={item.image} alt={item.name} width={48} height={48} />
                    </div>
                    <div className='title-3 text-black group-hover:text-white space-y-[1rem]'>
                        <div> {item.name} </div>
                        <div className='hidden group-hover:block'> {item.description} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechItem