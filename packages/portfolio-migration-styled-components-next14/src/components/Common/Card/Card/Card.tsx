import Image from 'components/Common/Image'
import { CardContent } from '../CardContent'
import { CardDescription } from '../CardDescription'
import { CardGroup } from '../CardGroup'
import { CardHeader } from '../CardHeader'
import { CardMeta } from '../CardMeta'
import { CardProps } from '.'
import * as Style from './styles'

function Card(props: CardProps) {
  const {
    children,
    content,
    image,
    icon,
    size = 'small',
    isSlider = false,
    padding = '30px',
    isHorizontal = false,
    centered = false,
    isHorizontalInverted,
    alt
  } = props

  if (children) {
    return (
      <Style.Card {...props}>
        {children}
      </Style.Card>
    )
  }

  return (
    <Style.Card
      size={size}
      isHorizontal={isHorizontal}
      isHorizontalInverted={isHorizontalInverted}
      centered={centered}
      {...props}
    >
      {image && (
        <Image
          src={typeof image === 'string' ? image : image?.file?.url}
          isSlider={isSlider}
          padding={padding}
          centered={centered}
          alt={alt}
        />
      )}
      {icon && (
        <Image
          src={typeof icon == 'string' ? icon : icon?.file?.url}
          isSlider={isSlider}
          isIcon
          padding={padding}
          centered={centered}
          alt={alt}
          sizes={'24vW'}
        />
      )}
      <Style.ContentWrapper isHorizontalInverted={isHorizontalInverted}>
        {(content) && (
          <CardContent {...content} />
        )}
      </Style.ContentWrapper>
    </Style.Card>
  )
}

Card.Content = CardContent
Card.Header = CardHeader
Card.Meta = CardMeta
Card.Description = CardDescription
Card.Group = CardGroup

export default Card
