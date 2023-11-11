import { FormInputs } from 'components/Common/DynamicForm/form1'
interface submitType<T> {
  FormInputs: FormInputs
  services: (FormInputs: FormInputs) => Promise<T>
}

interface response<T> {
  data: T | undefined
  error: string | undefined
  isValidating: boolean | undefined
}

export const submit = <T>(submit: submitType<T>): response<T> => {
  const { FormInputs, services } = submit
  services(FormInputs)
  return { data: undefined, error: '', isValidating: false }
}
