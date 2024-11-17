import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

export const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`

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
    height: 200%;
    background-image: url("${props => props.bgimage}");
    background-size: cover;
    background-position: center;
    animation: ${scrollAnimation} 15s linear infinite;
    opacity: 0.3;
    z-index: -1;
    background-repeat: repeat-y;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${props => props.bgimage}");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`
export const NavList = styled.nav`
  ul {
    display: flex; /* 가로 정렬 */
    list-style: none; /* 리스트 스타일 제거 */
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 20px;
    margin-top: 3rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
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
  background: #fefae0;
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
export const PostNav = styled.nav`
  z-index: 100;
  position: fixed;
  left: 0;
  background: #d4a373;
  border-radius: 15px;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > ul {
    list-style: none;
    font-size: smaller;
    color: #676767;
    margin: 0;
    & > li {
      margin: 5px auto;
      &:hover {
        color: #0c0c0c;
      }
    }
  }
`
export const customStyles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: "#00000070",
  },
  content: {
    position: "relative",
    inset: "unset",
    border: "none",
    background: "#fefae0",
    overflow: "auto",
    borderRadius: "15px",
    paddingBottom: "0",
    outline: "none",
    padding: "1rem",
    width: "fit-content",
    margin: "40vh auto",
    transform: "translateY(-50%)",
    textAlign: "center",
    lineHeight: "1.25rem",
  },
}
export const ButtonStyle = styled.button`
  outline: none;
  color: #daa06d;
  padding: 5px 10px;
  padding-left: 3em;
  padding-right: 3em;
  border: 2px dashed #daa06d;
  border-radius: 15px;
  background-color: #eaddca;
  box-shadow: 0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;
  &:hover,
  :active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px #eaddca, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
  }
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`
