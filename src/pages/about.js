import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ProfileLinkList,
  ProfileDiv,
  CareerList,
  CareerBox,
  ListTitle,
  DetailBox,
  IntroBox,
  TagBox,
  ProfileTitle,
  dogLottieStyle,
  ProfileHeader,
  SectionDiv,
} from "../styles/profileStyle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Lottie from "lottie-react"
import walkingDog from "../lottie/walkingDog.json"
import trophy from "../lottie/trophy.json"
import { getCareerList } from "../content/profile"

const Profile = () => {
  const data = useStaticQuery(linkListQuery)

  const careerList = getCareerList(data)
  const linkList = [
    {
      src: getImage(data.profileImage),
      imgAlt: "Profile picture",
      aLabel: "Dev Blog",
    },
    {
      src: getImage(data.githubImage),
      imgAlt: "Github",
      aLabel: "github.com/yeaseul7",
    },
    {
      src: getImage(data.gmailImage),
      imgAlt: "Gmail",
      aLabel: "cutie32769@gmail.com",
    },
    {
      src: getImage(data.naverImage),
      imgAlt: "Naver",
      aLabel: "Naver Blog",
    },
  ]
  // const careerList = [
  //   {
  //     img: getImage(data.qualisoftImg),
  //     imgAlt: "qualiSoftImg",
  //     careerName: "QualiSoft",
  //     period: "2024.04 ~ present",
  //     job: "Software Engineer",
  //     doitList: [
  //       {
  //         doitTitle: "QualiSoft",
  //         todoList: [
  //           " GC녹십자셀 CRM 페이지 개발",
  //           "Vue2로 프레임워크 변경 작업 수행",
  //           "사내 서버 기반 사이트 관리 페이지 개발 및 유지보수",
  //           "코드 리팩토링 및 최적화를 통해 로딩 시간 단축",
  //         ],
  //         techList: [
  //           "Vue2",
  //           "Azure",
  //           "MSDynamics365",
  //           "Node.js",
  //           "Docker Notion",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     img: getImage(data.toinfinityImg),
  //     imgAlt: "toinfinityImg",
  //     careerName: "To-infinity",
  //     period: "2023.11 ~ 2024.02",
  //     job: "Software Engineer",
  //     doitList: [
  //       {
  //         doitTitle: "infinity",
  //         todoList: [
  //           "메인 프론트엔드 개발자 역할 담당 및 화면 디자인 및 설계 진행",
  //           "촬영 기능 개발",
  //           "마이페이지 기능 개발",
  //           "스타일 코드 모듈화 및 유지보수성 개선",
  //         ],
  //         techList: ["Flutter", "Vue2", "Figma", "Jira", "Spring"],
  //       },
  //     ],
  //   },
  // ]
  return (
    <main className="global-wrapper">
      <ProfileDiv>
        <ProfileHeader>
          <ProfileTitle>NEEKO RESUME</ProfileTitle>
          <Lottie
            animationData={walkingDog}
            loop={true}
            style={dogLottieStyle}
          />
        </ProfileHeader>
        <ProfileLinkList>
          {linkList.map(el => {
            return (
              <li key={el.imgAlt}>
                <a href="" type="blank" alt="Neeko Dev Blog">
                  {el.aLabel}
                </a>
                <GatsbyImage image={el.src} alt={el.imgAlt} />
              </li>
            )
          })}
        </ProfileLinkList>
      </ProfileDiv>
      <IntroBox>
        <h3 style={{ margin: "10px auto" }}>
          주도적으로 성장하는 개발자 이예슬입니다.
        </h3>
        <br />
        ‘프론트와 어울림’ 스터디를 주도하여 JavaScript의 핵심 개념인 Hoisting,
        실행 컨텍스트, 웹 표준, 브라우저 동작 원리 등을 학습했습니다.
        <br />
        각 주제를 팀원들에게 강의하면서, 팀장의 역할로 Notion과 Discord를 활용해
        팀원들이 학습 내용을 체계적으로 복습하고 공유할 수 있도록 적극적으로
        이끌었습니다.
        <br />
        또한, 개인 블로그에 학습 내용을 정리해 외부 피드백을 끊임없이 받아들이며
        지속적으로 성장하고 있습니다.
        <br />
        <a
          alt="개인 블로그"
          href="https://yeaseul7.github.io/neekoblog/hoisting/"
          type="blank"
        >
          개인 블로그 들어가기
        </a>
      </IntroBox>
      <SectionDiv>
        <ListTitle>Career</ListTitle>
      </SectionDiv>
      <hr />
      <ul>
        {careerList.map(career => {
          return (
            <CareerList key={career.careerName}>
              <CareerBox>
                <div className="imgBox">
                  <GatsbyImage image={career.img} alt={career.imgAlt} />
                  <p>{career.period}</p>
                </div>
                <div className="careerTextBox">
                  <p className="careerTitle">{career.careerName}</p>
                  <p className="careerjob">{career.job}</p>
                  {career.doitList.map(el => {
                    return (
                      <DetailBox key={el.doitTitle}>
                        {el.todoList.map(e => {
                          return (
                            <p key={e} style={{ padding: "5px", margin: "0" }}>
                              - {e}
                            </p>
                          )
                        })}
                        <TagBox>
                          {el.techList.map(tech => {
                            return (
                              <div className="tags" key={tech}>
                                {tech}
                              </div>
                            )
                          })}
                        </TagBox>
                      </DetailBox>
                    )
                  })}
                </div>
              </CareerBox>
            </CareerList>
          )
        })}
      </ul>
      <SectionDiv>
        <ListTitle>Award</ListTitle>
        <Lottie animationData={trophy} loop={3} style={dogLottieStyle} />
      </SectionDiv>
      <hr />
      <ul>
        {careerList.map(career => {
          return (
            <CareerList key={career.careerName}>
              <CareerBox>
                <div className="imgBox">
                  <GatsbyImage image={career.img} alt={career.imgAlt} />
                  <p>{career.period}</p>
                </div>
                <div className="careerTextBox">
                  <p className="careerTitle">{career.careerName}</p>
                  <p className="careerjob">{career.job}</p>
                  {career.doitList.map(el => {
                    return (
                      <DetailBox key={el.doitTitle}>
                        {el.todoList.map(e => {
                          return <p key={e}>{e}</p>
                        })}
                        {el.techList.map(tech => {
                          return <div key={tech}>{tech}</div>
                        })}
                      </DetailBox>
                    )
                  })}
                </div>
              </CareerBox>
            </CareerList>
          )
        })}
      </ul>
    </main>
  )
}

export default Profile
export const linkListQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "porfile/neekoblog.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 20
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    githubImage: file(relativePath: { eq: "porfile/github.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 20
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    gmailImage: file(relativePath: { eq: "porfile/gmail.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 20
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    naverImage: file(relativePath: { eq: "porfile/naver.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 20
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    linkedinImage: file(relativePath: { eq: "porfile/linkedin.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 20
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    toinfinityImg: file(relativePath: { eq: "porfile/toinfinity.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 90
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    qualisoftImg: file(relativePath: { eq: "porfile/quali.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 90
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
