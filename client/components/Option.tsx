import React, { useEffect, useState } from 'react'
import { Checkbox } from "primereact/checkbox";
interface Props {
    isLabel: boolean,
    option: any,
    selectedOptions?: any,
    onOptionChange: (option: any) => void
}

function Option({ isLabel = false, option = {}, selectedOptions = [], onOptionChange }: Props) {

    const isChecked: boolean = selectedOptions.some((item: any) => item.id === option.id);

    return (
        <div className='flex items-center space-x-[1rem]'>
            {isLabel && <label
                className='text-gray-100 font-semibold'
                htmlFor={option.id}>{option.name}</label>}
            <Checkbox
                inputId={option.id}
                name={option.name}
                value={option.id}
                onChange={() => onOptionChange(option)}
                checked={isChecked} />
            <span></span>
        </div>
    )
}

export default Option