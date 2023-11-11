import { Story, Meta } from '@storybook/react/types-6-0'
import Recaptcha from '.'

export default {
  title: 'Common/Recaptcha',
  component: Recaptcha,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Recaptcha isSubmitted />
