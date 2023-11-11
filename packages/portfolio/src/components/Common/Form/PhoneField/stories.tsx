import { Story, Meta } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'
import PhoneField from '.'
interface FormInputs {
  interest: string
}
function PhoneFieldStorybook(props) {
  const { control } = useForm<FormInputs>()
  return <PhoneField {...props} control={control} />
}
const changeHandle = (e, data) => {
  console.log(data)
}

export default {
  title: 'Common/Form/PhoneField',
  component: PhoneField,
  args: {
    name: 'Interest',
    value: 'Jalasoft Services',
    onChange: changeHandle
  }
} as Meta

export const PhoneFieldText: Story = (args) => (
  <form>
    <PhoneFieldStorybook {...args} />
  </form>
)
