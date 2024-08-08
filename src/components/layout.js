import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const HeaderBox = styled.div`
  background: #fefae0;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 1px 3px 6px #d1d1d1;
  text-align: center;
  display: flex;
  justify-content: space-between;

  & > .headerInfo {
  }
  & > div > h2 {
    margin: 1rem 0;
  }

  & > div > nav > ul {
    list-style: none;
    justify-content: center;
    margin: 1rem auto 0;
    display: flex;
    align-items: center;
    & > li {
      margin: 0 1rem 0 0;
      & > a {
        color: white;
      }
    }
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <HeaderBox>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/ot408.png"
          width={80}
          height={80}
          alt="dancing Dog"
        ></StaticImage>
        <div className="headerInfo">
          <h2>
            <Link to="/">{title}</Link>
          </h2>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <StaticImage
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/homeicon@2x.png"
                    width={24}
                    height={24}
                    alt="홈아이콘"
                  />
                </Link>
              </li>
              <li>
                <a href="https://github.com/yeaseul7">
                  <StaticImage
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/githubicon@2x.png"
                    width={24}
                    height={24}
                    alt="깃허브 아이콘"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/ot408.png"
          width={80}
          height={80}
          alt="dancing Dog"
        ></StaticImage>
      </HeaderBox>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
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
