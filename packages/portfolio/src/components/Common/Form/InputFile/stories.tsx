import { Story, Meta } from '@storybook/react/types-6-0'

import InputFile from '.'

export default {
  title: 'Common/Form/InputFile',
  component: InputFile
} as Meta

export const Default: Story = () => (
  <InputFile fileName={'my-file.pdf'} placeholder="Upload CV" />
)
