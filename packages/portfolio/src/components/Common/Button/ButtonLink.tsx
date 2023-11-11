import useUtmQuery from './hooks/useUtmQuery'
import Link from 'next/link'
import Button, { ButtonsType, getUrl } from './'
function ButtonLink(props: ButtonsType) {
  const utm = useUtmQuery()
  return (
    <Link
      href={props.configuration?.conditional ? getUrl(props, utm) : props?.url}
      passHref
      prefetch={false}
    >
      <Button
        as="a"
        size="large"
        fullWidthMobile={true}
        label={props.label}
        variant={'isPrimaryDarkerHover'}
        {...props.configuration}
      />
    </Link>
  )
}

export default ButtonLink
