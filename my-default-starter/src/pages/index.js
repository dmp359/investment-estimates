import React from "react"
import { navigate } from "gatsby"
import { Button, Heading, Paragraph } from "evergreen-ui"
import Layout from "src/components/layout"
import SEO from "src/components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading size={900}>Financial Freedom</Heading>
    <Paragraph>Discover your best time to buy a house, retire, etc.</Paragraph>

    <Button marginTop={12} onClick={() => navigate('/page-2/')}>Begin</Button>
  </Layout>
)

export default IndexPage
