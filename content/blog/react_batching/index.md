---
title: react의 batchingUpdate
date: "2025-05-27T18:00:00.000Z"
description: 여러 상태 업데이트를 하나의 리렌더링으로 그룹화하는 최적화 기법
category: Frontend
---

### 📚 Intro

setState를 호출하면 React는 즉시 리렌더링을 수행하지 않고 해당 업데이트를 큐에 등록한 후 이벤트 핸들러의 실행이 끝날 때까지 기다린다.
<br/>
이 부분과 batchingUpdate이랑 연관이 있다고 하는데 <br/>
batchingUpdate이 무엇인지 그리고 React 18에 새롭게 추가된 것이 무엇인지 무지상태에서 파해쳐보기로 한다.

---

### Batching

state는 각 랜더링마다 고정되어있는데 만약 state가 여러개 바뀌면 어떻게 될까?<br/>
setNumber()와 setName()이런 함수가 여러번 나뉘어서 실행되나?<br/>

아니다.<br/>
불필요한 랜더링을 방지하기 위해 이벤트 핸들러의 모든 코드가 실행될 때까지 기다린다.<br/>
즉, state의 업데이트 작업을 모아 일괄 처리하는 방식을 Batching이라고 한다.<br/>

```jsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    // 아래 작업들은 일괄작업으로 처리된다.
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <button onClick={increaseCount}>+1</button>
      <p>Count : {count}</p>
    </div>
  )
}

export default Counter
```

React는 여러 번 호출된 setState를 내부적으로 큐에 모아두고 하나의 일괄 작업(batch)으로 처리해 단 한 번만 리렌더링을 발생시킨다.

---

### React 18에 추가된 Automatic Batching

기존에 batching은 언제 상태를 묶어서 처리하는지 일관되지 않았다는 문제점이 있었다.

```jsx
function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  function handleClick() {
    fetchSomething().then(() => {
      // React 17 이하에서는 batching이 발생하지 않음
      setCount(c => c + 1) // 리렌더링 발생
      setFlag(f => !f) // 또 다시 리렌더링 발생
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  )
}
```

위에처럼 onClick 같은 React 이벤트 헨들러 내부에서만 batch가 발생했다.
fetch, serTimeout, Promise 콜백 내부에서는 batching이 일어나지 않는다.

때문에 위의 코드에서 두번의 렌더링이 발생한다.

하지만 React 18 이루부터는 fetch나 serTimeout안에서는 상태 업데이트도 자동 batching된다.

React 18에서는 createRoot를 사용하면 자동 배칭이 기본 적용된다.
ReactDOM.render()방식은 여전히 2번의 리렌더링이 일어난다.

#### legacy render

```jsx
import * as ReactDOM from "react-dom" // 옛 방식
// ...
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

#### create Root

```jsx
import * as ReactDOMClient from "react-dom/client" // React 18 방식
// ...
const rootElement = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)
root.render(<App />)
```

---

### 참고 자료

- [Automatic batching for fewer renders in React 18](https://github.com/reactwg/react-18/discussions/21)
