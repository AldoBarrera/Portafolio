import Button, { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import css from './HeroButton.module.css'
import { getText } from '@/utils/app'

function HeroButton(props: Readonly<ButtonProps>) {
  const { url } = props
  return (
    url && (
      <Button
        size={'large'}
        variant={'primary'}
        classes={css.Wrapper}
        {...props}
      >
        {getText(props?.label)}
      </Button>
    )
  )
}

export default HeroButton
