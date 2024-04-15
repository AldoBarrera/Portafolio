import React from 'react'
import mock1 from '@/app/ui/components/Common/Card/mock'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import Image, { ImageType } from '@/app/ui/components/Common/Image'
import styles from '@/app/ui/components/Common/Card/card.module.css'
export const mockCard = mock1
export type CardType = {
  title?: string
  description?: string
  image?: ImageType
  button?: ButtonType
}

function Card({ image, title, description, button }: CardType) {
  return (
    <div className={styles.Card_wrapper}>
      {image && (
        <Image
          src={image?.file.url}
          alt={image?.description}
          priority={true}
          width={55}
          height={50}
          className={styles.img}
        />
      )}
      <section className={styles.Card_content}>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.p}>{description}</p>
        {button && (
          <Button url={button.url} label={button.label} />
        )}
      </section>
    </div>
  )
}

export default Card
