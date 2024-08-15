import React from 'react'
import Breadcrumb from '@/app/ui/components/Common/BreadcrumbV2'
import ContainerV3, {
  ContainerV3Props
} from '@/app/ui/components/Common/ContainerV3'
import SectionsContainerProps from '@/app/ui/components/Common/SectionsContainer'
import TextV2, { TextV2Props } from '@/app/ui/components/Common/TextV2'
import theme from '@/styles/themeV2'

import { getText } from '@/utils/app'
import DynamicComponent from '@/app/ui/components/Common/DynamicComponent'
import css from './HeroV2.module.css'
import { ImageProps } from '@/app/ui/components/Common/ImageV2'
import Image from '@/app/ui/components/Common/HeroImage'

export interface HeroV2Props {
  title?: TextV2Props
  subtitle?: TextV2Props
  description?: TextV2Props
  contentAlign?: 'left' | 'center' | 'right'
  hasTopBorder?: boolean
  topBorderColor?: keyof typeof theme.colors
  children?: any
  additionalContent?: any
  contentRightToBottom?: boolean
  hideBreadCrumbs?: boolean
  container?: ContainerV3Props
  textContainer?: ContainerV3Props
  path?: string
  logo: ImageProps
}

function HeroV2({
  title,
  subtitle,
  description,
  hasTopBorder = true,
  topBorderColor,
  contentAlign,
  children,
  additionalContent,
  contentRightToBottom,
  hideBreadCrumbs,
  container = {},
  textContainer = {},
  path,
  logo
}: Readonly<HeroV2Props>) {
  const setGridAreas = () => {
    if (contentAlign === 'center') {
      return '"text"'
    }
    if (contentAlign === 'left') {
      return '"text" "children"'
    }
    if (contentAlign === 'right') {
      return '"children" "text"'
    }
  }

  const setGridAreasMobile = () => {
    if (contentAlign === 'center') {
      return '"text"'
    }
    if (contentAlign === 'left') {
      return contentRightToBottom ? '"text" "children"' : '"children" "text"'
    }
    if (contentAlign === 'right') {
      return contentRightToBottom ? '"children" "text"' : '"text" "children"'
    }
  }

  return (
    <ContainerV3
      style={container.style}
      padding={`0 0 0 ${theme.spaces.xlarge}`}
      {...container}
      {...container?.configuration}
    >
      <div
        className={css.Container}
        style={
          {
            '--herov2-text-align': contentAlign,
            '--herov2-grid-areas': setGridAreas(),
            '--herov2-grid-areas-mobile': setGridAreasMobile()
          } as React.CSSProperties
        }
      >
        <div className={css.ContentContainer}>
          {!hideBreadCrumbs && (
            <Breadcrumb title={title as TextV2Props} path={path} />
          )}
          {logo && <Image {...logo} />}
          <SectionsContainerProps
            {...textContainer}
            {...textContainer?.configuration}
            style={{ ...textContainer.style }}
          >
            {subtitle && (
              <TextV2 key="subtitle" {...(subtitle as TextV2Props)}>
                {getText(subtitle)}
              </TextV2>
            )}
            {title && (
              <TextV2
                style={title.style}
                hasTopBorder={hasTopBorder}
                topBorderColor={topBorderColor}
                {...(title as TextV2Props)}
                classes={css.Title}
              >
                {getText(title)}
              </TextV2>
            )}
            {description && (
              <TextV2
                key="description"
                classType="body1"
                classes={`${css.Description}`}
                {...(description as TextV2Props)}
              >
                {getText(description)}
              </TextV2>
            )}
            {additionalContent && DynamicComponent(additionalContent)}
          </SectionsContainerProps>
        </div>
        {contentAlign !== 'center' && (
          <div className={css.ChildrenColumn}>
            {children && DynamicComponent(children)}
          </div>
        )}
      </div>
    </ContainerV3>
  )
}

export default HeroV2
