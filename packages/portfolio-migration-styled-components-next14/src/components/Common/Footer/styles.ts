import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const FooterWrapper = styled.footer.attrs({
  className: 'Footer'
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.black2};

    > * {
      color: ${theme.colors.white};
    }
  `}
`

const FooterLogo = styled.div.attrs({
  className: 'Footer__Logo'
})`
  ${({ theme }) => css`
    display: flex;

    img {
      height: 35px !important;
      filter: grayscale(1) invert(100%) brightness(200%) contrast(200%);
      ${media.lessThan('medium')`
        height: ${theme.spaces.medium} !important;
      `}
      ${media.lessThan('small')`
        height: ${theme.spaces.small} !important;
      `}
    }
  `}
`

const FooterDivider = styled.div.attrs({
  className: 'Footer__Divider'
})`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.darkwhite};
    margin-bottom: ${theme.spaces.tiny};
    ${media.lessThan('medium')`
      margin-bottom: ${theme.spaces.xsmall};
    `}
  `}
`

const FooterSocialIcons = styled.div.attrs({
  className: 'Footer__SocialIcons'
})`
  ${({ theme }) => css`
    display: flex;
    margin-left: auto;
    gap: ${theme.spaces.xsmall};
    ${media.lessThan('small')`
      gap: 8px;
      .Button {
        height: 3rem;
        padding: 0.5rem;
      }
    `}
  `}
`

const FooterCategoryMobile = styled.div.attrs({
  className: 'Footer__categoryMobile'
})`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spaces.xsmall};
    ${media.greaterThan('medium')`
      display: none;
    `}
    a {
      text-decoration: none;
      color: white;
    }
  `}
`

const FooterCategory = styled.div.attrs({
  className: 'Footer__category'
})`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.spaces.tiny};
    ${media.lessThan('medium')`
      display: none;
    `}
    a {
      text-decoration: none;
      color: white;
    }
  `}
`

const FooterLogosWrapper = styled.div.attrs({
  className: 'Footer__SocialIcons'
})`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: ${theme.spaces.medium};
  `}
`

const FooterText = styled.div.attrs({
  className: 'Footer__text'
})`
  ${({ theme }) => css`
    font-size: ${theme.font.bMedium.size.desktop};
    ${media.lessThan('medium')`
      font-size: ${theme.font.p.size.desktop};
    `}
  `}
`

export {
  FooterWrapper,
  FooterLogo,
  FooterSocialIcons,
  FooterLogosWrapper,
  FooterDivider,
  FooterCategory,
  FooterCategoryMobile,
  FooterText
}
