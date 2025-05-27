---
title: react의 상태(State)에 대해
date: "2024-10-02T12:40:56.789Z"
description: react에는 Global, Local, Cross Component State가 있다고 한다.
category: Frontend
---

### 📚 Intro

batchingUpdate에 대해 공부하기 전에 State의 동작원리에 대해 더 자세히 알아봐야 겠다고 생각했다.
공식문서를 보니 state동작에 대한 얘기가 많아서 이것부터 파해쳐보자

---

### ❤️ State 업데이트 큐

`setState`를 여러번 하면 한번만 실행된다.

```jsx
const [count, setCount] = useState(0)

// 이런 방식으로 연속적인 setState를 호출하면
setCount(count + 1) // 0 -> 1
setCount(count + 1) // 0 -> 1 (여전히 count는 0)
setCount(count + 1) // 0 -> 1 (여전히 count는 0)
```

setState는 변수를 설정하면 렌더링 큐에 들어가는 것이지 바로 바뀌지 않는다.<br/>
그래서 다음 렌더링을 큐에 넣기 전에 작업을 더 해야되는 경우가 생긴다.<br/>

```jsx
//이전 값 사용한 예시
setCount(prev => {
  const next = prev + 1
  // 여기서 여러 작업 가능
  console.log("다음 값은:", next)
  return next
})
```

그럴때 위처럼 작업하면 되는데 이를 updater function이라고 부른다.

```jsx
//이전 값 여러번 사용한 예시
setNumber(n => n + 1)
setNumber(n => n + 1)
setNumber(n => n + 1)
```

이런 코드가 있으면 처음 n이 0이라고 할 때 함수 각각 하나씩 큐에 추가가 된다.<br/>
그리고 렌더링중에 이 함수들이 실행되는 흐름은<br/>
n=0 -> n=1 -> n=2 -> n=3 이렇게 된다.

각 렌더링의 state 값은 고정되어있다.<br/>

```jsx
//state 교체 개념
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

위와 같이 하면 처음 number는 사용되지 않는다. 교체되는 개념이다.
조금 더 확실히 하면

```jsx
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>
```

이렇게 했을 때 결과가 42가 된다.
