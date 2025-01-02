import * as React from "react"
import { Link, graphql } from "gatsby"
import RecentPostBox from "../components/recentpost"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoryList from "../components/categorylist"
import {
  ArticleBox,
  ArticleMain,
  ArticleTitle,
  ArticleList,
  ArticlePageList,
} from "../styles/mainStyle"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `neekoblog`
  const posts = data.allMarkdownRemark.nodes
  const [selectedCategory, setSelectedCategory] = React.useState("")
  const [lookLoiie, setLookLoiie] = React.useState(false)

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.frontmatter.category === selectedCategory)
    : posts
  const [PostPagerList, setPostPagerList] = React.useState([])
  const [pageNum, setPageNum] = React.useState(0)

  React.useEffect(() => {
    if (filteredPosts.length >= 2) {
      const chunkSize = 9
      let chunkedPosts = []

      for (let i = 0; i < filteredPosts.length; i += chunkSize) {
        // 배열을 9개씩 잘라서 chunkedPosts에 저장
        chunkedPosts.push(filteredPosts.slice(i, i + chunkSize))
      }

      // 잘라진 배열을 저장 (상태로 관리)
      setPostPagerList(chunkedPosts)
    } else {
      setPostPagerList([filteredPosts])
    }
  }, [selectedCategory])

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>"gatsby-source-filesystem" 플러그인이 포스트를 찾지 못했습니다!</p>
      </Layout>
    )
  }

  const handleLookLoiie = () => {
    setLookLoiie(!lookLoiie)
  }

  return (
    <Layout location={location} title={siteTitle}>
      {selectedCategory !== "" ? <div></div> : <RecentPostBox />}
      <CategoryList data={posts} onCategorySelect={setSelectedCategory} />
      <ArticleMain>
        {PostPagerList[pageNum]?.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let shortenedTitle =
            title.length > 20 ? title.substring(0, 20) + "..." : title
          const description = post.frontmatter.description || post.excerpt
          const shortenedDescription =
            description.length > 100
              ? description.substring(0, 50) + "..."
              : description

          return (
            <ArticleList
              key={post.fields.slug}
              onMouseOver={() => handleLookLoiie()}
              className="category-content-list"
            >
              <ArticleBox
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <ArticleTitle>
                    <Link
                      to={post.fields.slug}
                      itemProp="url"
                      style={{ color: "aliceblue" }}
                    >
                      <span itemProp="headline">{shortenedTitle}</span>
                    </Link>
                  </ArticleTitle>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: shortenedDescription,
                    }}
                    itemProp="description"
                  />
                </section>
              </ArticleBox>
            </ArticleList>
          )
        })}
      </ArticleMain>
      <ArticlePageList>
        {PostPagerList.map((postList, index) => {
          return (
            <li key={index}>
              <button onClick={() => setPageNum(index)}>{index}</button>
            </li>
          )
        })}
      </ArticlePageList>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
