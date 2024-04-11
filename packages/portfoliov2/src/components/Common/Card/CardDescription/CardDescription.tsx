import React from 'react'
import { CardDescriptionProps } from '.'
import * as Style from './styles'
import Text from 'components/Common/Text'

function CardDescription(props: CardDescriptionProps) {
  const { children, description } = props
  if (children) {
    return (
      <Style.Description {...props}>
        {children}
      </Style.Description>
    )
  }
  return (
    <Style.Description {...props}>
      <Text {...description}>
        {description?.text}
      </Text>
    </Style.Description>
  )
}

export default CardDescription
