---
title: javascript의 싱글스레드에 대해
date: "2025-12-10T12:40:56.789Z"
description: javascript가 싱글스레드인 이유
category: Frontend
---

### 멀티스레딩의 시대

"최신 CPU 아키텍처는 멀티코어를 통한 병렬 처리가 표준이 되었습니다.
자바스크립트는 싱글 스레드(Single Thread) 기반의 이벤트 루프 모델을 채택했습니다.

Multi-threading은 Concurrency issue가 치명적으로 존재합니다.

#### Concurrency Issue

여러 스레드가 하나의 자원(메모리)을 동시에 쓰려고 할 때 치명적인 문제가 발생합니다.
이를 **경쟁 상태(Race Condition)**라고 합니다.

하나의 자원(메모리)을 쓰는 순서는 운영체제에 따라 달라집니다. 따라서 예측하기가 매우 힘듭니다.
이로인해 타이밍 버그가 생길 수 있는데,
이 버그는 평소에는 보이지 않다가 디버깅하는 순간 타이밍이 바뀌면서 사라지는 **'하이젠버그(Heisenbug)'** 입니다.

#### 그래서 javascript는

javascript는 Dom 조작이 주된 일입니다.
만약 멀티스레드가 DOM을 조작하도록 허용한다면...?
한 스레드는 특정 노드를 삭제하려 하고, 다른 스레드는 동시에 그 노드의 색상을 변경하려 할 수 있습니다.
그러면 화면은 엉망...

따라서 javascript는 싱글스레드를 선택했습니다.

### 그럼에도 javascript가 빨라보이는 이유는?

이벤트 루프 덕분입니다.
V8엔진은 싱글스레드라서 한가지 일처리만 합니다.
하지만 javascript가 실행되는 런타임 환경(브라우저, node.js)은 멀티스레드로 구성되어있습니다.

javascript는 fetch, setTimeout..등의 처리는 Web Api에게 위임합니다.
그리고 이 작업을 기다리지 않습니다. 따라서 Non blocking 됩니다.

Web api가 작업을 끝냈다면 결과를 javascript가 작업하는 도중에 넣을 수 없기 때문에
곧바로 메인 스레드에 밀어 넣지 않고 **태스크 큐(Task Queue)**에 넣어 대기시킵니다.
이를 **Callback Queue**라고 합니다.

그리고 javascript에서 event Loop가 계속 돌면서 메인 스레드의 call stack과 Queue에 대기중인 작업이 있는지 확인합니다.
스택이 완전히 비었을 때(메인 스레드가 놀고 있을 때), 비로소 큐에 있는 콜백 함수를 꺼내 Call Stack으로 올려 실행합니다.
