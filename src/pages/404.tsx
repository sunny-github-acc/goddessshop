import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import WrapWithProvider from '../state/WrapWithProvider'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
  </Layout>
)

const WrappedPage = () => <WrapWithProvider element={<NotFoundPage />} />

export default WrappedPage
