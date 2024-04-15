import React from 'react'
import Image, { ImageType } from '@/app/ui/components/Common/Image'
import mock1 from '@/app/ui/components/Common/Banner/mock'
import styles from '@/app/ui/components/Common/Banner/banner.module.css'
export const mockBanner = mock1
export type BannerType = {
  image: ImageType
}

function MultimediaContent({ image }: BannerType) {
  return (
    <div className={styles.Banner_wrapper}>
      <Image
        src={`${image?.file.url}.webp`}
        alt={image?.description}
        priority={true}
        width={1260}
        height={283}
        className={'hidden md:block'}
      />
      <Image
        src={`${image?.file.url}-mobile.webp`}
        alt={image?.description}
        priority={true}
        width={1260}
        height={283}
        className={'block md:hidden'}
      />
    </div>
  )
}

export default MultimediaContent
