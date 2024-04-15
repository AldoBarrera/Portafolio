import Link from 'next/link'
import dynamic from 'next/dynamic'
import { defaultBreakpoints } from 'styled-media-query'
import Button, { ButtonProps } from 'components/Common/Button'
import Card, { CardProps } from 'components/Common/Card'
import Container from 'components/Common/Container'
import Image from 'components/Common/Image'
import Text from 'components/Common/Text'
import Grid from 'components/Common/Grid'
const SliderSize = dynamic(() => import('components/Common/SliderSize'))
import theme from 'styles/theme'
import * as Style from './styles'

export type SliderCardsSizeProps = {
  title: string
  description?: string
  list: CardProps[]
  listButtonAttribute?: ButtonProps[]
  bgColor?: keyof typeof theme.colors
  redTitle?: []
  template?: string
  disableLinks?: boolean
  maxItemsOnSlider?: number
}

const renderCard = (items: CardProps[], disableLinks = true, size: number = 0) => {
  return items?.map((item, index) => (
    <Grid.Column key={index} size={size ?? item.gridSize}>
      <Link
        href={item.button ? item.button?.url : '#'}
        passHref
        prefetch={false}
      >
        <Card key={index} hasBorder={false}>
          {item.icon && (
            <Style.ContentCardIcon>
              <Image
                src={
                  typeof item.icon === 'string'
                    ? item.icon
                    : item.icon.file && item.icon.file.url
                    ? item.icon.file.url
                    : '#'
                }
                alt={item.alt}
                width={50}
                height={50}
              />
            </Style.ContentCardIcon>
          )}
          {item.image && (
            <Image
              src={
                typeof item.image == 'string'
                  ? item.image
                  : item.image.file && item.image.file.url
                  ? item.image.file.url
                  : '#'
              }
              alt={item.alt}
            />
          )}
          <Card.Content padding="30px">
            <Card.Header
              header={item.content?.header}
            />
            <Card.Description
              description={item.content?.description}
            />
            {!disableLinks && item.button && (
              <Button as="a" label={item.button.label} size="small" />
            )}
          </Card.Content>
        </Card>
      </Link>
    </Grid.Column>
  ))
}

function SliderCardsSize({
  title,
  description,
  list = [],
  bgColor,
  disableLinks = false,
  maxItemsOnSlider = 3
}: SliderCardsSizeProps) {
  const isMobile = false
  return (
    <Style.SliderCardsSizeWrapper bgColor={bgColor}>
      <Container>
        <Style.SliderCardsSizeInfo>
          <Text type="h2" color="black">
            {title}
          </Text>
          {description ? <Text type="p">{description}</Text> : ''}
        </Style.SliderCardsSizeInfo>
        {!isMobile ? (
          <SliderSize size={maxItemsOnSlider}>
            {renderCard(list, disableLinks)}
          </SliderSize>
        ) : (
          <SliderSize>{renderCard(list, disableLinks, 1)}</SliderSize>
        )}
      </Container>
    </Style.SliderCardsSizeWrapper>
  )
}

export default SliderCardsSize
