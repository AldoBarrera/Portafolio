import { Story, Meta } from '@storybook/react/types-6-0'

import TextArea from '.'

export default {
  title: 'Common/Form/TextArea',
  component: TextArea
} as Meta

export const TextAreaDefault: Story = () => <TextArea />

export const TextAreaWithError = () => <TextArea error="Message is required" />
