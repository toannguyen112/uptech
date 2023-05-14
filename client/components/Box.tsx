import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/router'

function Box({ children, loading, isClass = true }: any) {

    const router = useRouter()
    const { id } = router.query;

    return (
        <div className={isClass ? 'card space-y-[40px] w-full' : ""}>
            {loading && id ? <Skeleton height={100} /> : children}
        </div>
    )
}

export default Box