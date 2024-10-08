import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HeaderBox, PostHeaderLink } from "../styles/postStyle"

const Layout = ({ location, title, children }) => {
  const [isloading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

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
      <PostHeaderLink className="header-link-home" to="/">
        {title}
      </PostHeaderLink>
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

const LoadingScreen = () => {
  ;<div>
    <h1>Loading...</h1>
  </div>
}
