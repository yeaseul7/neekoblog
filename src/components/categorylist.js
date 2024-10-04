import * as React from "react"
import styled from "styled-components"

const ListDiv = styled.ul`
  // mobile 화면이 아닐 경우
  position: absolute;
  left: 0;
  background: white;
  border-radius: 0px 15px 15px 0px;
  overflow: hidden;
  & > li {
    padding: 0.2rem 0.5rem;
    animation: fadeIn 0.5s ease-in-out;
    &:hover {
      background-color: bisque;
    }
  }
  /*     
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  list-style: none;
  justify-content: space-around;
  margin: 1rem auto;
  & > li {
    background: #d4a373;
    border-radius: 15px;
    padding: 5px 10px;
    margin: 0 auto;
    color: #fefae0;
    &:hover {
      background-color: #b2875e;
    }
  } */
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
