import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Props {
  item: any
}

function CardBlog({ item }: Props) {
  return (
    <React.Fragment>
      <div className="cursor-pointer">
        <div className="card-blog hover">
          <div className="rounded-[10px] overflow-hidden h-[236px]">
            <Image
              alt=""
              src={item.thumbnail}
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
              className=" hover:scale-125 transition-all"
            />
          </div>
          <div className="mt-[18px]">
            <div className="h4 font-medium "> {item.name} </div>
            <div className="body text-[#7E7777] mt-[12px] mb-[30px]">
              {item.description}{' '}
            </div>
            <Link href={`/blog/${item.id}`}>
              <div className="text-[18px] text-primary font-medium cursor-pointer">
                See more
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardBlog
