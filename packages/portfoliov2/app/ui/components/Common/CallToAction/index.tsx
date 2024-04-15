import React from 'react'
import Button, { ButtonType } from '@/app/ui/components/Common/Button'
import mock1 from '@/app/ui/components/Common/CallToAction/mock'
import styles from '@/app/ui/components/Common/CallToAction/call-to-action.module.css'
export const mockCallToAction = mock1
export type CallToActionType = {
  title: string,
  button: ButtonType
}

function CallToAction({ title, button }: CallToActionType) {
  return (
    <div className={styles.CallToAction_wrapper}>
      <div className={styles.CallToAction_content}>
        <h2 className={styles.h2}>{title}</h2>
        <Button url={button.url} label={button.label} />
      </div>
    </div>
  )
}

export default CallToAction
