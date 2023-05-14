import React from 'react'
import { RadioButton } from "primereact/radiobutton";

interface Props {
    fieldId: string,
    field: any,
    modelValue: any,
    disabled?: boolean
    emit: (arg: any) => void,
}
interface Option {
    name:string,
    value:string,
}

export default function Radio({ fieldId, field, emit, modelValue, disabled }: Props) {
    return (
        <div className="flex justify-content-center">
            <div className="flex flex-wrap gap-[2rem]">
                {
                    field.options.map((option: Option, index: number) => {
                        return (
                            <div 
                            key={index}
                            className="flex align-items-center">
                                <RadioButton
                                    inputId={option.name}
                                    value={option.value}
                                    onChange={(e) => emit(e.value)}
                                    checked={option.value === modelValue}
                                />
                                <label
                                    htmlFor={option.name}
                                    className="ml-2">
                                    {option.name}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
