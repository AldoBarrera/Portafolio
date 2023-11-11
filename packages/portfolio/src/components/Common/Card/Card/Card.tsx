import { childrenUtils, getUnhandledProps } from '../utils'
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
    title,
    header,
    meta,
    description,
    extra,
    size = 'small',
    isSlider = false,
    padding = '30px',
    isHorizontal = false,
    centered = false,
    descriptionProperties,
    headerProperties,
    isHorizontalInverted,
    textAlign = 'left',
    alt
  } = props

  const rest = getUnhandledProps(Card, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <Style.Card size={size} {...props} {...rest}>
        {children}
      </Style.Card>
    )
  }
  if (!childrenUtils.isNil(content)) {
    return (
      <Style.Card size={size} {...props} {...rest}>
        {content}
      </Style.Card>
    )
  }

  return (
    <Style.Card
      size={size}
      isHorizontal={isHorizontal}
      isHorizontalInverted={isHorizontalInverted}
      {...props}
      {...rest}
      centered={centered}
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
        {(description || title || meta) && (
          <CardContent
            description={description}
            header={title ? title : header}
            meta={meta}
            padding={padding}
            descriptionProperties={descriptionProperties}
            headerProperties={headerProperties}
            textAlign={textAlign}
          />
        )}
        {extra && <CardContent extra>{extra}</CardContent>}
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
