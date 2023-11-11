import { Story, Meta } from '@storybook/react/types-6-0'
import Intro from '.'

export default {
  title: 'Intro',
  component: Intro
} as Meta

export const Default: Story = () => <Intro>This is the intro component</Intro>
