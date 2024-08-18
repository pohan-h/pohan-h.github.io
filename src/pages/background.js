import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BackgroundPage = () => (
  <Layout>
    <h1>遊戲背景</h1>
    <center>银河历 4649 年。经过漫长的战争，</center>
    <center>旧联邦不幸被击败，</center>
    <center>但帝国的残暴统治也处于崩溃的边缘。</center>
    <center>燃烧的银河边界已经被打破。</center>
    <center>私人商人和太空海盗在宇宙中穿梭往返。</center>
    <center>无数反叛组织纷纷崛起，从帝国的外缘发起战斗，时间紧迫。</center>
    <center>传言有人发现了一个古老太空种族的神秘战舰......</center>
    <br/>
    <center>在这个充满幻想和冲突的银河中，你可以通过修复你的太空港开始你的冒险。</center>
    <center>然后，你将建造你的旗舰，击败太空海盗，探索银河，</center>
    <center>与志同道合的指挥官结盟，并遇到一个接一个感人的故事。</center>
    <br/>
    <div class="comment">
        <small>from英文<a href="https://ig.camelgames.com/">Infinite Galaxy官網</a> 翻譯by ChatGPT</small>
    </div>
    

  </Layout>
)

export const Head = () => (
  <Seo 
    title="Game Background" 
    description="這是關於infinite galaxy的遊戲背景設定"
    lang="zh-Hant"
  />
)

export default BackgroundPage
