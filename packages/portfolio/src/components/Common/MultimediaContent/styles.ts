import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MultimediaContentProps } from '.'

type MultimediaContentWrapperProps = {
  showSeeMoreContent?: boolean
}

const textSpacesModifiers = {
  small: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 4.17%;
        `
      : css`
          margin-right: 4.17%;
          margin-left: 0;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `,
  medium: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 8.34%;
        `
      : css`
          margin-right: 0
          margin-left: 0;
          max-width: 91.66%;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `,

  large: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 16.67%;
        `
      : css`
          margin-right: 0;
          margin-left: 0;
          max-width: 83.33%;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `,

  huge: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 40%;
        `
      : css`
          margin-right: 0;
          margin-left: 0;
          max-width: 60%;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `
}

const videoSpacesModifiers = {
  small: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          max-width: 91.67%;
        `
      : css`
          max-width: 100%;
        `}
  `,

  medium: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 0;
          max-width: 84%;
        `
      : css`
          margin-right: 0;
          margin-left: 16%;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `,

  large: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 0;
          max-width: 75%;
        `
      : css`
          margin-right: 0;
          margin-left: 25%;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `,

  huge: (invertColumnsOrder = false) => css`
    ${invertColumnsOrder
      ? css`
          margin-right: 0;
          margin-left: 0;
          max-width: 60%;
        `
      : css`
          margin-right: 0;
          margin-left: 40%;
        `}
    ${media.lessThan('medium')`
      margin: 0;
    `}
  `
}

export const MultimediaContentWrapper = styled.div.attrs({
  className: 'MultimediaContent__Wrapper'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      | 'hasSeeMore'
      | 'hasButton'
      | 'hasImage'
      | 'invertColumnsOrder'
      | 'titleFirst'
      | 'title'
      | 'subTitle'
      | 'spaceTitleTextType'
      | 'bgColor'
      | 'hasBorderTop'
      | 'isLastItem'
      | 'hideImageInMobile'
    >
>`
  ${({
    theme,
    showSeeMoreContent,
    hasButton,
    hasImage,
    invertColumnsOrder,
    titleFirst,
    title,
    subTitle,
    spaceTitleTextType,
    hasSeeMore,
    bgColor,
    hasBorderTop,
    isLastItem,
    hideImageInMobile
  }) => css`
    position: relative;
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    background: ${hasImage
      ? bgColor
        ? theme.colors[bgColor]
        : theme.colors.secondary
      : bgColor
      ? `linear-gradient(90deg,${theme.colors.secondary} 40%,${theme.colors[bgColor]} 0%);`
      : `linear-gradient(90deg,${theme.colors.secondary} 40%,${theme.colors.secondary} 0%);`};
    ${media.lessThan('medium')`
      background: ${
        hasImage
          ? bgColor
            ? theme.colors[bgColor]
            : theme.colors.secondary
          : theme.colors.secondary
      };
      .Wrapper_Container {
        ${
          hasBorderTop &&
          css`
            border-top: 1px solid ${theme.colors.gray4};
          `
        }
      }
        z-index: 2;
        overflow: hidden;
        height: ${hasSeeMore ? '680px' : 'auto'};
        display: flex;
        flex-direction: column;
        ${
          showSeeMoreContent &&
          css`
            height: 100%;
            .MultimediaContent__SeeMore {
              background-image: none;
            }
          `
        }
        .MultimediaContent__Title {
          order: ${titleFirst ? 0 : 2};
          ${
            !titleFirst &&
            css`
              padding: 0 ${theme.spaces.xsmall};
              padding-top: ${theme.spaces.medium};
            `
          };
        }
        .MultimediaContent__Video {
          order: ${titleFirst ? 2 : 1};
        }
        .MultimediaContent__Image {
          order: ${titleFirst ? 2 : 1};
          padding: ${theme.spaces.xsmall} 0;
          ${
            !titleFirst &&
            css`
              padding: 0;
            `
          };
        }
        .MultimediaContent__SubTitle {
          order: 3;
          ${
            !titleFirst &&
            css`
              padding: 0 ${theme.spaces.xsmall};
            `
          };
        }
        .MultimediaContent__Text {
          order: 3;
          padding-bottom: ${isLastItem && !hasButton ? theme.spaces.large : 0};
          ${
            !titleFirst &&
            css`
              padding: 0 ${theme.spaces.xsmall}
                ${isLastItem && !hasButton
                  ? theme.spaces.xlarge
                  : theme.spaces.medium}
                ${theme.spaces.xsmall};
            `
          };
          ${
            hideImageInMobile &&
            css`
              padding-top: ${theme.spaces.medium} !important;
            `
          }
        }
        .MultimediaContent__VideoWrapper {
          padding: ${theme.spaces.xsmall} 0;
          ${
            !titleFirst &&
            css`
              padding: ${theme.spaces.medium} ${theme.spaces.xsmall};
            `
          };
        }
        .VideoImage__ButtonWrapper {
          order: 4;
          padding: ${theme.spaces.medium} 0
            ${isLastItem ? theme.spaces.large : 0} 0;
          ${
            !titleFirst &&
            css`
              padding: 0 ${theme.spaces.xsmall}
                ${isLastItem ? theme.spaces.xlarge : theme.spaces.medium}
                ${theme.spaces.xsmall};
            `
          };
        }
    `}

    ${media.greaterThan('medium')`
      .Wrapper_Container {
        ${
          hasBorderTop &&
          css`
            border-top: 1px solid ${theme.colors.gray4};
          `
        }
      }
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        ${
          invertColumnsOrder
            ? `
              ${
                subTitle
                  ? `
                    grid-template-areas:
                      "${hasImage && title ? 'image' : 'video'} title "
                      "${hasImage && subTitle ? 'image' : 'video'} subtitle "
                      "${hasImage ? 'image' : 'video'} text "
                      "${
                        hasButton && hasImage
                          ? 'image button'
                          : hasButton
                          ? 'video button'
                          : '. .'
                      }";
                  `
                  : `
                    grid-template-areas:
                      "${hasImage && title ? 'image' : 'video'} title "
                      "${hasImage ? 'image' : 'video'} text "
                      "${
                        hasButton && hasImage
                          ? 'image button'
                          : hasButton
                          ? 'video button'
                          : '. .'
                      }";
                  `
              }
          `
            : `
            ${
              subTitle
                ? `
                  grid-template-areas:
                    "title ${hasImage ? 'image' : 'video'}"
                    "subtitle ${hasImage ? 'image' : 'video'}"
                    "text ${hasImage ? 'image' : 'video'}"
                    "${
                      hasButton && hasImage
                        ? 'button image'
                        : hasButton
                        ? 'button video'
                        : '. .'
                    }";
                `
                : `
                  grid-template-areas:
                    "title ${hasImage ? 'image' : 'video'}"
                    "text ${hasImage ? 'image' : 'video'}"
                    "${
                      hasButton && hasImage
                        ? 'button image'
                        : hasButton
                        ? 'button video'
                        : '. .'
                    }";
                `
            }
          `
        }

        .VideoImage__ButtonWrapper {
          grid-area: button;
          justify-self: start;
          ${
            !!spaceTitleTextType &&
            textSpacesModifiers[spaceTitleTextType](invertColumnsOrder)
          }
        }
    `}
  `}
`

export const Title = styled.div.attrs({
  className: 'MultimediaContent__Title'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      'spaceTitleTextType' | 'invertColumnsOrder' | 'titleSize' | 'fullWidth'
    >
>`
  ${({
    spaceTitleTextType = 'small',
    invertColumnsOrder,
    fullWidth,
    theme
  }) => css`
    ${media.greaterThan('medium')`
      grid-area: title;
      margin-top: auto;
      ${
        !!spaceTitleTextType &&
        textSpacesModifiers[spaceTitleTextType](invertColumnsOrder)
      }
      ${
        fullWidth &&
        css`
          margin-left: ${theme.spaces.large};
        `
      }
    `}
  `}
`

export const SubTitle = styled.div.attrs({
  className: 'MultimediaContent__SubTitle'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      'spaceTitleTextType' | 'invertColumnsOrder' | 'fullWidth'
    >
>`
  ${({
    spaceTitleTextType = 'small',
    invertColumnsOrder,
    fullWidth,
    theme
  }) => css`
    ${media.greaterThan('medium')`
      grid-area: subtitle;
      margin-top: auto;
      ${
        !!spaceTitleTextType &&
        textSpacesModifiers[spaceTitleTextType](invertColumnsOrder)
      }
      ${
        fullWidth &&
        css`
          margin-left: ${theme.spaces.large};
        `
      }
    `}
  `}
`

export const Video = styled.div.attrs({
  className: 'MultimediaContent__Video'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      'spaceMultimediaContentType' | 'invertColumnsOrder'
    >
>`
  ${() => css`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  `}
`

export const VideoWrapper = styled.div.attrs({
  className: 'MultimediaContent__VideoWrapper'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      | 'bgColor'
      | 'titleFirst'
      | 'spaceMultimediaContentType'
      | 'invertColumnsOrder'
    >
>`
  ${({
    theme,
    bgColor,
    titleFirst,
    spaceMultimediaContentType,
    invertColumnsOrder
  }) => css`
    grid-area: video;
    ${media.lessThan('medium')`
      background-color: ${
        bgColor && !titleFirst ? theme.colors[bgColor] : theme.colors.secondary
      };
    `}
    ${media.greaterThan('medium')`
      ${
        !!spaceMultimediaContentType &&
        videoSpacesModifiers[spaceMultimediaContentType](invertColumnsOrder)
      }
    `}
  `}
`

export const Image = styled.div.attrs({
  className: 'MultimediaContent__Image'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      | 'spaceMultimediaContentType'
      | 'invertColumnsOrder'
      | 'hasImage'
      | 'bgColor'
      | 'hideImageInMobile'
      | 'borderImageRadius'
    >
>`
  ${({
    theme,
    spaceMultimediaContentType = 'small',
    invertColumnsOrder,
    bgColor,
    hideImageInMobile,
    borderImageRadius
  }) => css`
    background-color: ${bgColor
      ? theme.colors[bgColor]
      : theme.colors.secondary};
    ${media.greaterThan('medium')`
      max-width: 100%;
      border-radius: ${borderImageRadius};
      overflow: hidden;
      width:100%;
      grid-area: image;
      ${
        !!spaceMultimediaContentType &&
        videoSpacesModifiers[spaceMultimediaContentType](invertColumnsOrder)
      }
    `}
    ${media.lessThan('medium')`
      ${
        hideImageInMobile &&
        css`
          display: none;
        `
      }
      width: 100%;
    `}
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const Text = styled.div.attrs({
  className: 'MultimediaContent__Text'
})<
  MultimediaContentWrapperProps &
    Pick<
      MultimediaContentProps,
      'spaceTitleTextType' | 'invertColumnsOrder' | 'fullWidth'
    >
>`
  ${({
    spaceTitleTextType = 'small',
    invertColumnsOrder,
    fullWidth,
    theme
  }) => css`
    ${media.greaterThan('medium')`
      grid-area: text;
      ${
        !!spaceTitleTextType &&
        textSpacesModifiers[spaceTitleTextType](invertColumnsOrder)
      }
      ${
        fullWidth &&
        css`
          margin-left: ${theme.spaces.large};
        `
      }
    `}
  `}
`

export const ButtonWrapper = styled.div.attrs({
  className: 'VideoImage__ButtonWrapper'
})<
  MultimediaContentWrapperProps &
    Pick<MultimediaContentProps, 'spaceTitleTextType' | 'invertColumnsOrder'>
>`
  ${({ spaceTitleTextType = 'small', invertColumnsOrder }) => css`
    width: 100%;
    ${media.greaterThan('medium')`
      ${
        !!spaceTitleTextType &&
        textSpacesModifiers[spaceTitleTextType](invertColumnsOrder)
      }
    `}
  `}
`

export const SeeMore = styled.div.attrs({
  className: 'MultimediaContent__SeeMore'
})`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    z-index: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 202px;
    background-image: linear-gradient(to top, #ffffff, #ffffff00);
    padding-bottom: ${theme.spaces.xxsmall};
    ${media.greaterThan('medium')`
        display: none;
      `}

    .Button {
      display: flex;
      align-items: center;
      line-height: 1;

      svg {
        margin-left: 6px;
        transform: translateY(-1px);
      }
    }
  `}
`
