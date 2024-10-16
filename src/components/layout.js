import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  HeaderMainBox,
  PostHeaderLink,
  ProfileImage,
  ProfileBox,
  Inro,
  customStyles,
  ButtonStyle,
  ButtonDiv,
} from "../styles/postStyle"
import { VscAccount } from "react-icons/vsc"
import { PiMailbox } from "react-icons/pi"
import { FaGithubAlt } from "react-icons/fa"
import Modal from "react-modal"

const Layout = ({ location, title, children }) => {
  const [isloading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  const [modalOpen, setModalOpen] = React.useState(false)

  const copyMail = () => {
    navigator.clipboard.writeText("cutie32769@gmail.com")
    setModalOpen(false)
  }

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let header

  if (isRootPath) {
    header = (
      <HeaderMainBox>
        <h2>
          <Link to="/">{title}</Link>
        </h2>
        <ProfileBox className="headerInfo">
          <Inro>
            <ProfileImage>
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/early.jpeg"
                width={80}
                height={80}
                alt="profile"
              ></StaticImage>
            </ProfileImage>
            <p style={{ margin: 0 }}>Neeko👩🏻‍💻 (이예슬)</p>
          </Inro>
          <nav>
            <ul>
              <li>
                <button onClick={() => setModalOpen(true)}>
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
          </nav>
        </ProfileBox>
      </HeaderMainBox>
    )
  } else {
    header = (
      <PostHeaderLink className="header-link-home" to="/">
        {title}
      </PostHeaderLink>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Modal isOpen={modalOpen} style={customStyles}>
        Neeko🐶의 메일은
        <span style={{ fontWeight: "600", margin: "0 0.5rem" }}>
          cutie32769@gmail.com
        </span>
        입니다.
        <br />
        주소를 복사하시겠습니까?
        <ButtonDiv>
          <ButtonStyle onClick={() => copyMail()}>복사하기</ButtonStyle>
          <ButtonStyle onClick={() => setModalOpen(false)}>취소</ButtonStyle>
        </ButtonDiv>
      </Modal>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
