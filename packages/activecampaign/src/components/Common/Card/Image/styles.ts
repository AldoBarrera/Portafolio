import styled, { css } from 'styled-components'
import { ImageProps } from '.'
import media from 'styled-media-query'

export type ImagePropsWrapper = Pick<
  ImageProps,
  'verticalAlign' | 'isSlider' | 'isIcon' | 'padding' | 'centered'
>

export const Image = styled.div.attrs({
  className: 'Image'
})<ImagePropsWrapper>`
  ${({ isSlider, isIcon, padding, centered }) => css`
  position:relative;
  overflow: hidden;
    border-radius: 0.28571429rem 0.28571429rem 0 0 !important;
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
    img {
      border: none;
      display: block;
      width: 100%;
      height: ${isSlider ? '100%' : 'auto'};
      border-radius: inherit;
      object-fit: ${isSlider ? 'cover' : ''};
      width: ${isIcon ? '36px' : ''};
      height: ${isIcon ? '36px' : ''};
    }
  `}
`

export const linkProduct = styled.div.attrs({
  className: 'Image_linkProduct'
})`
  ${() => css`
    background-color: rgba(0,0,0,0.85);
    position: absolute;
    bottom: -22px;
    width: 100%;
    transition: .2s ease-in-out;
    color: white;
    a{
      text-decoration: none;
      font-family: Roboto;
      color: white;
    }
  `}
`
