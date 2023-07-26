import React from 'react'
import * as Components from 'components'

function DynamicComponent({ name, configuration, content }) {
  return React.createElement(Components[name], {
    key: content.id,
    ...configuration,
    ...content
  })
}

export default DynamicComponent
