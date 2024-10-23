import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ProfileLinkList,
  ProfileDiv,
  CareerList,
  CareerBox,
  ListTitle,
  HrStyle,
  DetailBox,
} from "../styles/profileStyle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Profile = () => {
  const data = useStaticQuery(linkListQuery)

  const linkList = [
    {
      src: getImage(data.profileImage),
      imgAlt: "Profile picture",
      aLabel: "Neeko Dev Blog",
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
    {
      src: getImage(data.linkedinImage),
      imgAlt: "Linkedin",
      aLabel: "Linkedin",
    },
  ]
  const careerList = [
    {
      img: getImage(data.qualisoftImg),
      imgAlt: "qualiSoftImg",
      careerName: "QualiSoft",
      period: "2024.04 ~ present",
      job: "Software Engineer",
      doitList: [
        {
          doitTitle: "dddd",
          todoList: ["ㅇㅇㅇㅇ", "ㄴㅇㅁㄴㄹㄴㄹ"],
          techList: ["azure"],
        },
      ],
    },
    {
      img: getImage(data.toinfinityImg),
      imgAlt: "toinfinityImg",
      careerName: "To-infinity",
      period: "2023.11 ~ 2024.02",
      job: "Software Engineer",
      doitList: [
        {
          doitTitle: "dddd",
          todoList: ["ㅇㅇㅇㅇ", "ㄴㅇㅁㄴㄹㄴㄹ"],
          techList: ["Jira"],
        },
      ],
    },
  ]

  return (
    <main className="global-wrapper">
      <ProfileDiv>
        <h1>Neeko Resume</h1>
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
      <div>
        <p>
          꾸준히 학습하며 즐기는 개발자가 되고자 합니다.
          <br /> 매달 개발 관련 서적을 읽고 정리하며 스터디 모임을 즐겨합니다.
          <br />
          스터디 한 내용은
          <a href="https://yeaseul7.github.io/neekoblog/hoisting/">
            {" "}
            블로그에{" "}
          </a>
          정리하며 오류를 수정하고 피드백을 적극 수용하기 위해 팀원들과
          공유합니다. <br />
          근래에는 javascript 스터디에 참여하여 활동하고 있습니다. 해당
          스터디에서는 javascript core 내용을 다시 되짚어보고 있습니다.
          <br />
          <br />
          맡은 바 최선을 다하고 싶습니다. <br />
          교내 경진대회 수상작 UNIMEET을 진행했을 당시 팀 리더의 역할을
          맡았습니다.
          <br /> 해당 프로젝트에서 Notion과 Figma를 통해 디자인을 기획하고
          팀간의 소통을 주도했습니다. 그 결과{" "}
          <b>팀원들의 노력과 함께 경진대회 은상</b>을 수상할 수 있었습니다.
          <br />
          <br />
          저는 개발을 즐기는 개발자가 되기 위해 고민합니다. <br />
          개발을 즐기려면 먼저 실력이 따라와야 한다고 생각합니다. <br />
          따라서 앞으로도 스터디에 참여하는 등의 방법으로 꾸준히 성장해 나갈
          것입니다.
          <br />
          감사합니다.
        </p>
      </div>
      <ListTitle>Career</ListTitle>
      <HrStyle />
      <ul>
        {careerList.map(career => {
          return (
            <CareerList>
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
                      <DetailBox>
                        <details>
                          <summary>{el.doitTitle}</summary>
                          {el.todoList.map(e => {
                            return <summary>{e}</summary>
                          })}
                        </details>
                        {el.techList.map(tech => {
                          return <div>{tech}</div>
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

export const linkListQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "porfile/neekoblog.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    githubImage: file(relativePath: { eq: "porfile/github.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    gmailImage: file(relativePath: { eq: "porfile/gmail.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    naverImage: file(relativePath: { eq: "porfile/naver.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    linkedinImage: file(relativePath: { eq: "porfile/linkedin.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 24
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
export default Profile
