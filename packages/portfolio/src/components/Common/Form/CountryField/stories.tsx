import { Story, Meta } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'
import CountryField from '.'
interface FormInputs {
  country: string
}

const changeHandle = (e, data) => {
  console.log(data)
}

function CountryFieldStorybook(props) {
  const { control } = useForm<FormInputs>()
  return <CountryField {...props} control={control} />
}

export default {
  title: 'Common/Form/CountryField',
  component: CountryField,
  args: {
    placeholder: 'Country*',
    onChange: changeHandle
  }
} as Meta

export const Default: Story = (args) => (
  <form>
    <CountryFieldStorybook {...args} />
  </form>
)
