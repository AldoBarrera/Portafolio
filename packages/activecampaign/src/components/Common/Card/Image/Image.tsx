import React from 'react'
import Link from 'next/link'
import { ImageProps } from '.'
import * as Style from './styles'

import {
  childrenUtils,
  getUnhandledProps,
  htmlImageProps,
  partitionHTMLProps
} from '../utils'

export type FileType = {
  url: string
}

export type ImageType = {
  file: FileType
}

function Image(props: ImageProps) {
  const { children, content } = props

  const rest = getUnhandledProps(Image, props)
  const [imgTagProps, rootProps] = partitionHTMLProps(rest, {
    htmlProps: htmlImageProps
  })

  if (!childrenUtils.isNil(children)) {
    return (
      <Style.Image {...props} {...rest}>
        {children}
      </Style.Image>
    )
  }
  if (!childrenUtils.isNil(content)) {
    return (
      <Style.Image {...props} {...rest}>
        {content}
      </Style.Image>
    )
  }

  return (
    <Link href={props.url}>
      <Style.Image {...props} {...rootProps}>
          <img {...imgTagProps} />
            <Style.linkProduct >
                View more
            </Style.linkProduct>
      </Style.Image>
    </Link>
  )
}

export default Image
