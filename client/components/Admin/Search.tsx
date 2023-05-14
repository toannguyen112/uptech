import React from 'react'
import Router, { useRouter } from "next/router";

function Search() {

    const router = useRouter();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        if (searchValue) {
            router.query.search = searchValue;
        } else {
            delete router.query['search'];
        }
        Router.push({ pathname: router.pathname, query: router.query });
    }

    return (
        <div>
            <div className=" flex items-center space-x-[20px] border border-gray-300 rounded-[8px] pl-[10px] overflow-hidden min-w-[400px] bg-white text-gray-900">
                <input
                    onChange={(e) => handleOnChange(e)}
                    type="text"
                    placeholder="Tìm kiếm"
                    className="border-none py-[8px] w-full focus:ring-0 focus:outline-none placeholder-gray-900"
                />
            </div>
        </div>
    )
}

export default Search