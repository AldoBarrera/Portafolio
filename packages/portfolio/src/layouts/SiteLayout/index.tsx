import React from 'react'
import dynamic from 'next/dynamic'
import Grid from 'components/Common/Grid'
import Footer from 'components/Common/Footer'
import Container from 'components/Common/Container'
import DynamicSection, { SectionsProps } from 'utils/DynamicComponent'

const BackToTopButton = dynamic(
  () => import('components/Common/BackToTopButton')
)
import * as Style from './styles'

interface IProps {
  children: React.ReactNode
  navs?: SectionsProps[]
  sidebar?: React.ReactNode
  withoutNav?: boolean
  withoutFooter?: boolean
}

const SiteLayout = ({
  sidebar,
  children,
  withoutNav,
  withoutFooter,
  navs,
  ...props
}: IProps) => {
  return (
    <Style.SiteLayoutWrapper>
      {!withoutNav && 
        navs?.map(({ container, ...block }, index) => {
          return (
            <Container
              key={index}
              {...container?.configuration}
              {...container?.content}
              style={container?.style}
            >
              {DynamicSection(block, index)}
            </Container>
          )
        })
      }
      {sidebar ? (
        <>
          <Grid columnsNumber={12} columnMinSizes={30}>
            <Grid.Column size={9}>{children}</Grid.Column>
            <Grid.Column size={3}>{sidebar}</Grid.Column>
          </Grid>
        </>
      ) : (
        <>
          <div {...props}>{children}</div>
          <BackToTopButton />
        </>
      )}
      {!withoutFooter && <Footer />}
    </Style.SiteLayoutWrapper>
  )
}

export default SiteLayout
