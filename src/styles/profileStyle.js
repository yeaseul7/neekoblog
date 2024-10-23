import styled from "styled-components"

export const ProfileLinkList = styled.ul`
  list-style: none;
  & > li {
    display: flex;
    align-items: center;
    gap: 10px;
    & > a {
      text-decoration: none;
      color: black;
      font-size: 0.9rem;
    }
  }
`
export const ProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const CareerList = styled.li`
  list-style: none;
`
export const CareerBox = styled.div`
  margin-top: 1rem;
  gap: 20px;
  display: flex;
  background: #fff9d47a;
  padding: 1rem;
  border-radius: 15px;
  & > .imgBox {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  & > .careerTextBox {
    width: 100%;
    & > .careerjob {
      margin-bottom: 5px;
      font-size: 0.9rem;
      color: #505050;
    }
    & > .careerTitle {
      margin-bottom: 5px;
      font-size: large;
      font-weight: 600;
    }
  }
`
export const DetailBox = styled.div`
  background: #d4a3737d;
  padding: 1rem;
  border-radius: 15px;
  width: 100%;
`

export const ListTitle = styled.p`
  margin: 0;
  font-size: larger;
  font-weight: 600;
`
export const HrStyle = styled.hr`
  background: black;
`
