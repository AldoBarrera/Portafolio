import { Story, Meta } from '@storybook/react/types-6-0'

import Footer from '.'

export default {
  title: 'Common/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Footer />
