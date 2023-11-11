import { Story, Meta } from '@storybook/react/types-6-0'
import Input from 'components/Common/Form/Input'
import Select from 'components/Common/Form/Select'
import TextArea from 'components/Common/Form/TextArea'
import selectOptionsMock from 'components/Common/Form/Select/mock'
import Form, { FormProps } from '.'

export default {
  title: 'Common/Form/Form',
  component: Form,
  args: {
    columns: 'number'
  }
} as Meta

export const FormDefault: Story<FormProps> = (args) => (
  <Form {...args}>
    <Input type="text" name="name" placeholder="Name" />
    <Input type="email" name="email" placeholder="Email" />
    <Input type="tel" name="phone-number" placeholder="Phone Number" />
    <Select
      defaultOption="Select one of the options"
      options={selectOptionsMock}
    />
    <TextArea />
  </Form>
)

FormDefault.args = {
  columns: 2
}
