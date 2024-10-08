import * as React from "react"
import styled from "styled-components"

const ListDiv = styled.ul`
  // mobile 화면이 아닐 경우
  list-style: none;
  position: fixed;
  z-index: 1;
  left: 0;
  background: #fefae0;
  border-radius: 0px 15px 15px 0px;
  overflow: hidden;
  padding: 0;
  & > li {
    padding: 0.2rem 0.5rem;
    animation: fadeIn 0.5s ease-in-out;
    &:hover {
      background-color: #faedcd;
    }
  }
  @media (max-width: 768px) {
    position: relative;
    height: auto;
    background: none;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: flex-start;
    margin: 1rem auto;
    gap: 0.3rem;
    & > li {
      background: #d4a373;
      border-radius: 15px;
      padding: 5px 10px;
      margin: 0 auto;
      color: #fefae0;
      &:hover {
        background-color: #b2875e;
      }
    }
  }
`

const CategoryList = ({ data, onCategorySelect }) => {
  let categories = data.map(post => {
    if (post.frontmatter.category != "Profile") {
      return post.frontmatter.category
    }
  })
  categories = [
    ...new Set(
      categories.map(category => category && category.trim()).filter(Boolean)
    ),
  ]
  return (
    <ListDiv>
      <li style={{ background: "#faedcd" }}>카테고리</li>
      <li onClick={() => onCategorySelect("")}>
        <p>All</p>
      </li>
      {categories.map((category, index) => (
        <li key={index} onClick={() => onCategorySelect(category)}>
          <p>{category}</p>
        </li>
      ))}
    </ListDiv>
  )
}
export default CategoryList
