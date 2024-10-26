import { getImage } from "gatsby-plugin-image"

export const getCareerList = data => [
  {
    img: getImage(data.qualisoftImg),
    imgAlt: "qualiSoftImg",
    careerName: "QualiSoft",
    period: "2024.04 ~ present",
    job: "Software Engineer",
    doitList: [
      {
        doitTitle: "QualiSoft",
        todoList: [
          " GC녹십자셀 CRM 페이지 개발",
          "Vue2로 프레임워크 변경 작업 수행",
          "사내 서버 기반 사이트 관리 페이지 개발 및 유지보수",
          "코드 리팩토링 및 최적화를 통해 로딩 시간 단축",
        ],
        techList: [
          "Vue2",
          "Azure",
          "MSDynamics365",
          "Node.js",
          "Docker Notion",
        ],
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
        doitTitle: "infinity",
        todoList: [
          "메인 프론트엔드 개발자 역할 담당 및 화면 디자인 및 설계 진행",
          "촬영 기능 개발",
          "마이페이지 기능 개발",
          "스타일 코드 모듈화 및 유지보수성 개선",
        ],
        techList: ["Flutter", "Vue2", "Figma", "Jira", "Spring"],
      },
    ],
  },
]
