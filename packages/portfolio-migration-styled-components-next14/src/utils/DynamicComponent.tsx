import React from 'react'
import dynamic from 'next/dynamic'
import Hero from 'components/Common/Hero'
import { StyleProps } from 'components/Common/Style'

export type SectionsProps = {
  name: string
  configuration?: any
  style?: StyleProps
  content?: any
  container?: SectionsProps
}

function DynamicComponent(
  { name, configuration, content, style }: SectionsProps,
  index = 1
) {
  let DynamicComponent = dynamic(() => import(`components/Common/${name}`))

  if (DynamicComponent)
    return React.createElement(DynamicComponent, {
      key: content.id + index,
      ...configuration,
      ...content,
      style
    })
  else return <></>
}

export default DynamicComponent
