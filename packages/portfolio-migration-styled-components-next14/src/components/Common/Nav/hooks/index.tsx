'use client'
import { useState, useEffect } from 'react'
export function useScroll() {
  const [scrollDir, setScrollDir] = useState(false)
  const [isStickySet, setIsStickySet] = useState(false)
  const [isInitialPosition, setIsInitialPosition] = useState(true)
  useEffect(() => {
    const threshold = 0
    const heightHeader = 1
    let lastScrollY = window.pageYOffset
    let ticking = false
    const updateScrollDir = () => {
      const offset = window.scrollY
      if (offset > 1) {
        if (offset > heightHeader) {
          setIsInitialPosition(false)
        }
        const scrollY = window.pageYOffset
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false
          return
        }
        if (scrollY > lastScrollY) {
          setScrollDir(false)
        } else if (offset > heightHeader) {
          setScrollDir(true)
          setIsStickySet(true)
        }
        lastScrollY = scrollY > 0 ? scrollY : 0
      } else {
        setScrollDir(false)
        setIsInitialPosition(true)
        setIsStickySet(false)
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return [scrollDir, isInitialPosition, isStickySet]
}
