import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const BuildingsPage = () => {
  return (
    <Layout>
      <Link></Link>
      <h1>建筑</h1>
      <p>一些建築</p>
    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title="建築" 
    description="隨著建築的解鎖與升級，我們能解鎖遊戲中的不同功能與玩法"
    lang="zh-Hant"
  />
)

export default BuildingsPage
