import React, { Fragment, useEffect, useId, useState } from 'react'
import { FieldInterface } from '../../Interface'
import InputFile from './InputFile'
import CustomEditor from '../Tnymce/CustomEditor'
import Select from './Select'
import SelectSource from './SelectSource'
import Checkbox from './Checkbox'
import Radio from './Radio'
import List from '../List'
import SectionCustom from '../SectionCustom'

export default function Field({
  field,
  updateModelValue,
  modelValue,
}: FieldInterface) {

  const fieldId = useId()

  return (
    <Fragment>
      <label
        htmlFor={field.placeholder}
        className="font-bold text-gray-700 text-[14px] mb-[4px] block"
      >
        {field.title}
        {field.required && <span className="text-red-500">*</span>}
      </label>

      {(() => {
        if (
          field.type === undefined ||
          field.type === 'text' ||
          field.type === 'password' ||
          field.type === 'number' ||
          field.type === 'email' ||
          field.type === 'datetime-local' ||
          field.type === 'date' ||
          field.type === 'time'
        ) {
          return (
            <input
              id={fieldId}
              value={modelValue}
              onChange={(e) => updateModelValue(e.target.value)}
              type={field.type}
              className={field.className ?? 'input'}
              placeholder={field.placeholder}
              disabled={field.disable}
            />
          )
        }

        if (field.type === 'textarea') {
          return (
            <textarea
              id={fieldId}
              value={modelValue}
              rows={field.rows ?? 5}
              onChange={(e) => updateModelValue(e.target.value)}
              className={field.className ?? 'input'}
              placeholder={field.placeholder}
              disabled={field.disable}
            />
          )
        }

        if (field.type === 'select_source') {
          return (
            <SelectSource
              updateModelValue={(value: any) => updateModelValue(value)}
              modelValue={modelValue}
              field={field}
            />
          )
        }

        if (field.type === "checkbox") {
          return (
            <React.Fragment>
              <Checkbox
                fieldId={fieldId}
                field={field}
                emit={(value) => updateModelValue(value)}
                modelValue={modelValue}
              />
            </React.Fragment>
          )
        }

        if (field.type === "radio") {
          return (
            <React.Fragment>
              <Radio
                fieldId={fieldId}
                field={field}
                emit={(value) => updateModelValue(value)}
                modelValue={modelValue}
              />
            </React.Fragment>
          )
        }

        if (field.type === 'select') {
          return (
            <Select
              updateModelValue={(value) => updateModelValue(value)}
              modelValue={modelValue}
              field={field}
            />
          )
        }

        if (field.type === 'rich_text') {
          return (
            <CustomEditor
              emit={(value) => updateModelValue(value)}
              modelValue={modelValue}
            />
          )
        }

        if (field.type === 'input_file') {
          return (
            <InputFile
              field={field}
              modelValue={modelValue}
              emit={(file: any) => updateModelValue(file)}
            />
          )
        }

        if (field.type === 'section_custom') {
          return (
            <SectionCustom
              updateModelValue={(value) => updateModelValue(value)}
              modelValue={modelValue}
              field={field}
            />
          )
        }

        if (field.type === "list") {
          return (
            <React.Fragment>
              <List
                updateModelValue={(value) => updateModelValue(value)}
                modelValue={modelValue}
                field={field}
              />
            </React.Fragment>
          )
        }
      })()}
    </Fragment>
  )
}
