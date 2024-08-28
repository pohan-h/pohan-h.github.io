import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>欢迎来到 Infinite Galaxy Wiki</h1>
      <h2>施工中</h2>
      <p className={styles.intro}>中文最詳細的非官方無盡蒼穹維基（希望是啦）</p>
    </div>
    <p>Infinite Galaxy是一款以太空為主題的戰爭模擬遊戲，該遊戲擁有極為豐富的遊戲系統，以下是四個主要的遊玩內容：</p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/buildings">建筑</Link>
        <p>完成度：<font color="#FFC300">頁面創建了，但基本沒內容</font></p>
        <p className={styles.listItemDescription}>升级各类建筑，以提升游戏体验和战力。</p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/resources">资源</Link>
        <p>完成度：<font color="#32CD32">基本內容完成了，詳細內容之後補充</font></p>
        <p className={styles.listItemDescription}>获取和管理资源的技巧和策略。</p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/fleet">艦隊</Link>
        <p>完成度：<font color="#32CD32">基本內容完成了，詳細內容之後補充</font></p>
        <p className={styles.listItemDescription}>获取关于各类船舰的详细资料与最佳使用策略。</p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/campaigns">戰役 王牌出擊 競技場</Link>
        <p>完成度：<font color="#FF0000">頁面尚未創建</font></p>
        <p className={styles.listItemDescription}>遊戲中获取旗舰蓝图和重要资源的关键挑战</p>
      </li>
    </ul>
    <p>以下是另外四個遊玩內容，雖然沒有被歸類主要的部分但也很重要：</p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/alli">聯盟</Link>
        <p>完成度：<font color="#FF0000">頁面尚未創建</font></p>
        <p className={styles.listItemDescription}>加入和管理联盟，与其他玩家协作，增强整体实力。</p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/mem">成員</Link>
        <p>完成度：<font color="#FF0000">頁面尚未創建</font></p>
        <p className={styles.listItemDescription}>分配和升級乘员，以提高舰队的战斗效率。</p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/shop">商店</Link>
        <p>完成度：<font color="#FF0000">頁面尚未創建</font></p>
        <p className={styles.listItemDescription}>购买和兑换道具资源，强化游戏中的装备。</p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/plus">加成</Link>
        <p>完成度：<font color="#FF0000">頁面尚未創建</font></p>
        <p className={styles.listItemDescription}>获取并应用各种加成效果，提升游戏角色和舰队的属性。</p>
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
