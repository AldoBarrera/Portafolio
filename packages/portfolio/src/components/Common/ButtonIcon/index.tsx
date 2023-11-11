import Button, { ButtonProps } from 'components/Common/Button'
import Text from 'components/Common/Text'
import Image from 'next/image'

const ButtonIcon = (props: ButtonProps) => {
  const { icon, label } = props
  return (
    <Button
      as="a"
      href="/contact"
      size="large"
      variant={'isPrimaryDarkerHover'}
    >
      {!!icon && typeof icon === 'string' && (
        <Image src={icon} width="40" height="40" />
      )}
      {!!label && <Text>{label}</Text>}
    </Button>
  )
}

export default ButtonIcon
