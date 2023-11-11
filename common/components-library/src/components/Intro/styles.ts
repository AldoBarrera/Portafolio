import styled, { css } from 'styled-components'

const IntroWrapper = styled.div.attrs({
  className: 'Intro__Wrapper'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: ${theme.spacings.xlarge} 0;

    h1 {
      color: ${theme.colors.secondary};
    }
  `}
`

export { IntroWrapper }
