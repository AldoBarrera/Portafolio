import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox from '.'

export default {
  title: 'Common/Form/Checkbox',
  component: Checkbox
} as Meta

export const CheckboxText: Story = () => (
  <form>
    <Checkbox label="this is a checkbox" />
  </form>
)
