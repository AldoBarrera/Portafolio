import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps } from '.'
import selectOptinosMock from './mock'

export default {
  title: 'Common/Form/Select',
  component: Select,
  args: {
    defaultOption: 'Select an option',
    options: selectOptinosMock
  }
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
