import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderBox = styled.div`
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
export const PostHeaderLink = styled(Link)`
  background: #d4a373;
  color: #fefae0;
  padding: 0.5rem 1rem;
  border-radius: 15px;
`
export const PostArticle = styled.article`
  background: #fefae0;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 1rem;
`
export const PostFooterList = styled.li`
  background: #fefae0;
  padding: 1rem;
  width: 48%;
  border-radius: 15px;

  & > a {
    text-decoration: none;
    color: #333333;
  }
`
export const PostHeader = styled.header`
  & > h4 {
    margin: 1rem 0;
  }
  & > p {
    margin: 1rem 0;
    font-size: 1rem;
  }
`
