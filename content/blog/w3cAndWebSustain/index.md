---
title: 웹 표준과 웹 호환성
date: "2024-09-05T12:40:56.789Z"
description: 웹 표준과 웹 호환성에 대해 학습한다.
category: Frontend
---

### 웹 표준이란?

![Network이미지](../w3cAndWebSustain/browsers.jpeg)

여러 국제 표준 기구가 정한 규칙

웹 표준은 웹의 사용성과 접근성을 극대화 하도록 조정된다.

**종류**

- IETF(Internet Engineering Task Force) : URI, HTTP 등 설정과 사용에 대한 표준 **(STD)**
- W3C : 마크업 언어에 대한 명세 (HTML, XHTML, SVG, CSS 등)
- Ecma : 스크립팅 표준

웹 표준이 없던 1990년대 말 쯤에는 표준이 없어서 브라우저마다 사이트를 만들어야 했다. (Explore, 넷스케이프)

웹표준을 지켜서 개발하면 크롤러가 나의 사이트의 구조와 콘텐츠를 더 명확하게 이해할 수 있다. **(SEO 최적화)**

[웹표준](https://www.w3.org/standards/)은 여기서 확인할 수 있다.

### 웹 접근성이 무엇인가요?

웹 표준은 웹 접근성, 사생활 보호, 보안, 국제화의 측면에서 고려되어야 한다고 한다.
그 중 웹 접근성은 장애를 가진 사람과 가지지 않은 사람 모두가 웹사이트를 이용할 수 있게 한다는 것을 의미 한다.

예를들어 시각장애인은 '스크린 리더'라는 것을 이용해서 웹페이지 내용을 파악하는데
스크린 리더가 읽을 수 있게 이미지만 올려놓는게 아닌 alt 등으로 설명을 추가해야한다.
이게 웹 접근성을 고려한 것이다.

```
<img arc = "img/login.png" alt="로그인 />
```

---

_출처: https://goddaehee.tistory.com/244 [갓대희의 작은공간:티스토리]_
