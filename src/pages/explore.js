import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"



const ExplorePage = () => {
    return (
      <Layout>
        <h1>探索</h1>
        <p>Infinite galaxy除了有非常完整的世界觀外，其探索系統也是非常完善。</p>
        <p>可探索的部分大致可以分為恆星、行星與節點三種。</p>

        <h2>恆星（恆星平台）</h2>
        <ul>
            <li><Link to="/alli">聯盟</Link>佔領恆星平台後可建造為<Link to="/allibuild(聯盟建築）">聯盟總部或聯盟哨站</Link>可生產聯盟物資</li>
            <li>以下是個恆星種類與其分布位置：</li>
        </ul>

        <h2>行星（行星平台）</h2>
        <ul>
            <li>行星平台可進行資源開發，為重要<Link to="/resources">資源</Link>來源</li>
            <li>以下是個行星種類與其分布位置：</li>
        </ul>

        <h2>其他節點</h2>

        <h2>可以啟動的那個</h2>




      </Layout>
    )
  }

  export const Head = () => (
    <Seo 
      title="探索" 
      description="在這遊戲中有很多建模精美的東西直得我們去探索，除了幫助我們了結遊戲外還有豐富獎勵"
      lang="zh-Hant"
    />
  )
  
  export default ExplorePage
  