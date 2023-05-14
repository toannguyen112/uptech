import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

interface Props {
    item: {
        name: string
        slug: string
    }
}

function Tag({ item }: Props) {

    const router = useRouter();

    const category = router.query.categories;

    return (
        <Link
            href={{
                pathname: '/blogs/[categories]',
                query: { categories: item.slug },
            }}
        >
            <div className={category === item.slug ?
                'tag active' :
                'tag'} > {item.name} </div>
        </Link>
    )
}

export default Tag