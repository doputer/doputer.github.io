import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <div className={`thumbnail ${TARGET_CLASS}`} key={node.fields.slug}>
    <Link to={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
    </Link>
    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    <p
      dangerouslySetInnerHTML={{
        __html: node.frontmatter.date,
      }}
    />
  </div>
)
