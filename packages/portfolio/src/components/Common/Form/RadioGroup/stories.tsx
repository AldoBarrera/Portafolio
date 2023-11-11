import { Story, Meta } from '@storybook/react/types-6-0'
import { useForm } from 'react-hook-form'
import RadioGroup from '.'
interface FormInputs {
  interest: string
}
function RadioGroupStorybook(props) {
  const { control } = useForm<FormInputs>()
  return <RadioGroup {...props} control={control} />
}

const items = [
  {
    label: 'Jalasoft Services',
    value: 'Jalasoft Services'
  },
  {
    label: 'Join our team',
    value: 'Join our team'
  },
  {
    label: 'Partnerships',
    value: 'Partnerships'
  }
]

const changeHandle = (e, data) => {
  console.log(data)
}

export default {
  title: 'Common/Form/RadioGroup',
  component: RadioGroup,
  args: {
    name: 'Interest',
    value: 'Jalasoft Services',
    items,
    onChange: changeHandle
  }
} as Meta

export const RadioGroupText: Story = (args) => (
  <form>
    <RadioGroupStorybook {...args} />
  </form>
)
