import { useRouter } from 'next/router';
import React from 'react'
interface Props {
  title?: string,
  description?: string,
  bgBanner?: string,
  textColor?: string,
}

function Banner({
  title = "",
  description = "",
  bgBanner = "bg-banner-project",
  textColor = "text-white"
}
  : Props) {

  const router = useRouter();

  const locale = router.locale;
  const headers: any = { 'Accept-Language': locale };

  return (
    <section
      className={`${textColor} ${bgBanner} h-[290px]  bg-no-repeat bg-cover`}>
      <div className="container h-full">
        <div className='h-full flex items-center'>
          <div>
            <h1 className='display-1 inline-block'>{title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className='body-1'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
