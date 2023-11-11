import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { InputFileProps } from './'

export const InputFileWrapper = styled.div.attrs({
  className: 'InputFile__Wrapper'
})``

export const Content = styled.div.attrs({
  className: 'InputFile__Content'
})`
  position: relative;
`

export const InputFile = styled.input.attrs({
  type: 'file',
  className: 'InputFile',
  tabIndex: -1
})`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    padding: 1.2rem;
    cursor: pointer;
    color: transparent;
    outline: none;
    visibility: hidden;

    @media (max-width: 320px) {
      &:first-of-type {
        margin-bottom: ${theme.spaces.large};
      }
    }
  `}
`

export const CustomInput = styled.div.attrs({
  className: 'InputFile__CustomInput'
})<Pick<InputFileProps, 'fileName'>>`
  ${({ fileName, theme }) => css`
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: 2fr 17.3rem;
    grid-gap: ${theme.spaces.tiny};
    width: 100%;
    height: 100%;

    ${media.lessThan('medium')`
      grid-template-columns: 2fr 9.8rem;
    `}

    @media (max-width: 320px) {
      grid-template-columns: 1fr;
    }
    #upload-button {
      min-width: auto;
      height: 5.6rem;
      ${media.lessThan('medium')`
        height: 5rem;
        margin: auto 0;
      `}
    }
    ${fileName
      ? css`
          .InputFile__Box {
            font-style: italic;
            color: ${theme.colors.mediumDarkGray2};
          }
        `
      : css`
          .InputFile__Box {
            background-color: ${theme.colors.secondary};
            padding: 0 1rem 0 0;
            ${media.lessThan('medium')`
              .Text {
                font-size: 14px !important;
              }
            `}
          }
        `}
  `}
`

export const Box = styled.div.attrs({
  className: 'InputFile__Box',
  tabIndex: 0
})`
  ${({ theme }) => css`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    justify-content: center;
    padding: ${theme.spaces.xxsmall} ${theme.spaces.xsmall};
    border: none;
    border-radius: ${theme.spaces.xxtiny};
    font-size: ${theme.font.p.size.desktop};
    font-style: italic;
    background-color: ${theme.colors.mediumGray};
    color: ${theme.colors.mediumDarkGray};
    min-height: 5.2rem;

    &:focus {
      outline: 2px solid ${theme.colors.lightBlack};
    }
  `}
`

export const Error = styled.span.attrs({
  className: 'InputFile__Error'
})`
  ${({ theme }) => css`
    position: relative;
    z-index: 3;
    top: ${theme.spaces.xtiny};
    display: block;
    color: ${theme.colors.red};
  `}
`
