import React from 'react'
import mock1 from '@/app/ui/components/Common/Card2/mock'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import Image, { ImageType } from '@/app/ui/components/Common/Image'
import styles from '@/app/ui/components/Common/Card2/card2.module.css'
export const mockCard = mock1
export type Card2Type = {
  title?: string
  description?: string
  image?: ImageType
  button?: ButtonType
  subtitle?: string
  extra?: string
}

function Card2({ image, title, description, subtitle, button, extra }: Card2Type) {
  return (
    <div className={styles.Card2_wrapper}>
      {image && (
        <Image
          src={image?.file.url}
          alt={image?.description}
          priority={true}
          width={42}
          height={32}
          className={styles.img}
        />
      )}
      <p className={styles.p2}>{subtitle}</p>
      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.p}>{description}</p>
      <p className={styles.p3}>{extra}</p>
      {button && (
        <Button url={button.url} label={button.label} />
      )}
    </div>
  )
}

export default Card2
