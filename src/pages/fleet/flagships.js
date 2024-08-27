import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"


const ExamplePage = () => {
  return (
    <Layout>
      <h1>範例</h1>
      <p>這是範例頁面</p>
      <h3><Link to="/">回首頁</Link></h3>

    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title="範例頁面" 
    description="這是關於infinite galaxy的遊戲背景設定"
    lang="zh-Hant"
  />
)
  
export default ExamplePage
  