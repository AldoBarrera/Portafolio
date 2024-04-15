import React from 'react'
import Card, { CardType } from '@/app/ui/components/Common/Card'
import mock1 from '@/app/ui/components/Common/GridBlue/mock'
import styles from '@/app/ui/components/Common/GridBlue/grid-blue.module.css'
export const mockGridBlue = mock1
export type GridBlueType = {
  list: CardType[]
}

function GridBlue({ list }: GridBlueType) {
  return (
    <div className={styles.GridBlue_wrapper}>
      {list &&  list.map((item: CardType, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

export default GridBlue
