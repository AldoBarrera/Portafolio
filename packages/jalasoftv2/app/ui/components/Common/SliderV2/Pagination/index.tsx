'use client'
import {
  Dispatch,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'
import { ChevronLeft, ChevronRight } from 'styled-icons/bootstrap'

export type SliderPaginationProps = {
  dots: ReactNode[]
  setCurrentSlide: Dispatch<number>
}

export const MAX_DOTS = 5

function SliderPagination({
  dots,
  setCurrentSlide
}: Readonly<SliderPaginationProps>) {
  const [currentPage, setCurrentPage] = useState<ReactNode[]>([])
  const totalPages =
    dots.length % MAX_DOTS === 0
      ? dots.length / MAX_DOTS - 1
      : Math.floor(dots.length / MAX_DOTS)
  const currentDot: any = [...dots].find(
    (dot: any) => dot.props.className !== ''
  )

  const calculateNewPage = useCallback(() => {
    if (currentDot) {
      return Number(currentDot.key) < dots.length
        ? Math.floor(Number(currentDot.key) / MAX_DOTS) * MAX_DOTS
        : 0
    } else return 0
  }, [currentDot, dots.length])

  const prevDots = (e: MouseEvent) => {
    e.preventDefault()
    const newPage = calculateNewPage() - MAX_DOTS
    if (newPage < 0) {
      setCurrentSlide(totalPages * MAX_DOTS)
    } else {
      setCurrentSlide(newPage)
    }
  }

  const nextDots = (e: MouseEvent) => {
    e.preventDefault()
    const newPage = calculateNewPage() + MAX_DOTS
    if (newPage > totalPages * MAX_DOTS) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(newPage)
    }
  }

  useEffect(() => {
    setCurrentSlide(currentDot?.key ?? 0)
    const newPage = calculateNewPage()
    if (newPage < 0) {
      setCurrentPage([...dots].slice(totalPages * MAX_DOTS))
    } else if (newPage > totalPages * MAX_DOTS) {
      setCurrentPage([...dots].slice(0, MAX_DOTS))
    } else {
      setCurrentPage([...dots].slice(newPage, newPage + MAX_DOTS))
    }
  }, [calculateNewPage, currentDot?.key, dots, setCurrentSlide, totalPages])

  return (
    <div className="slick-dots-container">
      {dots.length > MAX_DOTS && <ChevronLeft onClick={(e) => prevDots(e)} />}
      <ul className="slick-dots">{currentPage}</ul>
      {dots.length > MAX_DOTS && <ChevronRight onClick={(e) => nextDots(e)} />}
    </div>
  )
}

export default SliderPagination
