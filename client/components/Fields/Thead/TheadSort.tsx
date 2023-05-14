import Image from 'next/image';
import React from 'react'
import Router, { useRouter } from "next/router";

function TheadSort({ col }: any) {

    const router = useRouter();
    const { query }: any = router;

    const handleSort = (sort_field: string = '', sort_order: string = 'asc') => {

        Router.push({
            pathname: router.pathname, query: {
                ...query,
                sort_field: sort_field,
                sort_order: sort_order,
            }
        });
    }

    const iconClassName = () => {
        return `${col.field}` === query.sort_field && query.sort_order === 'desc' ? "rotate-180" : '';
    }

    return (
        <React.Fragment >
            <div className='inline-flex'>
                <Image src="/svg/icon-sort.svg"
                    alt="sort"
                    onClick={() => handleSort(`${col.field}`,
                        `${col.field}` === query.sort_field
                            && query.sort_order === 'desc' ? 'asc' : 'desc')}
                    className={iconClassName()}
                    width={16}
                    height={16} />
            </div>
        </React.Fragment>
    )
}

export default TheadSort