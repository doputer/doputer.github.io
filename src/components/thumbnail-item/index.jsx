import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import kebabCase from 'lodash/kebabCase'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <div className={`thumbnail ${TARGET_CLASS}`} key={node.fields.slug}>
    <Link to={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
    </Link>
    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    <ul>
      {node.frontmatter.tags.map(tag => (
        <li key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{`#${tag}`}</Link>
        </li>
      ))}
    </ul>
  </div>
)
