import dynamic from 'next/dynamic'

const SlideDown = dynamic(() =>
  import('react-slidedown').then((mod) => mod.SlideDown)
)
import styled from 'styled-components'

const ToggleVisibilityWrapper = styled.div.attrs({
  className: 'ToggleVisibility'
})`
  .react-slidedown {
    height: 0;
    transition-property: none;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }

  .react-slidedown.transitioning {
    overflow-y: hidden;
  }

  .react-slidedown.closed {
    display: none;
  }

  .my-dropdown-slidedown {
    overflow-x: hidden;
  }
`

type ToggleVisibilityProps = {
  open: boolean
  children: React.ReactNode
}

function ToggleVisibility({ open, children }: ToggleVisibilityProps) {
  return (
    <ToggleVisibilityWrapper>
      <SlideDown className={'my-dropdown-slidedown'}>
        {open ? children : null}
      </SlideDown>
    </ToggleVisibilityWrapper>
  )
}

export default ToggleVisibility
