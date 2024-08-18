import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import * as styles from "../components/index.module.css"

const CommandCenterPage = () => {
  return (
    <Layout>
      <h1>指挥中心</h1>
      <p>
        指挥中心是游戏中最重要的建筑之一，负责管理舰队的整体运作和资源分配。通过升级指挥中心，你可以解锁更多的功能并提升舰队的战斗力。
      </p>
      <p>
        同等級下，相較其他建築需要較多<Link to="/resources">資源</Link>
      </p>
    </Layout>
  )
}

export const Head = () => (
  <Seo 
    title="指揮中心" 
    description="可以透過指揮中心等級初步判斷某一指揮官之遊玩時間與強度"
    lang="zh-Hant"
  />
)

export default CommandCenterPage
