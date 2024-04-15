import * as Style from './styles'
import Text from 'components/Common/Text'
import Button, { ButtonsType, getUrl } from 'components/Common/Button'
import Link from 'next/link'
import theme from 'styles/theme'

export type CallToActionProps = {
  button?: ButtonsType
  hasTarget?: boolean
  description?: string
  contentLeft?: boolean
  contentRight?: boolean
  hasDescriptionLeftMobile?: boolean
  hasTwoColums?: boolean
  title?: string
  withoutBorder?: boolean
  bgColor?: keyof typeof theme.colors
  hasButtonLabel?: string
}

function CallToAction({
  button,
  hasTarget,
  description,
  contentLeft,
  contentRight,
  hasDescriptionLeftMobile = false,
  hasTwoColums = false,
  title,
  bgColor
}: CallToActionProps) {
  const utm = ""
  return (
    <Style.CallToActionWrapper
      hasDescriptionLeftMobile={hasDescriptionLeftMobile}
      hasTwoColums={hasTwoColums}
      hasButtonLabel={button?.label}
      bgColor={bgColor}
    >
      <Style.CallToActionContent>
        <Style.CallToActionInfo
          contentLeft={contentLeft}
          contentRight={contentRight}
        >
          {title && <Text type="h2">{title}</Text>}

          {description && <Text type="p">{description}</Text>}
        </Style.CallToActionInfo>

        <Style.CallToActionButton>
          {button?.label && (
            <Link
              href={button?.url}
              passHref
            >
              <Button
                as="a"
                target={hasTarget ? '_blank' : '_self'}
                label={button?.label || ''}
                fullWidthMobile={true}
                variant="isPrimary"
                size="large"
              />
            </Link>
          )}
        </Style.CallToActionButton>
      </Style.CallToActionContent>
    </Style.CallToActionWrapper>
  )
}

export default CallToAction
