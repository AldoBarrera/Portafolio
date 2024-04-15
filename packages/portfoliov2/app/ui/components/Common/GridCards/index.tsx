import React from 'react'
import Card2, { Card2Type } from '@/app/ui/components/Common/Card2'
import mock1 from '@/app/ui/components/Common/GridCards/mock'
import styles from '@/app/ui/components/Common/GridCards/grid-cards.module.css'
export const mockGridCards = mock1
export type GridCardsType = {
  list: Card2Type[],
  title: string,
  description: string
}

function GridCards({ list, title, description }: GridCardsType) {
  return (
    <div className={styles.GridCards_wrapper}>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p}>{description}</p>
      {list &&  list.map((item: Card2Type, index) => (
        <Card2 key={index} {...item} />
      ))}
    </div>
  )
}

export default GridCards
