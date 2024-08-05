import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderBox = styled.div`
  background: #07a;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 1px 3px 6px #d1d1d1;
  & > nav > ul {
    list-style: none;
    text-align: right;
    margin: 1rem auto;
    & > li {
      display: inline;
      margin-right: 1rem;
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
      // <h1 className="main-heading">
      //   <Link to="/">{title}</Link>
      // </h1>
      <HeaderBox>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link href="https://github.com/yeaseul7">Github</Link>
            </li>
          </ul>
        </nav>
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
