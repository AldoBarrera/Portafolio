import React from 'react'
import Image, { ImageType } from '@/app/ui/components/Common/Image'
import mock1 from '@/app/ui/components/Common/MultimediaContent2/mock'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import styles from '@/app/ui/components/Common/MultimediaContent2/multimedia-content.module.css'
export const mockMultimediaContent2 = mock1
export type MultimediaContentType2 = {
  title: string
  description?: string
  image: ImageType
  button: ButtonType
  list: {title:string, description:string}[]
}

function MultimediaContent({ image, title, list }: MultimediaContentType2) {
  return (
    <>
      <h2 className={styles.h2}>{title}</h2>
      <section className={styles.MultimediaContent_wrapper}>
        <section className={styles.MultimediaContent_content}>
          {list?.map((item, index)=>(
            <div key={index} className={styles.MultimediaContent_item}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </section>
        <div className={styles.MultimediaContent_image}>
          <Image
            src={image?.file.url}
            alt={image?.description}
            priority={true}
            width={662}
            height={336}
            className={styles.img}
          />
        </div>
      </section>
    </>
  )
}

export default MultimediaContent
