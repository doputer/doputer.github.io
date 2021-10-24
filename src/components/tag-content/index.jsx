import { Link } from 'gatsby'
import React from 'react'

import './index.scss'

export const TagContent = ({ edges, tag, totalCount }) => {
  const tagHeader = `Tags / ${tag} (${totalCount})`

  return (
    <div className="tag-content-container">
      <Link to={`/tags`}>
        <h1>{tagHeader}</h1>
      </Link>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter

          return (
            <li key={slug} className="tag-content">
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
