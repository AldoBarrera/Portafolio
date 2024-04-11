'use client'
import ButtonLink from 'components/Common/Button/ButtonLink'
import Text, { TextProps } from 'components/Common/Text'
import Image, { ImageType } from 'components/Common/Image'
import {
  LeftComponents,
  HeroRightContent,
  AdditionalRightComponent,
  HeroWrapper,
  LeftContent
} from './styles'
import Breadcrumb from 'components/Common/Breadcrumb'
import { HeroProps } from '.'
import { ButtonsType } from 'components/Common/Button'

export const buildImageComponent = (image: ImageType | string) => {
  if (typeof image === 'string') {
    return (
      <Image loader={() => image} alt={'imageHero'} src={image} sizes={'24vw'} priority={true} />
    )
  } else {
    return (
      <Image src={image?.file?.url} alt={image?.description} priority={true} />
    )
  }
}

export const sortComponents = (
  title: TextProps,
  description: TextProps,
  image?: ImageType | string,
  button?: ButtonsType
) => {
  const arrayComponents = [
    <Text
      key="title"
      type="h1"
      text={title?.text}
      {...title}
      {...title?.configuration}
    />,
    description && (
      <Text
        key="description"
        type="pHero"
        text={description.text}
        {...description}
        {...description.configuration}
      />
    ),
    button && (
      <div key="button">
        <ButtonLink {...button} />
      </div>
    ),
    (image) && (
      <AdditionalRightComponent key="aditional_component">
        {buildImageComponent(image)}
      </AdditionalRightComponent>
    )
  ]
  return arrayComponents
}

function Hero({
  title,
  hasSmallBorderOnTop = true,
  description,
  image,
  button,
  hideBreadCrumbs,
  additionalLeftComponent,
  paddingLeftComponents
}: HeroProps) {
  const isMobile = false
  return (
    <HeroWrapper>
      <LeftContent>
        {!hideBreadCrumbs && <Breadcrumb color={title.color} />}
        <LeftComponents
          paddingLeftComponents={paddingLeftComponents}
          hasSmallBorderOnTop={hasSmallBorderOnTop}
        >
          {
             sortComponents(
                title,
                description,
                image,
                button
              )}
        </LeftComponents>
      </LeftContent>
      {(image) && !isMobile && (
        <HeroRightContent>
          {buildImageComponent(image)}
        </HeroRightContent>
      )}
    </HeroWrapper>
  )
}

export default Hero
