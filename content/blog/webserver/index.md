---
title: 웹서버
date: "2025-05-08T16:00:00.000Z"
description: 웹서버와 WAS의 차이
category: Frontend
---

### 1. 웹서버란?

웹서버는 하드웨어, 소프트웨어 관점 두가지로 해석될 수 있다.<br/>
나는 정의를 내리려고 했는데 관점에따라 두가지 정의가 있을 수 있다고 한다.

하드웨어 관점 : HTTP 요청을 받고 HTML 같은 문서를 반환하는 **컴퓨터**<br/>
소프트웨어 관점 : 클라이언트로부터 HTTP 요청을 받아서 HTML문서 같은 페이지를 반환하는 **소프트웨어**

```jsx
// 예시
Apache, Nginx, Node.js의 http.createServer() 같은 것
```

### 2. 웹서버 특징

- 웹서버는 HTML 문서를 저장하고 있어야 한다.
- 항상 실행중이어야 한다.
- 항상 인터넷과 연결되어있다.
- 항상 같은 IP를 가지고 있다.
- 제 3자에 의해 유지보수 된다.

> 예를 들어 우리가 깃허브에 HTML 문서를 올리고 그걸 Vercel과 연동해서 Vercel이 깃허브 레포에 있는 HTML문서를 가지고 있고 개발자가 서버를 키면 그게 고정된 IP로 호스팅 되는 경로이다.

**정적 사이트**<br/>
→ 있는 그대로 제공되는 것<br/>
파일 내용이나 데이터가 정적입니다.<br/>
말그대로 모든 사용자가 동일한 내용을 본다.

**동적 사이트**<br/>
→ 동적으로 콘텐츠가 바뀔 수 있는 것<br/>
사용자마다 다른 데이터를 볼 수 있는 사이트

---

### 1. WAS란?

동적인 content를 처리하고 제공하는 서버이다.<br/>
웹 애플리케이션 실행 및 데이터 처리, 웹 서버와 클라이언트 간의 중계 역할을 한다.

```jsx
// 예시
Tomcat, JBoss, WebLogic, WebSphere
```

조금 더 자세히 설명하자면 WAS는 클라이언트의 요청에 따라 DB에서 정보를 가져오거나, Web application을 실행해서 동적인 웹 페이지를 생성한 후 결과를 웹 서버에 전달한다.

#### 보통은 WAS서버와 웹서버가 협업하여 사이트가 실행된다.

쇼핑몰 같은 경우 검색, 장바구니 같은 것은 WAS 서버가 처리하고 css나 정적 image 들은 웹서버에서 제공한다.
