import { StyleMixProps } from './'
import styled, { css } from 'styled-components'

export const CustomStyles = styled.div.attrs({
  className: 'Container'
})<StyleMixProps>`
  ${({ theme, customStyle }) => css`
    ${customStyle &&
    css`
      padding: ${customStyle.padding};
      background-color: ${theme.colors[customStyle.bgColor]};
      background-image: url('https://${customStyle?.bgImage?.file?.url}');
      background-size: contain;
    `}
  `}
`
