import { Close } from '@styled-icons/evaicons-solid/Close'

import * as Style from './styles'

export type MessageProps = {
  onDismiss: () => void
  header: string
  positive: boolean
  content: string
}

function Message({ content, onDismiss }: MessageProps) {
  return (
    <Style.MessageWrapper>
      <Style.IconWrapper>
        <Close onClick={onDismiss} />
      </Style.IconWrapper>
      <p>{content}</p>
    </Style.MessageWrapper>
  )
}

export default Message
