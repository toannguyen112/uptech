import React, { useState } from "react";
import { Checkbox as CheckboxPrime } from 'primereact/checkbox';

interface Props {
    fieldId: string,
    field: any,
    modelValue: any,
    disabled?: boolean
    emit: (arg: any) => void,
}

function Checkbox({ fieldId, field, emit, modelValue, disabled }: Props) {

    return (
        <div className="flex justify-content-center">
            <CheckboxPrime
                onChange={(e: any) => emit(e.checked)}
                checked={modelValue}>
            </CheckboxPrime>
        </div>
    )
}

export default Checkbox