import { ReactNode } from 'react'
import ImageV2, { ImageType } from '@/app/ui/components/Common/ImageV2'
import Link from 'next/link'
import Text, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import { getText } from '@/utils/app'
import css from './ButtonV2.module.css'

export type SizeTypesProps = 'large' | 'link' | 'navbar'

type VariantTypesProps = 'primary' | 'link' | 'navbar'

export type ButtonProps = {
  label: TextV2Props
  url?: string
  urlSection?: any
  icon?: ImageType
  variant?: VariantTypesProps
  size?: SizeTypesProps
  disabled?: boolean
  children?: ReactNode
  configuration?: any
  classes?: string
}

function Button({
  label,
  url,
  urlSection,
  icon,
  variant,
  size,
  disabled = false,
  children,
  classes
}: Readonly<ButtonProps>) {
  return (
    <Link
      href={url ?? '#'}
      passHref
      prefetch={false}
      style={{ textDecoration: 'none' }}
    >
      <button
        className={`${css.Button__Base} ${css[`Size__${size}`]} ${
          css[`Variant__${variant}`]
        } ${classes}`}
        onClick={
          urlSection ? () => scrollTo(urlSection?.content?.id ?? '') : undefined
        }
        disabled={disabled}
      >
        {icon && (
          <ImageV2
            image={icon}
            width={40}
            height={40}
            mobileConfig={{
              image: icon,
              width: 24,
              height: 24
            }}
          />
        )}
        <Text {...label}>{children ?? getText(label)}</Text>
      </button>
    </Link>
  )
}

export default Button
