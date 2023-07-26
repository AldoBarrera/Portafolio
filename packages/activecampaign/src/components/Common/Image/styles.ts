import styled, { css } from 'styled-components'
import { ImageProps } from '.'
import media from 'styled-media-query'

export type ImagePropsWrapper = Pick<
  ImageProps,
  'isSlider' | 'isIcon' | 'padding' | 'centered' | 'borderRaidus'
>

const BaseImage = styled.div.attrs({
  className: 'Image'
})<ImagePropsWrapper>`
  ${({ isSlider, isIcon, padding, centered, borderRaidus }) => css`
    ${borderRaidus &&
    css`
      border-radius: ${borderRaidus} !important;
    `}
    border-top: none !important;
    width: ${isSlider ? '100%' : ''};
    height: ${isIcon ? '60px' : ''};
    padding-left: ${isIcon ? (padding ? padding : '30px') : ''};
    padding-top: ${isIcon ? (padding ? padding : '30px') : ''};
    ${centered &&
    isIcon &&
    css`
      ${media.greaterThan('medium')`
            padding-left: 0;
          `}
    `}
    span:first-of-type {
      position: initial !important;
      display: flex !important;
    }
    img {
      position: initial !important;
      border: none !important;
      display: block !important;
      width: 100% !important;
      height: ${isSlider ? '100%' : 'auto'} !important;
      border-radius: inherit !important;
      object-fit: ${isSlider ? 'cover !important' : ''};
      width: ${isIcon ? '36px !important' : ''};
      height: ${isIcon ? '36px !important' : ''};
      min-width: unset !important;
      min-height: unset !important;
    }
  `}
`

export const Image = styled(BaseImage)<ImagePropsWrapper>`
  ${() => css``}
`
