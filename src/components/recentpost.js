import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RecentPosts, BoxWrap, CubeItem } from "../styles/recentBox"
import { Link } from "gatsby"

const RecentPostBox = () => {
  const data = useStaticQuery(graphql`
    query RecentPostQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { date: { gte: "2024-01-01", lt: "2025-01-01" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes

  return (
    <RecentPosts>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="title">Recent Posts</p>
      </div>
      <BoxWrap className="list">
        {posts.map(post => (
          <CubeItem key={post.fields.slug}>
            <Link
              to={post.fields.slug}
              style={{ display: "block", height: "100%" }}
            >
              <div className="content">
                <div>
                  <b>{post.frontmatter.title}</b>
                  <p>{post.frontmatter.description}</p>
                </div>
                <p className="date">{post.frontmatter.date}</p>
              </div>
            </Link>
          </CubeItem>
        ))}
      </BoxWrap>
    </RecentPosts>
  )
}
export default RecentPostBox
