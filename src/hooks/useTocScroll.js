import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

export function useTocScroll(headerElements) {
  const [scrollY, setScrollY] = useState(0)
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState('')

  let aboveHeaderUrl
  const HEADER_OFFSET_Y = 20

  const listener = () => {
    setScrollY(window.pageYOffset)
  }

  const delay = 15

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay))
    return () => window.removeEventListener('scroll', listener)
  })

  useEffect(() => {
    for (const elem of headerElements) {
      const { top } = elem.getBoundingClientRect()
      const elemTop = top + scrollY
      const isLast = elem === headerElements[headerElements.length - 1]
      if (scrollY < elemTop - HEADER_OFFSET_Y) {
        aboveHeaderUrl &&
          setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1])
        !aboveHeaderUrl && setCurrentHeaderUrl(undefined)
        break
      } else {
        isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1])
        !isLast && (aboveHeaderUrl = elem.href)
      }
    }
  })

  return {
    currentHeaderUrl,
  }
}
