import componentRegistry from 'components'
import React from 'react'

function DynamicComponent(
  { name, configuration, content, container = undefined },
  index = 1
) {
  const Component = componentRegistry[name]

  if (Component)
    return React.createElement(Component, {
      key: content.id + index,
      ...content,
      ...configuration,
      container
    })
  else return <></>
}

export default DynamicComponent
