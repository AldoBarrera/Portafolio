import React from 'react'
import { useFeatureValue } from '@growthbook/growthbook-react'
import componentRegistry from 'components'

function DynamicComponent(
  { name, configuration, content, container = undefined, growthbook },
  index = 1
) {
  const feature2Value = useFeatureValue('feature2', 'fallback')

  const growthbookConf = growthbook?.[feature2Value] ?? {}

  const Component = componentRegistry[name]

  if (Component)
    return React.createElement(Component, {
      key: content.id + index,
      ...content,
      ...configuration,
      ...growthbookConf,
      container
    })
  else return <></>
}

export default DynamicComponent
