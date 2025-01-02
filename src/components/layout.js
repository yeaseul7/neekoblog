import * as React from "react"
import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

import {
  HeaderMainBox,
  PostHeaderLink,
  NavList,
  TitleBox,
} from "../styles/postStyle"
import Utterances from "./Utterances"
import { VscAccount } from "react-icons/vsc"
import { PiMailbox } from "react-icons/pi"
import { FaGithubAlt } from "react-icons/fa"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: allFile(
        filter: {
          name: { eq: "technologybackground" }
          extension: { regex: "/(jpg|jpeg|png)/" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const backgroundImage =
    data.backgroundImage?.nodes[0]?.childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src || ""

  const copyMailConfirm = () => {
    let confirm = window.confirm("메일 주소를 복사하시겠습니까?")
    if (confirm) {
      navigator.clipboard.writeText("cutie32769@gmail.com")
    }
  }

  const header = (
    <HeaderMainBox bgimage={backgroundImage}>
      <TitleBox>
        <h2>
          <Link to="/">{title}</Link>
        </h2>
        <NavList>
          <ul>
            <li>
              <button onClick={copyMailConfirm}>
                <PiMailbox size={22} />
                <label>mail.</label>
              </button>
            </li>
            <li>
              <Link to="/about/">
                <VscAccount size={20} />
                <label>profile.</label>
              </Link>
            </li>
            <li>
              <a href="https://github.com/yeaseul7">
                <FaGithubAlt size={20} />
                <label>github.</label>
              </a>
            </li>
          </ul>
        </NavList>
      </TitleBox>
      <h2 style={{ textAlign: "center" }}>A steadily growing developer_</h2>
      <h4 style={{ textAlign: "center" }}>
        Edit Proposal Email : cutie32769@gmail.com
      </h4>
    </HeaderMainBox>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Utterances />
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
