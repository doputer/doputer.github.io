import React from 'react'

import './index.scss'

export const TagContainer = React.memo(({ children }) => (
  <ul className="tag-container">{children}</ul>
))
