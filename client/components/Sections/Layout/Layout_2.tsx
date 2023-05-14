import React from 'react'
import SocialMeta from '../../SocialMeta';
import Steps from '../Steps';
import Discover from '../Services/Discover';
import Section_3 from '../Services/Section_3';

function Layout_2({ data }: any) {

    const section_2 = data['section_2'];
    const section_3 = data['section_3'];

    return (
        <main className='layout_2'>
            <section className='pt-[96px] pb-[24px] bg-white container' >
                <div className='grid grid-cols-12 max-md:gap-y-[12px] md:gap-x-[32px]'>
                    <div className="space-y-[8px] col-span-full md:col-span-7">
                        <div className='text-[#004EEB] font-semibold'>
                            {data.section_1 ? data.section_1.text_small : ""}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: data.section_1 ? data.section_1.header : "" }}
                            className='h1 text-gray-900 '>
                        </div>
                    </div>
                    <div className='body-2 col-span-full md:col-span-5 text-gray-900'>
                        {data.section_1 ? data.section_1.sub_text : ""}
                    </div>
                </div>

            </section>
            <section className='py-[72px] bg-gray-50' >
                <Steps
                    title={section_2 ? section_2.text_small : ""}
                    description={section_2 ? section_2.header : ""}
                    steps={section_2 ? section_2.sections : []} />
            </section>
            <section className='bg-white' >
                <Section_3
                    section={section_3}
                    image="/images/services/image_198.png"
                />
            </section>
            <Discover bgImage="bg-banner_bottom_3" />
            <SocialMeta title="Dịch vụ" />
        </main>
    )
}

export default Layout_2