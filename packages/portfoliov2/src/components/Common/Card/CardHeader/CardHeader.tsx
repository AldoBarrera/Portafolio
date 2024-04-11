import React from 'react'
import Text from 'components/Common/Text'
import { CardHeaderProps } from './'
import * as Style from './styles'

function CardHeader(props: CardHeaderProps) {
  const { children, header } = props
  if (children) {
    return (
      <Style.Header {...props}>
        {children}
      </Style.Header>
    )
  }
  return (
    <Style.Header {...props}>
      <Text {...header}>
        {header?.text}
      </Text>
    </Style.Header>
  )
}

export default CardHeader
