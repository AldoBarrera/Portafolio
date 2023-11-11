import { useState } from 'react'
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'
import { UpArrow } from '@styled-icons/boxicons-solid/UpArrow'
import Link from 'next/link'
import parse from 'html-react-parser'
import Button, {
  ButtonProps,
  ButtonsType,
  getUrl
} from 'components/Common/Button'
import Image, { ImageType } from 'components/Common/Image'
import Text from 'components/Common/Text'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import theme from 'styles/theme'
import * as Style from './styles'
import { LiteYouTubeEmbedWrapper } from './stylesYoutubeEmbed'
import useUtmQuery from 'components/Common/Button/hooks/useUtmQuery'

export type MultimediaContentProps = {
  id?: string
  button?: ButtonsType
  buttonProperties?: ButtonProps
  hasButton?: boolean
  titleFirst?: boolean
  hasImage?: boolean
  hasSeeMore?: boolean
  image?: ImageType | string
  invertColumnsOrder?: boolean
  description: string
  title?: string
  video?: string
  spaceMultimediaContentType?: 'small' | 'medium' | 'large' | 'huge'
  spaceTitleTextType?: 'small' | 'medium' | 'large' | 'huge'
  titleSize?: string
  bgColor?: keyof typeof theme.colors
  hasBorderTop?: boolean
  fullHeight?: boolean
  fullWidth?: boolean
  fullWidthMobile?: boolean
  fullHeightMobile?: boolean
  withoutBorder?: boolean
  subTitle?: string
  isLastItem?: boolean
  hasTarget?: boolean
  alt?: string
  hideImageInMobile?: boolean
  borderImageRadius?: string
}

function MultimediaContent({
  id,
  button,
  titleFirst = false,
  hasSeeMore = false,
  image,
  invertColumnsOrder = false,
  description,
  title,
  video,
  spaceMultimediaContentType,
  spaceTitleTextType = 'large',
  titleSize,
  bgColor,
  hasBorderTop,
  fullWidth = false,
  subTitle,
  isLastItem = false,
  buttonProperties,
  hasTarget = false,
  alt,
  hideImageInMobile,
  borderImageRadius = '0 0 0 100px'
}: MultimediaContentProps) {
  const [showSeeMoreContent, setShowSeeMoreContent] = useState(false)
  const utm = useUtmQuery()
  return (
    <Style.MultimediaContentWrapper
      id={id}
      hasButton={button != undefined}
      hasImage={image != undefined}
      showSeeMoreContent={showSeeMoreContent}
      titleFirst={titleFirst}
      invertColumnsOrder={invertColumnsOrder}
      title={title}
      subTitle={subTitle}
      spaceTitleTextType={spaceTitleTextType}
      hasSeeMore={hasSeeMore}
      bgColor={bgColor}
      hasBorderTop={hasBorderTop}
      isLastItem={isLastItem}
      hideImageInMobile={hideImageInMobile}
    >
      {title && (
        <Style.Title
          invertColumnsOrder={invertColumnsOrder}
          spaceTitleTextType={spaceTitleTextType}
          titleSize={titleSize}
          fullWidth={fullWidth}
        >
          <Text type="h2">{title}</Text>
        </Style.Title>
      )}

      {subTitle && (
        <Style.SubTitle
          invertColumnsOrder={invertColumnsOrder}
          spaceTitleTextType={spaceTitleTextType}
          fullWidth={fullWidth}
        >
          <Text type="h3">{subTitle}</Text>
        </Style.SubTitle>
      )}

      {video && (
        <Style.VideoWrapper
          bgColor={bgColor}
          titleFirst={titleFirst}
          spaceMultimediaContentType={spaceMultimediaContentType}
          invertColumnsOrder={invertColumnsOrder}
        >
          <Style.Video>
            <LiteYouTubeEmbedWrapper>
              <LiteYouTubeEmbed
                id={video}
                title={title}
                params="mute=1"
                noCookie={true}
                adNetwork={true}
                muted={true}
                webp
              />
            </LiteYouTubeEmbedWrapper>
          </Style.Video>
        </Style.VideoWrapper>
      )}

      {image && (
        <Style.Image
          spaceMultimediaContentType={spaceMultimediaContentType}
          invertColumnsOrder={invertColumnsOrder}
          hasImage={image != undefined}
          bgColor={bgColor}
          hideImageInMobile={hideImageInMobile}
          borderImageRadius={borderImageRadius}
        >
          <Image
            src={typeof image === 'string' ? image : image?.file?.url}
            alt={alt ? alt : title}
            priority={false}
          />
        </Style.Image>
      )}

      {description && (
        <Style.Text
          invertColumnsOrder={invertColumnsOrder}
          spaceTitleTextType={spaceTitleTextType}
          fullWidth={fullWidth}
        >
          <Text>{parse(description)}</Text>
        </Style.Text>
      )}

      {button?.label && (
        <Style.ButtonWrapper
          invertColumnsOrder={invertColumnsOrder}
          spaceTitleTextType={spaceTitleTextType}
        >
          <Link
            href={
              button.configuration?.conditional
                ? getUrl(button, utm)
                : button?.url
            }
            passHref
            prefetch={false}
          >
            <Button
              as="a"
              target={hasTarget ? '_blank' : '_self'}
              label={button?.label}
              size={'large'}
              sizeMobile={'medium'}
              customButtonVariant={{
                variant: 'isOutlinePrimary'
              }}
              customButtonVariantHover={{
                variant: 'isPrimaryNormal'
              }}
              fullWidthMobile={true}
              {...buttonProperties}
            />
          </Link>
        </Style.ButtonWrapper>
      )}

      {hasSeeMore && (
        <Style.SeeMore>
          <Button onClick={() => setShowSeeMoreContent(!showSeeMoreContent)}>
            {showSeeMoreContent ? 'See less' : 'See more'}
            {showSeeMoreContent ? (
              <UpArrow size={17} />
            ) : (
              <DownArrow size={17} />
            )}
          </Button>
        </Style.SeeMore>
      )}
    </Style.MultimediaContentWrapper>
  )
}

export default MultimediaContent
