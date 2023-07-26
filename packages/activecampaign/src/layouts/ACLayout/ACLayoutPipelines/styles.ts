import styled, { css } from 'styled-components'

const ACPipelinesWrapper = styled.main.attrs({
  className: 'ACPipelines__Wrapper'
})`
  ${({ theme }) => css`
    gap: ${theme.spaces.xsmall};
    display: grid;
  `}
`

export { ACPipelinesWrapper }
