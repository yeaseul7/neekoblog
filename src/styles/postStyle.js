import styled from "styled-components"
import { Link } from "gatsby"

export const BackgroundSlideshow = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${props => props.backgroundImage};
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`

export const ProfileImage = styled.div`
  overflow: hidden;
  border-radius: 50%;
`
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`
export const HeaderMainBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  overflow: hidden;
  padding: 1rem;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${props => props.bgimage}");
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: -1;
    transform-origin: center center;
  }
`

export const NavList = styled.nav`
  ul {
    display: flex; /* 가로 정렬 */
    list-style: none; /* 리스트 스타일 제거 */
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }

  li {
    margin-right: 20px;
    margin-top: 3rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin: 0;
    }

    & > button,
    a {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: aliceblue;
    }
  }

  label {
    margin-left: 8px; /* 아이콘과 텍스트 사이 간격 */
  }
`
export const Inro = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`
export const PostHeaderLink = styled(Link)`
  background: #d4a373;
  color: #fefae0;
  padding: 0.5rem 1rem;
  border-radius: 15px;
`
export const PostArticle = styled.article`
  font-family: sans-serif;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  & > p {
    font-size: 1rem;
  }
  & > h4 {
    font-size: 1.1rem;
  }
  & > h3 {
    font-size: 1.2rem;
  }
  & > ul {
    list-style: none;
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
