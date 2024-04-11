import { Story, Meta } from '@storybook/react/types-6-0'

import NavMobile from '.'

export default {
  title: 'Common/NavMobile',
  component: NavMobile,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <NavMobile />
