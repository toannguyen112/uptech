export interface FieldInterface {
  field: {
    className?: string
    type?: string
    source?: {
      model: string
      query: {},
      multiple: boolean
    }
    placeholder?: string
    disable?: boolean
    rows?: number
    min?: number
    max?: number
    validate?: any;
    rules?: any,
    fieldName?: any,
    multiple?: boolean,
    errors?: any,
    label?: string
    title?: string
    mode?: string
    required?: boolean
    options?: any[]
    autoFocus?: boolean
    isDisabled?: boolean
  }
  modelValue?: any
  updateModelValue: (arg: any) => void
}
