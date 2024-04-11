import styled, { css } from 'styled-components'
import { CardProps } from '.'

export type ContentProps = Pick<
  CardProps,
  | 'size'
  | 'isSlider'
  | 'color'
  | 'padding'
  | 'height'
  | 'hasBorder'
  | 'centered'
>
const cardModifiers = {
  xxsmall: () => css`
    width: 150px;
  `,

  xsmall: () => css`
    width: 290px;
  `,

  small: () => css`
    width: 310px;
  `,
  medium: () => css`
    width: 426px;
  `,
  large: () => css`
    width: 650px;
  `,
  xlarge: () => css`
    width: 870px;
  `,
  xxlarge: () => css`
    width: 870px;
  `,
  huge: () => css`
    width: 870px;
  `,
  xhuge: () => css`
    width: 290px;
  `,
  xxhuge: () => css`
    width: 870px;
  `,
  auto: () => css`
    width: 100%;
  `
}
export const Card = styled.div.attrs({
  className: 'Card'
})<CardProps>`
  ${({
    size,
    isHorizontal,
    isSlider,
    color,
    padding,
    height,
    hasBorder = true,
    theme,
    centered,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    isHorizontalInverted
  }) => css`
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: ${isHorizontal
      ? isHorizontalInverted
        ? 'row-reverse'
        : 'row'
      : 'column'};
    min-height: 0;
    background: ${color ? theme.colors[color] : theme.colors.secondary};
    border: none;
    border-radius: 0.28571429rem;
    box-shadow: ${hasBorder ? '0 2px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5' : ''};
    padding: ${padding ? padding : 0};
    ${!!size && cardModifiers[size as keyof typeof cardModifiers]()}
    height: ${isSlider ? (height ? height : '550px') : '100%'};
    border-top-left-radius: ${borderTopLeftRadius
      ? `${theme.spaces.large}`
      : 0};
    border-top-right-radius: ${borderTopRightRadius
      ? `${theme.spaces.large}`
      : 0};
    border-bottom-right-radius: ${borderBottomRightRadius
      ? `${theme.spaces.large}`
      : 0};
    border-bottom-left-radius: ${borderBottomLeftRadius
      ? `${theme.spaces.large}`
      : 0};
    ${isHorizontal &&
    css`
      .Image {
        img {
          max-height: 208px !important;
          max-width: unset !important;
          width: 100%;
        }
        align-self: center;
        padding-right: ${theme.spaces.tiny};
      }
    `}

    ${centered &&
    css`
      align-items: center;
    `}
    overflow: hidden;
  `}
`

export const ContentWrapper = styled.div.attrs({
  className: 'Card__ContentWrapper'
})<CardProps>`
  ${({ isHorizontalInverted }) => css`
    ${isHorizontalInverted &&
    css`
      width: 100%;
    `}
  `}
`
