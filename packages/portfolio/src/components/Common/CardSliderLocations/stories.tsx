import { Story, Meta } from '@storybook/react/types-6-0'
import CardSliderLocations, { CardSliderLocationsProps } from '.'
import cardSliderLocationsMock from './mock'

export default {
  title: 'Common/CardSliderLocations',
  component: CardSliderLocations,
  args: cardSliderLocationsMock,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<CardSliderLocationsProps> = (args) => (
  <CardSliderLocations {...args} />
)
