import * as React from "react"
import { Link, graphql } from "gatsby"
import {
  PostArticle,
  PostFooterList,
  PostHeader,
  PostNav,
} from "../styles/postStyle"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Utterances from "../components/Utterances"
import { Helmet } from "react-helmet"
import { CiMenuKebab } from "react-icons/ci"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const [headings, setHeadings] = React.useState([])
  React.useEffect(() => {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = post.html
    let headers = tempDiv.querySelectorAll("h1, h2, h3, h4")
    const headerTexts = Array.from(headers).map(header => {
      const id = header.textContent.trim().replace(/\s+/g, "-").toLowerCase()
      header.setAttribute("id", id)
      return { text: header.textContent, id }
    })
    headers = headerTexts
    post.html = tempDiv.innerHTML
    setHeadings(headerTexts)
  }, [post])

  const handleClick = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }) // 부드럽게 스크롤
    } else {
      console.log("is not exist id")
    }
  }
  const [isopenModal, setIsopenModal] = React.useState(false)
  return (
    <Layout location={location} title={siteTitle}>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <PostNav onClick={() => setIsopenModal(pre => !pre)}>
        {isopenModal ? (
          <ul>
            {headings?.map(({ text, id }, index) => (
              <li key={index} onClick={() => handleClick(id)}>
                {text}
              </li>
            ))}
          </ul>
        ) : (
          <CiMenuKebab />
        )}
      </PostNav>
      <PostArticle
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <PostHeader>
          <h4 itemProp="headline">{post.frontmatter.title}</h4>
          <p>{post.frontmatter.date}</p>
        </PostHeader>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <Utterances />
      </PostArticle>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {previous && (
            <PostFooterList>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter?.title}
              </Link>
            </PostFooterList>
          )}
          {next && (
            <PostFooterList>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter?.title} →
              </Link>
            </PostFooterList>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
