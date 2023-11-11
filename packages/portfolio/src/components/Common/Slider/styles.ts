import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div.attrs({
  className: 'Slider'
})`
  ${({ theme }) => css`
    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
    }

    .slick-list {
      position: relative;

      display: block;
      overflow: hidden;

      margin: 0;
      padding: 0;
    }

    .slick-list:focus {
      outline: none;
    }

    .slick-list.dragging {
      cursor: pointer;
      cursor: hand;
    }

    .slick-slider .slick-track,
    .slick-slider .slick-list {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    .slick-track {
      position: relative;
      top: 0;
      left: 0;

      display: block;
    }

    .slick-track:before,
    .slick-track:after {
      display: table;

      content: '';
    }

    .slick-track:after {
      clear: both;
    }

    .slick-loading .slick-track {
      visibility: hidden;
    }

    .slick-slide {
      display: none;
      float: left;

      height: 100%;
      min-height: 1px;
    }

    [dir='rtl'] .slick-slide {
      float: right;
    }

    .slick-slide img {
      display: block;
    }

    .slick-slide.slick-loading img {
      display: none;
    }

    .slick-slide.dragging img {
      pointer-events: none;
    }

    .slick-initialized .slick-slide {
      display: block;
    }

    .slick-loading .slick-slide {
      visibility: hidden;
    }

    .slick-vertical .slick-slide {
      display: block;
    }

    .slick-arrow.slick-hidden {
      display: none;
    }

    .slick-slide > div {
      height: 100%;
      margin: 0 ${theme.spaces.xxsmall};
    }

    .slick-list {
      margin: 0 -${theme.spaces.xxsmall};
    }

    ${media.greaterThan('large')`
    .slick-slide > div {
      margin: 0 ${theme.spaces.tiny};
    }

    .slick-list {
      margin: 0 -${theme.spaces.tiny};
    }
  `}

    .slick-dots.slick-dots-case-studies {
      display: flex !important;
      justify-content: center;
      gap: 1.3rem;
      margin-top: ${theme.spaces.medium};
      list-style: none;
      cursor: pointer;

      li {
        margin: 0;
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${theme.colors.darkGray};
      }

      .slick-active {
        svg {
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`
