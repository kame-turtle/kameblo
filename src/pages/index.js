import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>カメブロへようこそ</h1>
    <p>カメブロはGatsby.jsで構成されています.<br/>
    Gatsby.jsはReact.jsのライブラリで,<br/>
    React.jsはJavaScriptのライブラリです．
    </p>
    <p>出来立てホヤホヤなので,まだブログ記事はありません.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage