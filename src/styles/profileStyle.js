import styled from "styled-components"

export const ProfileLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  & > li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    & > a {
      font-size: 0.8rem;
    }
  }
`
export const ProfileTitle = styled.p`
  font-size: xxx-large;
  font-weight: 600;
  margin: 0 0 0 15px;
  color: #eaeaea;
`
export const ProfileDiv = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  height: 9rem;
  display: flex;
  align-items: flex-start;
  margin: 0;
  margin-left: 15px !important;
  margin-top: 50px;
`
export const CareerList = styled.li`
  list-style: none;
`
export const CareerBox = styled.div`
  margin-top: 1rem;
  gap: 20px;
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  & > .imgBox {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 16%;
    & > p {
      text-align: center;
      font-size: 0.7rem;
    }
  }
  & > .careerTextBox {
    width: 100%;
    & > .careerjob {
      margin-bottom: 5px;
      font-size: 0.9rem;
      color: #a2a2a2;
    }
    & > .careerTitle {
      margin-bottom: 5px;
      font-size: large;
      font-weight: 600;
    }
  }
`
export const DetailBox = styled.div`
  padding: 1rem;
  border: 1px solid #c7d6ff;
`

export const ListTitle = styled.p`
  margin: 0;
  font-size: xx-large;
  font-weight: 600;
`
export const IntroBox = styled.div`
  padding: 1rem;
  border-radius: 15px;
  margin: 1rem;
`
export const TagBox = styled.div`
  margin: 10px auto;
  display: flex;
  gap: 5px;
  & > .tags {
    padding: 3px;
    width: fit-content;
    background: #454545;
    font-size: 0.7rem;
    color: #ff6363;
  }
`
export const dogLottieStyle = {
  height: 100,
  width: 100,
}
export const ProfileHeader = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
`
export const SectionDiv = styled.div`
  display: flex;
  align-items: center;
`
