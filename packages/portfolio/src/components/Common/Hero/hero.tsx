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
import DynamicSection from 'utils/DynamicComponent'
import { HeroProps } from '.'
import { ButtonsType } from 'components/Common/Button'

export const buildImageComponent = (image: ImageType | string) => {
  if (typeof image === 'string') {
    return (
      <Image loader={() => image} src={image} sizes={'24vw'} priority={true} />
    )
  } else {
    return (
      <Image src={image?.file?.url} alt={image.description} priority={true} />
    )
  }
}

export const sortComponents = (
  title: TextProps,
  description: TextProps,
  additionalRightComponent,
  image: ImageType | string,
  button: ButtonsType
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
    )
  ]

  const additionalComponent = (additionalRightComponent || image) && (
    <AdditionalRightComponent key="aditional_component">
      {additionalRightComponent
        ? DynamicSection(additionalRightComponent)
        : buildImageComponent(image)}
    </AdditionalRightComponent>
  )

  const order =
    additionalRightComponent && additionalRightComponent.order
      ? additionalRightComponent.order
      : 0
  arrayComponents.splice(order, 0, additionalComponent)

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
  additionalRightComponent,
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
          {additionalLeftComponent
            ? DynamicSection(additionalLeftComponent)
            : sortComponents(
                title,
                description,
                additionalRightComponent,
                image,
                button
              )}
        </LeftComponents>
      </LeftContent>
      {(additionalRightComponent || image) && !isMobile && (
        <HeroRightContent>
          {additionalRightComponent
            ? DynamicSection(additionalRightComponent)
            : buildImageComponent(image)}
        </HeroRightContent>
      )}
    </HeroWrapper>
  )
}

export default Hero
