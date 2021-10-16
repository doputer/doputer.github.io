import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head title="404: Not Found" />
        <h1>Not Found</h1>
        <p>페이지를 찾을 수 없습니다.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
