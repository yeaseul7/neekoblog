---
title: 크로스 브라우징과 웹 호환성
date: "2024-09-05T12:40:56.789Z"
description: 크로스 브라우징 테스트와 웹 호환성
category: Frontend
---

### 크로스 브라우징이란?

웹 표준 기술을 이용해서 여러 브라우저에서 같게 보이고 동작하게 만드는 것이다.

브라우저마다 Js나 css등 버전이 달라서 다르게 보이거나 동작할 수 있다.
모바일에서 브라우저마다 깨지는 경우가 빈번해서 확인할 필요가 있다. (특히 safari)

크로스 브라우징에서 테스트 해야하는 부분은 크게 몇 종류가 있다.

1. 기본 기능
   링크, 메뉴, select 등..
2. GUI
   즉, 스타일링이 깨지지 않고 다 제대로 보이느냐의 문제다.
3. 응답
   웹페이지가 각각의 브라우저에서 적절히 응답하는지

이것을 어떻게 테스트 할 수 있나?

- 직접 브라우저별로 테스트 하기
- [Caniuse](https://caniuse.com/?search=date)에서 테스트

- reset.css (CSS 재정의 프레임워크)
- https://necolas.github.io/normalize.css/ (CSS 재정의 프레임워크)
- Polyfill 구형 브라우저에서 최신 기능을 지원하기 위한 JS 프레임워크

- Lighthouse , chrome devtools사용
