import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateEffect } from "usehooks-ts";
import { validateForm } from "../validator";

export const useForm = (initialState: any, rules: {}, onSubmit: any) => {

    const { data } = useSelector((state: any) => state.modal.modal);

    const initForm = () => {
        if (!data) {
            return initialState;
        }

        if (data) {
            for (const [key, value] of Object.entries(data) as any) {
                initialState[key] = value;
            }
            return initialState
        }
    }

    const [form, setForm] = React.useState<any>(initForm);
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = () => {
        setErrors(validateForm(form, rules));
    }

    useUpdateEffect(() => {
        onSubmit();
    }, [errors]);

    return { form, setForm, handleSubmit, errors, };
}