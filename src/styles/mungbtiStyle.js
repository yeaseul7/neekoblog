import styled from "styled-components"

export const MainBox = styled.div`
  justify-content: space-between;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefae0;
  border-radius: 15px;
  height: 90%;
  width: 90vw; /* 모바일 기본 설정 */
  height: 90vh; /* 모바일 기본 설정 */

  @media (min-width: 768px) {
    /* 데스크탑과 태블릿을 위한 미디어 쿼리 */
    width: 450px; /* 데스크탑에서의 너비 */
    max-width: 90%; /* 화면이 작은 데스크탑에서는 너비가 90%를 넘지 않도록 */
    height: 90%; /* 높이 설정, 필요에 따라 조정 가능 */
  }
`
export const ArticleBox = styled.div`
  width: 100%;
  text-align: center;
`
export const ImageContainer = styled.div`
  width: 100%; /* MainBox의 너비를 따름 */
  display: flex;
  justify-content: center;
`

export const MainBtn = styled.button`
  font-weight: 600;
  color: #fefae0;
  background-color: #d4a373;
  padding: 1rem 2rem;
  border-radius: 15px;
  border: 1px solid #d4a373;
  box-shadow: 0 2px 7px rgb(148 148 148 / 74%);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease,
    border 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    background-color: #fefae0;
    color: #d4a373;
    box-shadow: none;
    border: 1px solid #d4a373;
  }
`
export const SubBtn = styled.button`
  color: #dda15e;
  background-color: #faedcd;
  border: 1px solid #faedcd;
  border-radius: 15px;
  padding: 1rem 2rem;
  box-shadow: 0 2px 7px rgb(148 148 148 / 74%);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease,
    border 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    background-color: #dda15e;
    color: #faedcd;
    box-shadow: none;
    border: 1px solid #faedcd;
  }
`
export const ProgressBar = styled.div`
  width: 90%;
  height: 1rem;
  background-color: #ddd;
  border-radius: 15px;
  margin: 1rem auto;
`
export const Progress = styled.div`
  width: 0;
  height: 100%;
  background-color: #d4a373;
  border-radius: 15px;
`
export const QuestionBtnBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const AnswerBtn = styled.button`
  background: #d4a373;
  border: 1px solid #d4a373;
  border-radius: 15px;

  &:hover,
  &:focus,
  &:active {
    background: #faedcd;
    border: 1px solid #faedcd;
    & > h4 {
      color: #d4a373;
    }
  }

  & > h4 {
    padding: 0;
    margin: 1rem auto;
    color: #fefae0;
  }
`
export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1rem;
  & > .pageNum {
    margin: 0;
    margin-right: 1rem;
    font-size: 0.8rem;
  }
`
export const InitialBtn = styled(SubBtn)`
  box-shadow: none;
  padding: 0.5rem 1rem;
`
