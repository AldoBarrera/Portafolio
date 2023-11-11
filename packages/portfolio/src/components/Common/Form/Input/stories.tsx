import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import Input from '.'

export default {
  title: 'Common/Form/Input',
  component: Input
} as Meta

export const InputText: Story = () => (
  <form>
    <Input name="first-name" placeholder="First name" type="text" />
  </form>
)

export const InputEmail: Story = () => (
  <form>
    <Input name="email" placeholder="Email" type="email" />
  </form>
)

export const InputPassword: Story = () => (
  <form>
    <Input name="password" placeholder="Password" type="password" />
  </form>
)

const FormWrapper = styled.form`
  > * {
    margin-bottom: 16px;
  }
`

export const InputWithError: Story = () => (
  <FormWrapper>
    <Input
      error="First Name is required"
      name="first-name"
      placeholder="First Name"
      type="text"
    />
    <Input
      name="last-name"
      error="Last Name is required"
      placeholder="Last Name"
      type="text"
    />
    <Input
      error="Email is required"
      name="email"
      placeholder="Email"
      type="text"
    />
  </FormWrapper>
)
