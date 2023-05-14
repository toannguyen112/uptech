import CardService from "../../CardService";
import Heading from "../../Heading";
import SocialMeta from "../../SocialMeta";
import Discover from "../Services/Discover";
import Prices from "../Services/Prices";
import Steps from "../Steps";

import React from 'react'

function Layout_1({ data }: any) {

    const section_1 = data['section_1'];
    const section_2 = data['section_2'];
    const section_3 = data['section_3'];

    return (
        <main className='layout_1'>
            <section className='bg-gray-50 py-[32px] md:py-[80px]'>
                <div className="container">
                    <Heading
                        title={section_1 ? section_1.text_small : ""}
                        description={section_1 ? section_1.header : ""}
                    />
                    <Prices prices={section_1 ? section_1.sections : []} />
                </div>
            </section>
            <section className='py-[72px] bg-gray-100' >
                <div className="container">
                    <Heading
                        title={section_2 ? section_2.text_small : "Dịch vụ"}
                        description={section_2 ? section_2.header : "Phát Triển Dịch Vụ Đa Dạng Đáp Ứng Thị Trường"} />

                    <div className="grid grid-cols-12 max-md:gap-y-[32px] md:gap-x-[32px] text-gray-900 mt-[12px] md:mt-[56px]">
                        {
                            section_2 && section_2.sections && section_2.sections.length && section_2.sections.map((item: any, index: number) => {
                                return (
                                    <>
                                        {index === 0 ?
                                            <div
                                                key={index}
                                                className="col-span-full  md:mb-[56px]">
                                                <CardService
                                                    item={item}
                                                    direction="row" />
                                            </div> : (
                                                <div
                                                    key={index}
                                                    className="col-span-full md:col-span-6 rounded-[24px] overflow-hidden bg-white">
                                                    <CardService
                                                        item={item}
                                                        direction="col"
                                                    />
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
            <section className='py-[72px] bg-white' >
                <Steps
                    title={section_3 ? section_3.text_small : ""}
                    description={section_3 ? section_3.header : ""}
                    steps={section_3 ? section_3.sections : []} />
            </section>
            <Discover />
            <SocialMeta title="Dịch vụ" />
        </main>
    )
}

export default Layout_1