import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
  DogLottieWrapper,
} from "../styles/profileStyle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import walkingDog from "../lottie/walkingDog.json"
import { getCareerList } from "../content/profile"

const Profile = () => {
  const data = useStaticQuery(linkListQuery)
  const [Lottie, setLottie] = React.useState(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      import("lottie-react").then(module => {
        setLottie(module.default)
      })
    }
  }, [])

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

  return (
    <main className="global-wrapper">
      <ProfileDiv>
        <ProfileHeader>
          <ProfileTitle>NEEKO RESUME</ProfileTitle>
          <DogLottieWrapper>
            {Lottie && (
              <Lottie
                animationData={walkingDog}
                loop={true}
                style={dogLottieStyle}
              />
            )}
          </DogLottieWrapper>
        </ProfileHeader>
        <ProfileLinkList>
          {linkList.map(el => {
            return (
              <li key={el.imgAlt}>
                <a href="/" type="blank" alt="Neeko Dev Blog">
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
        '프론트와 어울림' 스터디를 주도하여 JavaScript의 핵심 개념인 Hoisting,
        실행 컨텍스트, 웹 표준, 브라우저 동작 원리 등을 학습했습니다.
        <br />
        각 주제를 팀원들에게 강의하면서, 팀장의 역할로 Notion과 Discord를 활용해
        팀원들이 학습 내용을 체계적으로 복습하고 공유할 수 있도록 적극적으로
        이끌었습니다.
        <br />
        또한, 개인 블로그에 학습 내용을 정리해 외부 피드백을 끊임없이 받아들이며
        지속적으로 성장하고 있습니다.
        <br />
        <Link to="/">개인 블로그 들어가기</Link>
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
      {/* <SectionDiv>
        <ListTitle>Award</ListTitle>
        <DogLottieWrapper>
          <Lottie animationData={trophy} loop={3} style={dogLottieStyle} />
        </DogLottieWrapper>
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
      </ul> */}
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
