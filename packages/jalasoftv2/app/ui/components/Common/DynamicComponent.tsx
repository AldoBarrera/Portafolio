import componentRegistry from '@/app/ui/components/Common'
import React from 'react'
import { ContainerV3Props } from '@/app/ui/components/Common/ContainerV3'

export type SectionProps = {
  name: string
  configuration?: any
  content?: any
  container?: ContainerV3Props
  path?: string
}

const getComponent = (key: string): React.ComponentType<any> | null => {
  if (key in componentRegistry) {
    return componentRegistry[key as keyof typeof componentRegistry]
  }
  return null
}
function DynamicComponent(
  { name, configuration, content, container = undefined, path }: SectionProps,
  index = 1
) {
  const Component = getComponent(name)

  if (Component)
    return React.createElement(Component, {
      key: content.id + index,
      ...content,
      ...configuration,
      container,
      path
    })
  else return <></>
}

export default DynamicComponent
