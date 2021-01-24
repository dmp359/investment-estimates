import React from "react"
import { navigate } from "gatsby"
import { Button } from "evergreen-ui"
import Layout from "src/components/layout"
import Image from "src/components/image"
import SEO from "src/components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi world</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button onClick={() => navigate('/page-2/')}>Next</Button>
  </Layout>
)

export default IndexPage
