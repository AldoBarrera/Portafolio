import styled, { css } from 'styled-components'
import { CustomStyles } from 'components/Common/Style/style'
import { BreadcrumbProps } from 'components/Common/Breadcrumb'

export const BreadcrumbWrapper = styled(CustomStyles)<BreadcrumbProps>`
  ${({ theme, color }) => css`
      padding: 20px 0px;
      ol {
        list-style: none;
        display: flex;
        li {
          &:not(:first-of-type) {
            &::before {
              content: '>';
              margin: 0 ${theme.spaces.xtiny};
              color: ${color ? theme.colors[color] : theme.colors.black};
            }
          }
        }

        a {
          font-size: ${theme.font.p.size.desktop};
          text-decoration: none;
          text-transform: capitalize;
          font-family: Nunito;
          color: ${color ? theme.colors[color] : theme.colors.black};
        }
      }
    }
  `}
`
