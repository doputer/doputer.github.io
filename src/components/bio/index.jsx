import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import ReactRotatingText from 'react-rotating-text'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, bio } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-introduction">
              안녕하세요.
              <br />
              <ReactRotatingText items={bio.description} />
              <br />
              {bio.role} <b>{author}</b> 입니다.
            </div>
            {/* <div className="author-description">
              <Link to={'/about'}>
                <Image
                  className="author-image"
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    borderRadius: `100%`,
                  }}
                />
              </Link>
            </div> */}
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        bio {
          role
          description
        }
      }
    }
  }
`

export default Bio
