import * as React from "react"
import { ListDiv, NavLi } from "../styles/mainStyle"

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
      <NavLi onClick={() => onCategorySelect("")}>
        <p>All</p>
      </NavLi>
      {categories.map((category, index) => (
        <NavLi key={index} onClick={() => onCategorySelect(category)}>
          <p>{category}</p>
        </NavLi>
      ))}
    </ListDiv>
  )
}
export default CategoryList
