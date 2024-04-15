import ImageNext from 'next/image'
import { ImageProps } from './ImageDef'

export { Image }
export type { ImageProps }

import React from 'react'

export type FileType = {
  url: string
}

export type ImageType = {
  file: FileType
  description?: string
}

function Image(props: ImageProps) {
  const {
    src,
    alt,
    width,
    height,
    image,
    className
  } = props
  const srcResult = image?.file?.url && !src ? image?.file?.url : src
  const altResult = image?.description && !alt ? image?.description : alt
  return (
    <ImageNext
      src={srcResult}
      alt={altResult ?? 'Image' }
      width={width}
      height={height}
      className={className}
    />
  )
}

export default Image
