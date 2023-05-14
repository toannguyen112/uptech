import { Editor } from '@tinymce/tinymce-react'
import React, { useState, useRef } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import initFullProps from './initFullProps'

interface Props {
  modelValue: any
  emit: (param: any) => void
}

const CustomEditor = ({ modelValue, emit }: Props) => {

  const editorRef = useRef<any>();
  const [value, setValue] = React.useState(modelValue ?? '');

  useUpdateEffect(() => {
    emit(value)
  }, [value]);

  return (
    <div>
      <Editor
        apiKey='kk8b71st8g7se8kra0do3fzsckuxv92i3y7p7onfzof65jwh'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={modelValue}
        onChange={(e) => setValue(e.target.getContent())}
        init={{
          height: 600,
          menubar: true,
          image_title: true,
          automatic_uploads: true,
          file_picker_types: 'file image media',

          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'image'
          ],
          toolbar: 'undo redo | formatselect' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
        }}
      />
    </div>
  )
}

export default CustomEditor
