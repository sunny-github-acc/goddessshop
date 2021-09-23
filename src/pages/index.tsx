import React from 'react'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import WrapWithProvider from '../state/WrapWithProvider'

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <HeroSection />
  </Layout>
)

const WrappedPage = () => <WrapWithProvider element={<IndexPage />} />

export default WrappedPage
