import * as React from "react"
import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { HeaderMainBox, NavList, TitleBox } from "../styles/postStyle"
import Utterances from "./Utterances"
import { VscAccount } from "react-icons/vsc"
import { PiMailbox } from "react-icons/pi"
import { FaGithubAlt } from "react-icons/fa"

const Layout = ({ title, children, showUtterances = false }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(
        relativePath: { eq: "background/dogbackground.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  const backgroundImage = getImage(data.backgroundImage)

  const copyMailConfirm = () => {
    let confirm = window.confirm("메일 주소를 복사하시겠습니까?")
    if (confirm) {
      navigator.clipboard.writeText("cutie32769@gmail.com")
    }
  }

  const header = (
    <HeaderMainBox>
      <GatsbyImage
        image={backgroundImage}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.3,
        }}
      />
      <TitleBox>
        <h2>
          <Link to="/">{title}</Link>
        </h2>
        <NavList>
          <ul>
            <li>
              <button onClick={copyMailConfirm}>
                <PiMailbox size={22} />
                <span>mail.</span>
              </button>
            </li>
            <li>
              <Link to="/about/">
                <VscAccount size={20} />
                <span>profile.</span>
              </Link>
            </li>
            <li>
              <a href="https://github.com/yeaseul7">
                <FaGithubAlt size={20} />
                <span>github.</span>
              </a>
            </li>
          </ul>
        </NavList>
      </TitleBox>
      <h2 style={{ textAlign: "center" }}>A steadily growing developer_</h2>
      <p style={{ textAlign: "center" }}>📨 cutie32769@gmail.com</p>
    </HeaderMainBox>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {showUtterances && <Utterances />}
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
