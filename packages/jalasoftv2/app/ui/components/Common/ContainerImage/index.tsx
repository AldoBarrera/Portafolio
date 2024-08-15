import { ImageType } from '@/app/ui/components/Common/ImageV2'
import Image from 'next/image'
import { MobileConfigProps } from '@/app/ui/components/Common/ContainerV3'
import { getAltImage, getImageUrl } from '@/utils/app'
import css from './ContainerImage.module.css'

export interface ContainerImageProps {
  image: ImageType
  alt?: string
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
  mobileConfig?: MobileConfigProps
}

function ContainerImage({
  image,
  alt,
  layout,
  mobileConfig
}: Readonly<ContainerImageProps>) {
  const srcMobile = getImageUrl(mobileConfig?.image ?? image)
  const src = getImageUrl(image)
  return (
    <>
      <div className={css.ImageDesktop}>
        <Image
          src={src?.includes('https:') ? src : 'https:' + src}
          alt={alt ?? (getAltImage(image) as string)}
          layout={layout ?? 'fill'}
          objectFit="cover"
        />
      </div>
      <div className={css.ImageMobile}>
        <Image
          src={srcMobile?.includes('https:') ? srcMobile : 'https:' + srcMobile}
          alt={alt ?? (getAltImage(mobileConfig?.image ?? image) as string)}
          layout={layout ?? 'fill'}
          objectFit="cover"
        />
      </div>
    </>
  )
}

export default ContainerImage
