import { Story, Meta } from '@storybook/react/types-6-0'
import CheckboxDropdown from '.'
const changeHandle = (e, data) => {
  console.log(data)
}
const itemsYear = ['Less than 1 year', '1 year', 'More than 1 year']
export default {
  title: 'Common/Form/CheckboxDropdown',
  component: CheckboxDropdown,
  args: {
    name: 'Interest',
    title: 'Interest',
    label: 'Interest',
    value: 'Jalasoft Services',
    dropdown: itemsYear,
    onChangeCheckbox: changeHandle,
    onChangeDropdown: changeHandle
  }
} as Meta

export const CheckboxText: Story = (props) => (
  <form>
    <CheckboxDropdown {...props} />
  </form>
)
