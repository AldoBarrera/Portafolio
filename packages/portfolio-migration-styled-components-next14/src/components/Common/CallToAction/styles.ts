import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { CallToActionProps } from '.'

export const CallToActionWrapper = styled.div.attrs({
  className: 'CallToAction__Wrapper'
})<
  Pick<
    CallToActionProps,
    'hasDescriptionLeftMobile' | 'hasTwoColums' | 'hasButtonLabel' | 'bgColor'
  >
>`
  ${({
    theme,
    hasDescriptionLeftMobile,
    hasTwoColums,
    hasButtonLabel,
    bgColor
  }) => css`
    ${hasDescriptionLeftMobile
      ? css`
          p:nth-child(2) {
            margin: 0 30rem;
            @media (max-width: 1260px) {
              margin: 0 18rem;
            }
            @media (max-width: 1045px) {
              margin: 0 8rem;
            }
            ${media.lessThan('medium')`
              margin: 0;
            `}
          }
          .Text__H2,
          .Text__P {
            ${media.lessThan('medium')`
              text-align: left;
            `}
          }
        `
      : css`
          p:nth-child(2) {
            margin: 0 auto;
            max-width: 1024px;
          }
        `}

    ${hasButtonLabel &&
    css`
      p:nth-child(2) {
        margin-bottom: ${theme.spaces.large};
        ${media.lessThan('medium')`
          margin-bottom: ${theme.spaces.medium};
          padding: 0;
        `}
      }
    `}

    ${hasTwoColums
      ? css`
          .CallToAction__Content {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 20px;
            .CallToAction__Info {
              grid-column-end: span 7;
            }
            .CallToAction__Button {
              grid-column: 9 / span 4 !important;
              margin: auto 0;
              .Button {
                width: 100%;
              }
            }
            p:nth-child(2) {
              margin-bottom: 0;
            }
            ${media.lessThan('medium')`
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: ${theme.spaces.medium};
              .CallToAction__Info, .CallToAction__Button {
                grid-column-end: unset !important;
                grid-column: unset !important;
              }
            `}
          }
        `
      : css`
          .CallToAction__Content {
            text-align: center;
          }
        `}
    background-color: ${bgColor ? theme.colors[bgColor] : theme.colors.gray4};
  `}
`

export const CallToActionContent = styled.div.attrs({
  className: 'CallToAction__Content'
})``

export const CallToActionInfo = styled.div.attrs({
  className: 'CallToAction__Info'
})<Pick<CallToActionProps, 'contentLeft' | 'contentRight'>>`
  ${({ contentLeft, contentRight }) => css`
    white-space: pre-line;
    ${contentLeft &&
    css`
      text-align: left;
      p:nth-child(2) {
        margin-left: 0;
        margin-right: 0;
      }
    `}
    ${contentRight &&
    css`
      text-align: right;
      p:nth-child(2) {
        margin-left: 0;
        margin-right: 0;
      }
    `}
  `}
`

export const CallToActionButton = styled.div.attrs({
  className: 'CallToAction__Button'
})`
  z-index: 0;
`
