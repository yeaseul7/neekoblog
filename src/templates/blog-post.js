import * as React from "react"
import { Link, graphql } from "gatsby"
import { PostArticle, PostHeader } from "../styles/postStyle"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const BlogPostTemplate = ({
  data: { previous, site, markdownRemark: post },
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>

      <PostArticle
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <PostHeader>
          <h2 itemProp="headline">{post.frontmatter.title}</h2>
          <p>{post.frontmatter.date}</p>
        </PostHeader>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </PostArticle>

      {previous && (
        <div style={{ textAlign: "center" }}>
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter?.title}
          </Link>
        </div>
      )}
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
