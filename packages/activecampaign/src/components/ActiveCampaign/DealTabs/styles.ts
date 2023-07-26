import styled from 'styled-components'
import media from 'styled-media-query'

export const OpenPositionTabsWrapper = styled.div.attrs({
  className: 'OpenPositionTabs__Wrapper'
})``

export const OpenPositionTabsContent = styled.div.attrs({
  className: 'OpenPositionTabs__Content'
})`
  ${media.greaterThan('medium')`
    .AccordionPositionTabs__Wrapper {
      display: none;
    }
  `}
  ${media.lessThan('medium')`
    .VerticalPositionTabs__Wrapper {
      display: none;
    }
  `}
`
