import React from 'react'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import mock1 from '@/app/ui/components/Common/CallToAction2/mock'
import styles from '@/app/ui/components/Common/CallToAction2/call-to-action.module.css'
export const mockCallToAction2 = mock1
export type CallToAction2Type = {
  title: string,
  button: ButtonType
}

function CallToAction2({ title, button }: CallToAction2Type) {
  return (
    <div className={styles.CallToAction2_wrapper}>
      <div className={styles.CallToAction2_content}>
        <h2 className={styles.h2}>{title}</h2>
        <Button url={button.url} label={button.label} />
      </div>
    </div>
  )
}

export default CallToAction2
