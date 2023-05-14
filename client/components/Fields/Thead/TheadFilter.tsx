import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { Checkbox } from "primereact/checkbox";
interface IProps {
    col: any,
    arrFilters: any[],
    onCheckHandler: (arg: any) => void
}
function TheadFilter({
    col,
    arrFilters,
    onCheckHandler }: IProps) {
    const ref = useRef<any>();
    const [isShow, setIsShow] = useState<boolean>(false);
    const isChecked = (x: any) => arrFilters.some((item: any) => item.value === x.value);
    useOnClickOutside(ref, () => setIsShow((pre) => !pre));

    return (
        col.filters ? (
            <React.Fragment>
                <span
                    className="ml-[40px] "
                    onClick={(e) => { setIsShow((pre) => !pre) }}>
                    <Image src="/svg/icon-filter.svg"
                        alt="icon-filter"
                        className="cursor-pointer "
                        width={14}
                        height={14} />
                </span>
                {
                    isShow && (
                        <React.Fragment>
                            <div
                                ref={ref}
                                className="absolute inset-x-0 space-y-[10px] p-[10px] shadow-select  min-w-[200px] border rounded-[8px] bg-white"
                            >
                                {col.filters.map((x: any, index: number) => {
                                    return (
                                        <div className="flex items-center space-x-[12px]" key={index}>
                                            <Checkbox
                                                inputId={x["name"]}
                                                name="category"
                                                value={x['value']}
                                                onChange={(e: any) => onCheckHandler({
                                                    name: x.name,
                                                    value: x.value,
                                                    field: col.field,
                                                })}
                                                checked={isChecked(x)} />
                                            <label
                                                htmlFor={x["name"]}
                                                className=" text-gray-900 cursor-pointer">
                                                {x["name"]}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        ) : null
    )
}

export default TheadFilter