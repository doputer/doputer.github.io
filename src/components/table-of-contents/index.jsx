import React, { useMemo } from 'react'

import './index.scss'

export default function TableOfContents({ toc, currentHeaderUrl }) {
  const replaceToc = useMemo(() => {
    if (currentHeaderUrl) {
      return toc.replace(
        `"${currentHeaderUrl}"`,
        `"${currentHeaderUrl}" class="focus"`
      )
    } else {
      return toc
    }
  }, [currentHeaderUrl])

  return (
    <div className="toc-container">
      <div className="toc-wrapper">
        <div className="toc-content">
          <div
            className="toc"
            dangerouslySetInnerHTML={{ __html: replaceToc }}
          />
        </div>
      </div>
    </div>
  )
}
