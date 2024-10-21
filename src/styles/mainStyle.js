import styled, { keyframes } from "styled-components"

export const hoverAnimation = keyframes`
  0% {
    transform: rotate(10deg)
  }
  100% {
    transform: rotate(-10deg);
  }
`
export const bounce = keyframes`
  0% {
    transform: translateY(0px)
  }
  50%{
    transform: translateY(-10px)
  }
  100% {
    transform: translateY(0px)
  }
`
export const ArticleBox = styled.article`
  @media (max-width: 768px) {
    margin: 0.5rem auto;
    width: 90%;
    height: 10rem;
  }
  background: #fefae0;
  margin: 0.5rem;
  border-radius: 15px;
  padding: 1rem;
  height: 14rem;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: none;
  &:hover {
    animation: ${bounce} 1s ease-in-out infinite;
    box-shadow: 0 4px 9px 0px #bababa;
  }
  & > header {
    @media (max-width: 768px) {
      height: 4rem;
    }
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
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
export const ListDiv = styled.ul`
  position: relative;
  height: auto;
  background: none;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  margin: 1rem 0 0 0;
  padding: 0;
`
export const NavLi = styled.li`
  padding: 5px 10px;
  margin: 0 auto;
  color: #736f58;
  &:hover {
    color: #fffdf4;
    animation: ${hoverAnimation} 0.5s ease-in-out infinite alternate;
  }
`
