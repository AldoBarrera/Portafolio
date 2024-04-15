import React from 'react'
import { GridRowProps } from '.'
import * as Style from './styles'

export default function GridRow(props: GridRowProps) {
  const { children } = props

  return (
    <Style.Row {...props}>
      {children}
    </Style.Row>
  )
}
