import Link from 'next/link'
import Button, { ButtonsType } from './index'
function ButtonLink(props: ButtonsType) {
  return (
    <Link
      href={props?.url}
      passHref
      prefetch={false}
    >
      <Button
        size="large"
        fullWidthMobile={true}
        label={props.label}
        variant={'isPrimaryDarkerHover'}
        fullWidth
        hasUrl
      />
    </Link>
  )
}

export default ButtonLink
