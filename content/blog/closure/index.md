---
title: Closure
date: "2025-02-23T15:21:00.000Z"
description: Closure는 함수형 프로그래밍 언어에 등장한다.
category: Frontend
---

#### 🔖 Closure는함수형 프로그래밍 언어에 등장한다.

MDN의 Closure 정의

> “A closure is the combination of a function and the lexical environment within which that function was declared.”

> 클로저는 함수와 그 함수가 선언된 환경정보의 조합이다.

## Closure

외부함수보다 중첩함수가 더 오래 유지되는 경우 (생명주기가 종료된 외부함수의 변수를 중첩함수 내부에서 참조하는 현상)

원래는 함수가 리턴하면 함수 내의 변수들은 GC에 의해 사라진다.

```jsx
const x = 1

function outer() {
  const x = 10
  const inner = function () {
    console.log(x)
  }
  return inner
}

const innerFunc = outer()

innerFunc() //✅ 10
```

outer가 inner를 반환한 시점에서 outer의 LifeCycle은 끝이 났다.<br/>
하지만 innerFunc은 outer안에 있는 지역변수 x의 값을 찍고 있다.

"x는 private 변수이다 -> closure로 priovate 변수를 만들 수 있다."

inner함수가 평가될 때 inner 함수의 환경에는 상위 스코프에 대한 정보가 있을 것이다.<br/>
outer 함수는 평가될 때 전역 스코프를 함수의 환경 정보에 저장하고 있을 것이다.

<img src="../closure/closure_1.png" alt="closure_1" width="500"/><br/>

outer 함수가 return 하면 해당 실행 컨텍스트는 제거되고 생명주기도 끝나지만<br/>
outer의 렉시컬 환경은 내부 슬롯에 저장되어있다.

<b>그러면 해당 변수는 닿을 수 있는 오브젝트가 되는것이다. -> GC의 대상 === 닿을 수 없는 오브젝트</b>

inner 함수가 외부 렉시컬 환경을 outer 함수로 참조하고 있기 때문에 GC가 함부로 가져가지 않는다.<br/>
이러한 현상을 클로저라고 한다.

<img src="../closure/closure_2.png" alt="closure_2" width="500"/><br/>

inner 함수를 반환 받은 innerFunc에 의해 inner 함수가 더 오래 생존하게 된 것이다.<br/>
즉 inner 함수의 외부 렉시컬 환경에 outer의 x가 들어있기 때문에 innerFunc에서 10이 나오는 것이다.

상위 스코프의 어떤 식별자도 참조하지 않는 경우 대부분의 모던 브라우저는 최적화를 통해 상위 스코프를 기억하지 않는다. 따라서 Closure라고 말할 수 없다.

```javascript
function outer() {
  let hidden = 123
  return function inner() {
    return 42 // hidden을 사용하지 않음
  }
}

const fn = outer()
console.log(fn()) // 42
```

이게 예시인데 브라우저에 따라 최적화에 실패할 경우 메모리 누수가 발생할 수 있다. <br/>
Closure를 사용하고 나서도 메모리 누수가 발생할 수 있기 때문에 후처리가 필요하다.

```javascript
function outer() {
  const state = { x: 10 }
  const inner = function () {
    console.log(state.x)
  }
  inner.clear = function () {
    state.x = null // 내부에서 접근 가능
  }
  return inner
}

const innerFunc = outer()
innerFunc() // 10
innerFunc.clear() // x를 null로 설정
innerFunc() // null
```
