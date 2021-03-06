import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Layout>
      <h1>Hi peoples!</h1>
      <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
      <ProductGrid />
      <Link to="/page-2/">page 2</Link>span>&nbsp;&#124;&nbsp;</span>
    <Link to="/contact/">Contact</Link>
  </Layout>
  </>
)

export default IndexPage
