---
title: 웹팩 (1)
date: "2025-01-14T12:40:56.789Z"
description: 웹팩 개념 자세히 보기
category: Frontend
---

webpack은 Javascript 애플리케이션을 위한 Static Module Bundler이다.

애플리케이션을 처리할 때 필요한 모듈을 매핑하고 하나 이상의 번들을 생성하는 'Dependency Graph'를 만든다.

### Dependency Graph

어떤 파일이 다른 파일에 의존할때마다 webpack은 이걸 의존성으로 취급한다.

#### 그러면 어떻게 의존되어있는 것을 알까?

먼저 webpack은 애플리케이션을 처리할 때, command line 또는 설정파일(webpack.config.js)에 정의된 모듈 목록에서부터 처리를 시작한다.
이걸 Entry Point라고 한다.

Entry Point에서 webpack은 필요한 모든 모듈을 포함하는 Dependency Graph룰 재귀적으로 빌드한 다음, 모든 모듈을 브라우저에 의해 로드 되는 작은 수의 번들로 묶는다.

이렇게 되면 HTTP/1.1의 경우 요청 간의 대기시간의 최적화 할 수 있으므로 빠르게 로드 할 수 있다.
