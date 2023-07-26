import ImageNext from 'next/image'
import { ImageProps } from './ImageDef'

export { Image }
export type { ImageProps }

import React from 'react'
import * as Style from './styles'

export type FileType = {
  url: string
}

export type ImageType = {
  file: FileType
}

function Image(props: ImageProps) {
  const { src, alt, loader, priority, sizes } = props
  return (
    <>
      <Style.Image {...props}>
        <ImageNext
          src={src?.includes('https:') ? src : 'https:' + src}
          layout="fill"
          objectFit="contain"
          alt={alt}
          loader={loader}
          priority={priority ? priority : false}
          sizes={sizes ? sizes : '24vw'}
        />
      </Style.Image>
    </>
  )
}

export default Image
