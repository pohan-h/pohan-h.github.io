import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div>
      <Link
        to="/"
        style={{
          fontSize: `1.15em`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <nav style={{ width: "100%" }}>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <li><Link to="/">首頁</Link></li>
          <li><Link to="/fleet">船艦</Link></li>
          <li><Link to="/buildings">建築</Link></li>
          <li><Link to="/resources">資源</Link></li>
          <li><Link to="/background">遊戲背景</Link></li>
        </ul>
      </nav>

    </div>
    <StaticImage
      src="../images/my-logo.png"
      alt="My Logo"
      height={20}
      style={{ margin: 0 }}
    />
  </header>
)

export default Header
