import styled, { css } from 'styled-components'

export const SliderSizeWrapper = styled.div.attrs({
  className: 'SliderSize_Wrapper'
})`
  ${({ theme }) => css`
    .slick-next,
    .slick-prev {
      position: absolute;
      top: 40%;
      display: block;
      padding: 0;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 1;
      color: ${theme.colors.darkGray};
      cursor: pointer;
    }

    .slick-next {
      right: -90px;
    }

    .slick-prev {
      left: -90px;
    }

    .Slider {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      @media (min-width: 1314px) {
        width: 90%;
      }
    }
    .slick-slide {
      height: 100%;
    }
    .slick-track {
      display: flex;
      justify-content: space-between;
    }
  `}
`
