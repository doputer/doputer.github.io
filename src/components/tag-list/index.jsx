import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'
import React from 'react'
import { TagContainer } from '../tag-container'

import './index.scss'

export const TagList = ({ group }) => {
  return (
    <TagContainer>
      {group.map(tag => (
        <li key={tag.fieldValue} className="tag-list">
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </TagContainer>
  )
}
