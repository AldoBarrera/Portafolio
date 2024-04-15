import * as React from 'react'

import { CardProps } from '../Card'

export type CardGroupProps = {

  centered?: boolean

  children?: React.ReactNode

  items?: CardProps[]

  stackable?: boolean

  textAlign?: 'center' | 'left' | 'right'
}

export default CardGroupProps
