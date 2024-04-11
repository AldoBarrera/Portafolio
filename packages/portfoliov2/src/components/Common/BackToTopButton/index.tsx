import * as Style from './styles'

function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Style.BackToTopButtonWrapper>
      <Style.ArrowUpCircleFillIcon onClick={scrollToTop} />
    </Style.BackToTopButtonWrapper>
  )
}

export default BackToTopButton
