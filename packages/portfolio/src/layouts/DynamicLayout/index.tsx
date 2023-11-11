import React from 'react'
import DynamicSection, { SectionsProps } from 'utils/DynamicComponent'
import Container from 'components/Common/Container'
import {} from 'components/Common/Nav'
import SiteLayout from 'layouts/SiteLayout'

export type DynamicLayoutProps = {
  sections: SectionsProps[]
  navs?: SectionsProps[]
  withoutNav: boolean
  withoutFooter: boolean
  sidebar?: any
}

function DynamicLayout({
  sections,
  navs,
  withoutNav,
  withoutFooter,
  sidebar
}: DynamicLayoutProps) {
  return (
    <SiteLayout
      navs={navs}
      sidebar={sidebar ? DynamicSection(sidebar) : undefined}
      withoutNav={withoutNav}
      withoutFooter={withoutFooter}
    >
      {sections?.map(({ container, ...block }, index) => {
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
      })}
    </SiteLayout>
  )
}

export default DynamicLayout
