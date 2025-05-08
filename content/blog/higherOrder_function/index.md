---
title: 고차 함수
date: "2025-02-23T20:00:00.000Z"
description: Javascript에 빠질 수 없는 개념인 고차 함수에 대해
category: Frontend
---

> Javascript는 함수형 프로그래밍이다.

### 함수형 프로그래밍이란?

단순하게 프로그래밍 패러다임 중 하나로, 불변성을 강조하며 프로그램의 상태 변경을 최소화 하는 것을 목표로 한 것이다.<br/>
개념 자체는 수학적 함수의 개념에 기반을 두고 있다.<br/>
불변성과 상태 변경을 최소화 한다는 것은 예측 가능성을 더 높여주는 것이라고 볼 수 있다.

### Javascript에서 함수

javascript에서 `함수는 일급 객체` 이다.<br/>
일반 객체와는 다르다.<br/>
**일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.**

```jsx
const obj = { name: "Dog" }
obj() // ❌ TypeError: obj is not a function
```

```jsx
function greet() {
  return "Hello!"
}

console.log(greet()) // ✅ "Hello!"
```

#### 일급 객체랑 일반 객체는 다른건가?

> 다르다.

일급 객체의 특징을 일반 객체는 모두 포함하고 있지 않다.<br/>
관계를 표현하면 아래와 같다.

```jsx
일반 객체(Object) ⊆ 일급 객체 ⊆ 함수(Function)
```

### 일급객체

1.  무명의 리터럴로 생성할 수 있다. (런타임에 생성이 가능하다.)<br/>
    익명 함수로 생성이 가능하다는 의미이다. <br/>
    익명 함수의 형태를 보면 런타임(할당 단계)에 생성되는 변수에 저장 하는 형태이기 때문이다.

    ````jsx
    const add = function (a, b) {
    return a + b;
    };

        console.log(add(2, 3)); // ✅ 5
        ```

    ````

2.  변수나 자료구조(배열, 객체)에 저장할 수 있다.
    변수에 저장되는 형태는 위의 예시와 같다.

    ````jsx
    const increase = function (num) {
    return ++num;
    };
    const decrease = function (num) {
    return --num;
    };

        const predicates = { increase, decrease };
        ```

    ````

3.  함수의 매개변수에 전달할 수 있다.

    ```jsx
    function plusFunc(increaseFunc) {
      let num = 0
      let result = increaseFunc(num)

      return result
    }

    // 위에서 predicates객체에 저장된 함수인 'increase'를 새로 생성한 plusFunc의 매개변수에 전달했다.
    const calculated = plusFunc(predicates.increase)

    console.log(calculated) // ✅ 1
    ```

4.  함수의 반환값으로 사용할 수 있다.

    ```jsx
    function applyOperation(operation, num) {
      return operation(num)
    }

    console.log(applyOperation(predicates.increase, 5)) // ✅ 6
    console.log(applyOperation(predicates.decrease, 5)) // ✅ 4
    ```

    ⚠️ 실제로 위의 코드에서 `applyOperation가 api를 사용해서 return을 얻을 경우` Promise 객체를 반환하여 예상하지 못한 동작을 할 수 있다.

    그래서 이럴 경우 `async/await` 를 활용해서 Promise가 해결된 값을 반환하도록 수정해야한다.

### 함수의 프로토타입 간략하게 보기

일반 객체는 기본적으로 프로퍼티를 가질 수 있다.<br/>
따라서 객체의 상속체계에 대한 정보를 가진 `__proto__` 가 존재하는데,<br/>
함수는 Object.prototype을 상속받는게 아닌 Function.prototype을 상속받는다.

추가로 `__proto__` 와 prototype의 차이에 대해 이해할 필요가 있다.

### 고차 함수(Higher order Function)

> 함수를 인자로 전달 받거나 함수를 결과로 반환하는 함수이다.

> 🔖 “A closure is the combination of a function and the lexical environment within which that function was declared.”

클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.
