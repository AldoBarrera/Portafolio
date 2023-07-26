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
      <Style.BackToTopButton onClick={scrollToTop}>
        <Style.ArrowUpwardOutlineIcon />
      </Style.BackToTopButton>
    </Style.BackToTopButtonWrapper>
  )
}

export default BackToTopButton
