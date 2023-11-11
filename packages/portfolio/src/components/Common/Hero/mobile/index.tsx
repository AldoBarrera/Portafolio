import { LeftComponents } from '../styles'
import { AdditionalRightComponentMobile } from './styles'
import Text, { TextProps } from 'components/Common/Text'
import { HeroProps } from '../heroDef'
import DynamicSection from 'utils/DynamicComponent'
import { ButtonsType } from 'components/Common/Button'
import { ImageType } from 'components/Common/Image'
import ButtonLink from 'components/Common/Button/ButtonLink'
import { buildImageComponent } from '../hero'

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
        text={description?.text}
        {...description}
        {...description?.configuration}
      />
    ),
    button && (
      <div key="button">
        <ButtonLink {...button} />
      </div>
    )
  ]

  const additionalComponent = (additionalRightComponent || image) && (
    <AdditionalRightComponentMobile key="aditional_component">
      {additionalRightComponent
        ? DynamicSection(additionalRightComponent)
        : buildImageComponent(image)}
    </AdditionalRightComponentMobile>
  )
  const order =
    additionalRightComponent && additionalRightComponent.order
      ? additionalRightComponent.order
      : 0
  arrayComponents.splice(order, 0, additionalComponent)

  return arrayComponents
}

function HeroMobile({
  title,
  hasSmallBorderOnTop = true,
  description,
  image,
  button,
  additionalLeftComponent,
  additionalRightComponent,
  paddingLeftComponents = '0',
  style
}: HeroProps) {
  return (
    <LeftComponents
      paddingLeftComponents={paddingLeftComponents}
      hasSmallBorderOnTop={hasSmallBorderOnTop}
      style={style}
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
  )
}

export default HeroMobile
