const initFullProps = {
  height: 800,
  menubar: false,
  image_title: true,
  automatic_uploads: true,
  selector: 'textarea',  // change this value according to your HTML
  file_picker_types: 'file image media',
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | ' + 'link image | code' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
}

export default initFullProps
