import { Story, Meta } from '@storybook/react/types-6-0'
import CheckboxDropdownGroup from '.'
import { useForm } from 'react-hook-form'
interface FormInputs {
  interest: string
}
function CheckboxDropdownGroupStorybook(props) {
  const { control } = useForm<FormInputs>()
  return <CheckboxDropdownGroup {...props} control={control} />
}
const changeHandle = (e, data) => {
  console.log(data)
}
const itemsYear = ['Less than 1 year', '1 year', 'More than 1 year']
const items = [
  {
    checkbox: 'JAVA',
    dropdown: itemsYear
  },
  {
    checkbox: 'C#',
    dropdown: itemsYear
  },
  {
    checkbox: 'Python',
    dropdown: itemsYear
  },
  {
    checkbox: 'Javascript',
    dropdown: itemsYear
  },
  {
    checkbox: 'PHP',
    dropdown: itemsYear
  },
  {
    checkbox: 'Ruby',
    dropdown: itemsYear
  }
]
export default {
  title: 'Common/Form/CheckboxDropdownGroup',
  component: CheckboxDropdownGroup,
  args: {
    name: 'Interest',
    value: 'Jalasoft Services',
    items,
    onChange: changeHandle
  }
} as Meta

export const CheckboxText: Story = (props) => (
  <form>
    <CheckboxDropdownGroupStorybook {...props} />
  </form>
)
