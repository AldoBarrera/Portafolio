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
  description?: string
}

function Image(props: ImageProps) {
  const {
    src,
    alt,
    loader,
    priority,
    sizes,
    width,
    height,
    image,
    layout,
    objectFit
  } = props
  const srcResult = image?.file?.url && !src ? image?.file?.url : src
  const altResult = image?.description && !alt ? image?.description : alt
  return (
    <>
      {width && height ? (
        <ImageNext
          src={srcResult?.includes('https:') ? srcResult : 'https:' + srcResult}
          alt={altResult}
          loader={loader}
          priority={priority ? priority : false}
          width={width}
          height={height}
          layout={layout}
          objectFit={objectFit}
        />
      ) : (
        <Style.Image {...props}>
          <ImageNext
            src={
              srcResult?.includes('https:') ? srcResult : 'https:' + srcResult
            }
            layout="fill"
            objectFit="contain"
            alt={altResult}
            loader={loader}
            priority={priority ? priority : false}
            sizes={sizes ? sizes : '24vw'}
          />
        </Style.Image>
      )}
    </>
  )
}

export default Image
