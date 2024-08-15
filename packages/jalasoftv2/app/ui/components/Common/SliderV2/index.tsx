'use client'
import dynamic from 'next/dynamic'
import {
  Dispatch,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react'
import { APP } from '@/constants/app'
import { ChevronLeft, ChevronRight, CircleFill } from 'styled-icons/bootstrap'
import SlickSlider, { Settings } from 'react-slick'
const SliderPagination = dynamic(() => import('./Pagination'))

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings?: SliderSettings
  hasArrows?: boolean
  hasDots?: boolean
  lazyLoad?: boolean
}

function CustomPaging() {
  return <CircleFill />
}

function AppendDots(dots: ReactNode[], setCurrentSlide: Dispatch<number>) {
  return <SliderPagination dots={dots} setCurrentSlide={setCurrentSlide} />
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings, hasArrows, hasDots, lazyLoad = true },
  ref
) => {
  const dotsSettings = {
    customPaging: CustomPaging,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots-container',
    appendDots: hasDots
      ? (dots: ReactNode[]) => AppendDots(dots, setCurrentSlide)
      : undefined
  }

  const arrowSettings = {
    arrows: true,
    nextArrow: <ChevronRight width={100} height={'100%'} />,
    prevArrow: <ChevronLeft width={100} height={'100%'} />
  }

  const generalSettings: SliderSettings = {
    dots: false,
    arrows: false,
    infinite: APP.SLIDER.INFINITY,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const sliderRef = useRef<any>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [sliderSettings, setSliderSettings] = useState({
    ...generalSettings,
    ...(hasDots && { ...dotsSettings }),
    ...(hasArrows && { ...arrowSettings }),
    ...(settings && { ...settings })
  })

  useEffect(() => {
    const slidesToShow = sliderRef.current?.innerSlider?.props?.children?.length
    if (lazyLoad) {
      setSliderSettings((sliderSettings) => ({
        ...sliderSettings,
        lazyLoad: 'ondemand'
      }))
    }
    if (settings?.slidesToShow && settings.slidesToShow > slidesToShow) {
      setSliderSettings((sliderSettings) => ({
        ...sliderSettings,
        slidesToShow
      }))
      if (settings?.responsive) {
        const responsive = settings.responsive.map((setting) => {
          if (
            ((setting.settings as Settings).slidesToShow ?? 0) > slidesToShow
          ) {
            return {
              ...setting,
              settings: {
                ...(setting.settings as Settings),
                slidesToShow
              }
            }
          } else return setting
        })
        setSliderSettings((sliderSettings) => ({
          ...sliderSettings,
          responsive
        }))
      }
    }
  }, [lazyLoad, settings])

  useEffect(() => {
    const slidesToScroll =
      sliderRef.current?.innerSlider?.props?.slidesToScroll ?? 1
    sliderRef.current?.slickGoTo(currentSlide * slidesToScroll)

    const slickList = sliderRef.current?.innerSlider?.list
    const visibleSlides = slickList.querySelectorAll('.slick-active')
    let maxHeight = 0
    visibleSlides.forEach((slide: { offsetHeight: any }) => {
      const slideHeight = slide?.offsetHeight
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight
      }
    })
    slickList.style.height = `${maxHeight}px`
  }, [currentSlide])

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <SlickSlider ref={ref ?? sliderRef} {...sliderSettings}>
      {children}
    </SlickSlider>
  )
}

export default forwardRef(Slider)
