import React from 'react'
import { GridColumnProps } from '.'
import * as Style from './styles'

export default function GridColumn(props: GridColumnProps) {
  const { children } = props

  return (
    <Style.Column {...props}>
      {children}
    </Style.Column>
  )
}
