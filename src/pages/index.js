import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/infinite-galaxy.png"
        loading="eager"
        width={128}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Infinite Galaxy"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>欢迎来到 Infinite Galaxy Wiki</h1>
      <p className={styles.intro}>
        这里是你获取游戏攻略和信息的最佳去处。
      </p>
    </div>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/ships">
          船舰信息
        </Link>
        <p className={styles.listItemDescription}>
          了解所有船舰的详细信息和使用策略。
        </p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/buildings">
          建筑
        </Link>
        <p className={styles.listItemDescription}>
          查看各类建筑的功能和升级信息。
        </p>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.listItemLink} to="/resources">
          资源
        </Link>
        <p className={styles.listItemDescription}>
          获取和管理资源的技巧和策略。
        </p>
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
