import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
import buildingsData from "../data/buildings.json"
import Seo from "../components/seo"

const BuildingsPage = () => {
  return (
    <Layout>
      <h1>建筑</h1>
      <div className={styles.buildingContainer}>
        {buildingsData.map((building, index) => (
          <div className={styles.buildingItem} key={index}>
            <StaticImage
              src={building.image}
              alt={building.name}
              placeholder="blurred"
              layout="fixed"
              width={150}
              height={100}
            />
            <div className={styles.buildingInfo}>
              <h2>
                <Link to={building.link} className={styles.buildingTitleLink}>
                  {building.name}
                </Link>
              </h2>
              <p>{building.description}</p>
            </div>
          </div>
        ))}
      </div>
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
