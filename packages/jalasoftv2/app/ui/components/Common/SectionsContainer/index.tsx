import { FlexType } from '@/app/ui/components/Common/ContainerV3'
import { ImageType } from '@/app/ui/components/Common/ImageV2'
import css from './SectionsContainer.module.css'
import DynamicSection, {
  SectionProps
} from '@/app/ui/components/Common/DynamicComponent'

export type mobileConfigProps = {
  padding?: string
  margin?: string
  image?: ImageType
  flex?: FlexType
}
export type SectionsContainerProps = {
  children?: React.ReactNode
  id?: string
  padding?: string
  margin?: string
  flex?: FlexType
  mobileConfig?: mobileConfigProps
  list?: SectionProps[]
  configuration?: any
  style?: any
}

function SectionsContainer({
  children,
  padding,
  margin,
  list,
  style = {},
  flex,
  mobileConfig
}: Readonly<SectionsContainerProps>) {
  return (
    <div
      className={css.Wrapper}
      style={
        {
          '--sectioncontainer-flex-direction': flex?.flexDirection,
          '--sectioncontainer-flex-direction-mobile':
            mobileConfig?.flex?.flexDirection,
          '--sectioncontainer-flex-align': flex?.alignItems,
          '--sectioncontainer-flex-align-mobile':
            mobileConfig?.flex?.alignItems,
          '--sectioncontainer-flex-justify': flex?.justifyContent,
          '--sectioncontainer-flex-justify-mobile':
            mobileConfig?.flex?.justifyContent,
          '--sectioncontainer-flex-gap': flex?.gap,
          '--sectioncontainer-flex-gap-mobile': mobileConfig?.flex?.gap,
          '--sectioncontainer-margin': margin,
          '--sectioncontainer-margin-mobile': mobileConfig?.margin,
          '--sectioncontainer-padding': padding,
          '--sectioncontainer-padding-mobile': mobileConfig?.padding,
          ...style
        } as React.CSSProperties
      }
    >
      {list && list?.map((block, index) => DynamicSection(block, index))}
      {children}
    </div>
  )
}

export default SectionsContainer
