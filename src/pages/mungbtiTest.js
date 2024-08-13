import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  MainBox,
  ImageContainer,
  ProgressBar,
  Progress,
  QuestionBtnBox,
  AnswerBtn,
  InitialBtn,
  ProgressContainer,
} from "../styles/mungbtiStyle.js"
import { navigate } from "gatsby"

const Mungbti = () => {
  const updateProgressBar = progress => {
    const progressBar = document.getElementById("myProgressBar")
    progressBar.style.width = `${progress}%`
  }
  useEffect(() => {
    updateProgressBar(50)
  }, [])

  const goHome = () => {
    navigate("/mungbtiMain")
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
      <MainBox style={{ justifyContent: "flex-start" }}>
        <header>
          <h4 style={{ margin: "1rem auto" }}>멍BTI 테스트</h4>
        </header>
        <ProgressContainer>
          <ProgressBar class="progress-container">
            <Progress class="progress-bar" id="myProgressBar"></Progress>
          </ProgressBar>
          <p className="pageNum">3/23</p>
        </ProgressContainer>
        <ImageContainer>
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/mungbti@2x.png"
            height={300}
            alt="dancing Dog"
          ></StaticImage>
        </ImageContainer>
        <div>
          <h4>다른 강아지랑 만나면 우리 강아지는..</h4>
          <QuestionBtnBox>
            <AnswerBtn>
              <h4>나는 혼자가 좋은걸?</h4>
            </AnswerBtn>
            <AnswerBtn>
              <h4>너는 누구야? 나랑 놀자!</h4>
            </AnswerBtn>
          </QuestionBtnBox>
        </div>
        <InitialBtn onClick={goHome}>처음으로</InitialBtn>
      </MainBox>
    </div>
  )
}
export default Mungbti
