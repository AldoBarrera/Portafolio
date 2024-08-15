import { ImageType } from '@/app/ui/components/Common/ImageV2'
import Image from 'next/image'
import { MobileConfigProps } from '@/app/ui/components/Common/ContainerV3'
import { getAltImage, getImageUrl } from '@/utils/app'
import css from './DynamicImage.module.css'

export interface DynamicImageProps {
  image: ImageType
  alt?: string
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
  mobileConfig?: MobileConfigProps
  classes?: string
}

function DynamicImage({
  image,
  alt,
  layout,
  mobileConfig,
  classes
}: Readonly<DynamicImageProps>) {
  const srcMobile = getImageUrl(mobileConfig?.image ?? image)
  const src = getImageUrl(image)
  return (
    <>
      <div
        className={`${css.ImageDesktop} ${css.WrapperDinamic} ${
          classes ? classes : ''
        }`}
      >
        <Image
          src={src?.includes('https:') ? src : 'https:' + src}
          alt={alt ?? (getAltImage(image) as string)}
          fill={layout === 'fill' ? true : false}
          sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div
        className={`${css.ImageMobile} ${css.WrapperDinamic} ${
          classes ? classes : ''
        }`}
      >
        <Image
          src={srcMobile?.includes('https:') ? srcMobile : 'https:' + srcMobile}
          alt={alt ?? (getAltImage(mobileConfig?.image ?? image) as string)}
          fill={layout === 'fill' ? true : false}
          sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  )
}

export default DynamicImage
