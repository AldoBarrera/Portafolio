import React from 'react'
import Image, { ImageType } from '@/app/ui/components/Common/Image'
import mock1 from '@/app/ui/components/Common/MultimediaContent/mock'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import styles from '@/app/ui/components/Common/MultimediaContent/multimedia-content.module.css'
export const mockMultimediaContent = mock1
export type MultimediaContentType = {
  title: string
  description?: string
  image: ImageType
  button: ButtonType
}

function MultimediaContent({ image, title, description, button }: MultimediaContentType) {
  return (
    <section className={styles.MultimediaContent_wrapper}>
      <div className={styles.MultimediaContent_image}>
        <Image
          src={image?.file.url}
          alt={image?.description}
          priority={true}
          width={798}
          height={525}
          className={styles.img}
        />
      </div>
      <section className={styles.MultimediaContent_content}>
        <p className={styles.p}>{description}</p>
        <h2 className={styles.h2}>{title}</h2>
        <Button url={button.url} label={button.label} />
      </section>
    </section>
  )
}

export default MultimediaContent
