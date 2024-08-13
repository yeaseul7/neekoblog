import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  MainBox,
  ImageContainer,
  MainBtn,
  SubBtn,
  ArticleBox,
} from "../styles/mungbtiStyle.js"
import { navigate } from "gatsby"

const Mungbti = () => {
  const handleStart = () => {
    navigate("/mungbtiTest")
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MainBox>
        <header>
          <h4 style={{ margin: "1rem auto" }}>멍BTI 테스트</h4>
        </header>
        <ArticleBox>
          <ImageContainer>
            <StaticImage
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/mungbti@2x.png"
              height={300}
              alt="dancing Dog"
            ></StaticImage>
          </ImageContainer>
          <div style={{ textAlign: "center" }}>
            <h4>나의 반려견 성향 TEST</h4>
            <p>내가 알던 네가 아냐...?</p>
          </div>

          <MainBtn onClick={handleStart}>멍BTI테스트 시작하기</MainBtn>
        </ArticleBox>
        <div style={{ marginTop: "9vh", marginBottom: "1vh" }}>
          <SubBtn>테스트 공유하기</SubBtn>
        </div>
      </MainBox>
    </div>
  )
}
export default Mungbti
