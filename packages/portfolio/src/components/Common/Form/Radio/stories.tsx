import { Story, Meta } from '@storybook/react/types-6-0'
import Radio from '.'

export default {
  title: 'Common/Form/Radio',
  component: Radio
} as Meta

export const RadioText: Story = () => (
  <form>
    <Radio label="This is a Radio Button" />
  </form>
)
