import { ImageType } from '@/app/ui/components/Common/ImageV2'
import Image from 'next/image'
import { MobileConfigProps } from '@/app/ui/components/Common/ContainerV3'
import { getAltImage, getImageUrl } from '@/utils/app'
import css from './HeroImage.module.css'

export interface HeroImageProps {
  image: ImageType
  alt?: string
  width?: number
  height?: number
  mobileConfig?: MobileConfigProps
}

function HeroImage({
  image,
  width,
  height,
  mobileConfig,
  alt
}: Readonly<HeroImageProps>) {
  return (
    <>
      <div className={css.ImageDesktop}>
        <Image
          src={`https:${getImageUrl(image)}`}
          alt={alt ?? (getAltImage(image) as string)}
          width={width ?? 890}
          height={height ?? 788}
        />
      </div>
      <div className={css.ImageMobile}>
        <Image
          src={`https:${getImageUrl(mobileConfig?.image ?? image)}`}
          alt={alt ?? (getAltImage(mobileConfig?.image ?? image) as string)}
          width={mobileConfig?.width ?? 350}
          height={mobileConfig?.height ?? 310}
        />
      </div>
    </>
  )
}

export default HeroImage
