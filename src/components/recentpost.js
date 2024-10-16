import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const RecentPosts = styled.div`
  background: #fefae0;
  padding: 1rem;
  border-radius: 15px;
  & > .title {
    margin: 0;
  }
  & > .list {
    list-style: none;
    padding: 0;
    & > li {
      background: #faedcd;
      padding: 1rem;
      border-radius: 15px;
      margin: 1rem auto;
      transition: box-shadow 0.3s ease-in-out;
      box-shadow: none;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* 마우스 호버 시 그림자 추가 */
      }
      & > a {
        text-decoration: none;
        & > .listtitle {
          font-weight: 600;
        }
        & > p,
        small {
          margin: 0;
          color: #333333;
        }
      }
    }
  }
`

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
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/ot408.png"
          width={40}
          height={40}
          alt="dancing Dog"
        ></StaticImage>
        <p className="title" style={{ margin: 0 }}>
          최근 게시글
        </p>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/ot408.png"
          width={40}
          height={40}
          alt="dancing Dog"
        ></StaticImage>
      </div>
      <ul className="list">
        {posts.map(post => (
          <li key={post.fields.slug} style={{ listStyle: "none" }}>
            <Link to={post.fields.slug}>
              <p className="listtitle">{post.frontmatter.title}</p>
              <p>{post.frontmatter.description}</p>
              <small>{post.frontmatter.date}</small>
            </Link>
          </li>
        ))}
      </ul>
    </RecentPosts>
  )
}
export default RecentPostBox
