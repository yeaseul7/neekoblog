import styled, { keyframes } from "styled-components"

export const RecentPosts = styled.div`
  padding: 1rem;
  border-radius: 15px;
  & > .title {
    margin: 0;
  }
`
export const BoxWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const CubeItem = styled.li`
  border: 1px solid white;
  border-radius: 10px;
  list-style: none;
  flex: 1 1 300px;
  max-width: calc(50% - 0.5rem);
  & > a {
    padding: 1rem;
    width: 100%;
    & > .content {
      gap: 20px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      & > .date {
        color: gray;
        font-size: 12px;
      }
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
