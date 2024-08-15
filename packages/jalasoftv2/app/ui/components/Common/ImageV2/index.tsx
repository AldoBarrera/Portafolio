import { MobileConfigProps } from '@/app/ui/components/Common/ContainerV3'
import { getAltImage, getImageUrl } from '@/utils/app'
import ImageNext from 'next/image'
import css from './ImageV2.module.css'

export type ImageType = {
  title?: string
  description?: string
  file?: { url?: string }
}

export interface ImageProps {
  image: ImageType
  alt?: string
  width?: number
  height?: number
  priority?: boolean
  classes?: string
  mobileConfig?: MobileConfigProps
  size?: string
}

function Image({
  image,
  alt,
  width,
  height,
  priority,
  mobileConfig,
  size,
  classes
}: Readonly<ImageProps>) {
  return (
    <>
      {width && height && mobileConfig?.width && mobileConfig?.height ? (
        <div
          style={
            {
              '--imagev2-width': `${width}px`,
              '--imagev2-height': `${height}px`,
              '--imagev2-width-mobile': `${mobileConfig.width}px`,
              '--imagev2-height-mobile': `${mobileConfig.height}px`
            } as React.CSSProperties
          }
          className={`${css.Wrapper} ${classes}`}
        >
          <ImageNext
            src={`https:${getImageUrl(mobileConfig?.image ?? image)}`}
            fill
            alt={alt ?? getAltImage(mobileConfig?.image ?? image) ?? ''}
            priority={priority ?? false}
          />
        </div>
      ) : (
        <ImageNext
          src={`https:${getImageUrl(mobileConfig?.image ?? image)}`}
          fill
          objectFit="contain"
          alt={alt ?? getAltImage(mobileConfig?.image ?? image) ?? ''}
          priority={priority ?? false}
          sizes={size ?? '24w'}
        />
      )}
    </>
  )
}

export default Image
