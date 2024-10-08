import styled from "styled-components"
// 스타일
export const ArticleBox = styled.article`
  background: #fefae0;
  margin: 0.5rem;
  border-radius: 15px;
  padding: 1rem;
  height: 14rem;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: none;
  &:hover {
    box-shadow: 0 5px 8px rgb(82 82 82 / 74%);
  }
  & > header {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ArticleMain = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ArticleTitle = styled.p`
  margin: 0 0 0.5rem;
  font-weight: 600;
  & > a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #333333;
  }
`
export const ArticleList = styled.li`
  width: 33%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ArticlePageList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  & > li {
    margin: 0 1rem 0 0;
    & > button {
      padding: 0.5rem 1rem;
      background: none;
      border: none;
      border-radius: 15px;
      &:hover {
        background: #d4a373;
        transition: background-color 0.5s ease;
      }
    }
  }
`
