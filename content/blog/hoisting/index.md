---
title: 호이스팅
date: "2024-09-26T12:40:56.789Z"
description: 호이스팅과 실행컨텍스트에 대해 살펴본다.
category: Frontend
---

_들어가면서._

자바스크립트 코어를 공부하면서 호이스팅과 실행 컨텍스트에 대해서 공부했다.
호이스팅은 너무 유명한 개념에다가 거의 기본 개념 같은 거지만 코어에서 빠지지 않고 나오는 것 같다.
그래서 과거에 정리했던 것보다 더 자세히 정리하고자 추가했다.

호스팅 하면 실행 컨텍스트에 대한 내용을 빼먹을 수 없는데
호이스팅과 비교하면 매우 머리 아프고 복잡한 과정이다.🥲

솔직히 한 번만 보고 이해할 수 있다면 당신은 대단한 사람입니다.

이번 포스팅은 modern javascript 책을 적극 참고해서 작성하였다.

---

### 호이스팅이 무엇인가?

Hoisting이라는 언어는 끌어올리다는 의미이다.
사실 실제로 끌어올린다는 의미는 아니고 끌어올리는 것 처럼 보이는거다.
제대로 말하려면 메모리가 먼저 할당된다고 해야된다.

js 엔진이 코드를 실행하기 전에 변수나 함수를 메모리에 저장하는데  
이게 끌어올려서 저장하는 것처럼 보였나.. 그래서 **호이스팅**이라고 한다.

js 엔진이라는 얘기가 나왔다.  
그 엔진이 어떻게 하길래 변수나 함수만 쏙 쏙 메모리에 저장한다는 것일까?

쉽게 말하면 javascript가 코드를 실행하기 전에 먼저 쭉 보면서 평가를 한다.  
**'아 여기 x라는 변수 있고... add라는 함수 있고..'**  
이런 식으로 말이다.

그러면서 **여기 x 있다~ add 있다~ 얘네 저장될 공간 좀 미리 만들어줘~**
이게 호이스팅이다.

var로 선언하거나 함수 선언문으로 만들어진 애들은  
할당되기 전에 참조할 수 있는 상태가 된다. Reference Error가 나지 않는다.

이때 변수 선언문이 var로 작성된 애들과 ES6 문법 이후에 let과 const로 선언된 애들은 **다르게 호이스팅된다.**  
둘 다 코드를 평가하면서 메모리를 주는데 그 메모리 환경이 다르다.

var는 전역 객체로 저장되는 곳으​로 가고
let과 const는 선언만 되는 곳으로 간다.

그래서 var나 함수 선언문으로 만들어진 애들은 Reference Error가 나지 않는 것이다.  
반면 let과 const는 선언만 되었고 초기화는 안되었기 때문에 참조할 수 없는 상태이다.  
따라서 Reference Error가 발생한다.

함수 선언문이라는 말을 자주 사용했다.

_함수 선언문과 함수 표현식은 다르다._

```javascript
const a = function () {
  //...
}
```

이렇게 표현식은 변수만 호이스팅되고 함수 자체는 실행되지 않는다.  
하지만

```javascript
function a() {
  //...
}
```

이렇게 선언문은 var와 같이 호이스팅되어 함수 자체를 실행 가능하게 한다.

---

호이스팅 하면 실행 컨텍스트가 빠질 수 없다.

실행 컨텍스트를 이해하면 호이스팅에 대해 더 자세히 알 수 있다.

#### 먼저 실행 컨텍스트가 무엇인가?

코드를 실행하는데 필요한 환경을 제공하고 실행 결과를 관리하는 영역이다.  
실행 흐름을 관리하는 역할이다.

이렇게만 들으면 감이 잘 안 온다.😅  
일단 실행 컨텍스트가 생기는 과정부터 이해해 보자

ECMA script가 소스를 먼저 구분하고 그에 맞게 실행 컨텍스트가 생긴다.

1. 전역 코드 - 전역 실행 컨텍스트
2. 함수 코드 - 함수 실행 컨텍스트
3. Eval 코드 - Eval 실행 컨텍스트
4. module 코드 - module 실행 컨텍스트

위와 같이 구분하고 각 코드마다 실행 컨텍스트가 생성된다.

코드들은 평가된 후에 실행 컨텍스트가 생성되고 소스코드가 실행된다.  
js는 코드를 실행하기 전에 평가와 실행 컨텍스트 생성 과정을 통해 준비를 한다고 생각하면 된다.

---

**1. 전역 코드와 전역 실행 컨텍스트**
전역 변수 등을 관리하기 위한 최상위의 전역 스코프를 생성하는데 이 스코프를 전역 실행 컨텍스트가 관리한다.  
 해당 스코프의 전역 변수들은 전역 객체와 연결된다.

이 과정은 전역 코드가 평가될 때 실행된다.

**2. 함수 코드와 함수 실행 컨텍스트**
지역 스코프를 생성하고 그 안의 지역 변수, 매개변수, arguments 객체를 관리한다.  
지역 스코프는 전역 스코프에서 시작하는 스코프 체인의 하나로 연결된다.

마찬가지로 함수 코드가 평가될 때 실행된다.

**3. Eval 코드와 Eval 실행 컨텍스트**
strict mode에서 자신만의 독자적인 스코프를 생성하고 관리한다.

eval()은 js에서 문자열로 된 코드를 실행할 수 있는 함수이다.  
일반적인 상황에서 eval은 아래와 같이 쓰인다.

```javascript
var x = 10
eval("var y = 20; console.log(x);") // 10 출력 -> 현재 스코프의 x에 '접근' 가능하다.
console.log(typeof y) // "number"
```

하지만 strict 모드에서는

```javascript
"use strict"

var x = 10
eval("var y = 20; console.log(x);") // 10 출력 x는 현재 스코프에서 참조 가능
console.log(typeof y) //y는 독립된 스코프에 존재하기 때문에 'undefined'출력
```

이렇게 독자적인 스코프를 가질 수 있다는 의미이다.

**4. module 코드와 module 실행 컨텍스트**
모듈별로 독자적인 스코프를 생성하고 관리한다.

module 개념이 ES6 이후에 나온 개념이다.  
모듈은 다른 모듈이나 전역 스코프와 독립적으로 동작한다.  
import export 키워드를 통해서 다른 모듈의 값에 접근할 수 있는 상황을 생각하면 편하다.

---

이렇게 생성된 실행 컨텍스트들은 선언문으로 생성된 변수나 함수를 해당 컨텍스트가 관리하는 스코프에 등록한다.  
그 스코프는 Lexical Environment의 레코드이다.

Lexical Environment의 끝날 때쯤 설명하겠다.  
그냥 이런 게 있구나 하고 넘어가자.🫠

예시를 보면서 더 자세히 이해해 보자.

```javascript
const x = 1
const y = 2

function add(a) {
  const x = 1
  const y = 2
  console.log(a + x + y)
}

add(3)

console.log(x + y)
```

이렇게 코드가 있으면 먼저 코드를 싹 돌면서 평가를 한다.  
"아.. 여기 x... y.. add 있구나.. 얘네 미리 메모리 공간 줘~" 평가하면서 이 과정도 거친다.

이걸 **호이스팅**이라고 했다.  
호이스팅 과정에서 전역 객체에 프로퍼티와 메서드가 추가되는 것이다.  
이게 **첫 번째 과정인 전역 코드 평가**이다.

이후에 런타임이 시작된다. 코드를 실행하면서 변수에 값이 할당되거나 함수가 호출되는 것이다.  
이때 함수를 만나면 "전역 코드 실행 멈춰~나 add라는 함수 만났어"를 한다.  
이건 **두 번째 과정인 전역 코드 실행** 과정이다.

전역 코드 실행을 멈추고 함수 코드가 평가되면서 지역 스코프에 변수들이 선언된다.  
"add라는 함수 안에 들어왔는데 여기 x 있고.. y 있고.. console.log도 있어~"이런 식으로 말이다.  
이때 arguments 객체가 생성되어 지역 스코프에 같이 등록되고 this 바인딩도 결정된다.  
세 번째 과정인 **함수 코드 평가** 과정이다.

이후에 코드가 실행되는 런타임이 시작된다. 함수 코드가 실행되면서 변수에 값이 할당되고 console을 찾아 log 함수도 실행한다.  
"add 안에 x한테 1 y한테 2 줘 그리고 console이라는 애가 어떤 앤지 찾아봐봐, 찾았어? 거기에 Log 있어? 아 함수야? 그거 실행시켜" 이렇게 된다.  
이건 네 번째 과정인 **함수 코드 실행 과정**이다.

네 번째 과정에서 console을 찾는 방법을 간략하게 설명하자면  
console이라는 애는 코드상에서 따로 정의되어 있는 게 보이지 않는다. 이건 전역 객체의 프로퍼티로 존재하는데  
지역 스코프에서 어떻게 전역 객체의 프로퍼티로 접근하냐면  
지역 스코프와 (전역 객체 프로퍼티가 존재하는) 전역 스코프는 스코프 체인으로 연결되어 있다.  
그래서 참조를 따라가서 전역 스코프에서 찾아내는 것이다.

예시를 통해 봤던 위의 과정을 실행 컨텍스트가 관리한다.
그러면 초반에 설명했던  
실행 컨텍스트는 "코드를 실행하는데 필요한 환경을 제공하고 실행 결과를 관리하는 영역이다.  
실행 흐름을 관리하는 역할이다."라고 했던 게 조금은 이해가 될 것이다.

---

조금만 더 깊게 살펴보자🤔  
실행 컨텍스트는 위의 과정을 어떻게 실행하나?  
실행 컨텍스트는 흐름은 실행 컨텍스트의 stack으로 식별자와 스코프는 Lexical environment로 관리한다.  
그러면 위에서 잠깐 보고 넘어갔던 Lexical Environment가 실행 컨텍스트에서 식별자랑 스코프 관리하는 데에 쓰이는 것이라는 것을 알 수 있다.

#### 실행 컨텍스트 스택

예시 코드를 통해 살펴보자

```javascript
const x = 1
const y = 2

function add(a) {
  const x = 1
  const y = 2
  function change() {
    x = 3
    y = 4
    console.log(x + y)
  }
  change()
}

add(3)
console.log(x + y)
```

이런 코드가 있다.

이때 스택 전체를 살펴보면
![contextstack](../hoisting/contextStack.png)

아까 위에서 예시로 계속 설명했던 실행 컨텍스트의 실행 과정과 함께 보면 이해가 '빡' 될 것이다.  
이렇게 스택으로 관리하기 때문에  
전역 실행 컨텍스트가 일을 멈추고 함수 실행 컨텍스트에서 일을 하고 다시 돌아오는 등의 과정이 있을 수 있는 것이다.

---

### Lexical Environment

조금 어려울 수 있는 Lexical Environment에 대해서 살펴보자  
간단하게 식별자와 그 값 그리고 상위 스코프에 대한 참조를 기록하는 자료구조이다.
조금 더 간단하게는 **스코프와 식별자를 관리하는 저장소**이다.

예시 코드로 보면 아래의 그림과 같이 해석할 수 있다.

![environment](../hoisting/environment.png)

실행 컨텍스트마다 Lexical Environment가 존재하는데 전역 실행 컨텍스트에 선언되고 할당되는  
x와 y 그리고 add 함수는 Global Lexical Environment에 저장된다.

함수 실행 컨텍스트에 선언되어 있는 x와 y 그리고 change는  
Add 함수 Lexical Environment에 저장된다.  
그리고 이 둘은 scope chain으로 연결된다.

코드로 이해했으니 실제 실행 컨텍스트와 Lexical Environment가 어떻게 연결되어 있는지 보자.

<img src="../hoisting/lexical.png" alt="lexical" width="300"/>

먼저 실행 컨텍스트는 Lexical Environment와 variavle Environment 두 가지의 Component로 구성된다.  
생성 초기 두 컴포넌트는 같은 Lexical Environment를 참조한다.  
Lexical Environment은 식별자를 어디에서 참조할 것인지 등을 알려주는 곳이다.  
하지만 variable 환경을 위한 새로운 Lexical Environment 환경이 새로 생기면 다른 곳을 참조하게 된다.  
보통 var가 variable Environment Component에 저장된다.

해당 **스코프의 식별자들을 등록하고 바인딩 된 값을 관리**하는 Lexical Environment Component는  
EnvironmentRecord와 OuterLexicalEnvironmentReference로 구성되어 있다.

EnvironmentRecord는 해당 스코프에 포함된 식별자를 등록하고 바인딩 된 값을 관리하는 저장소이고  
OuterLexicalEnvironmentReference는 상위 스코프를 가리키며 상위 코드의 렉시 컬 환경을 가리키는 저장소라고 볼 수 있다.

**따라서 Lexical Environment는 참조를 통한 Linked List Scope Chain를 구성한다.**

---

#### 실행 컨텍스트가 Lexical Environment를 통해 식별자를 어떻게 검색하는지 알아보자

```javascript
var x = 1
const y = 2

function test() {
  //...
}
```

이런 코드가 있을 때 아래의 과정을 거친다.

![lexical](../hoisting/flow1.png)

위에서 열심히 읽어도 이해가 안 가는 게 정상이다..

차근차근 살펴보자

<img src="../hoisting/flow1-1.png" alt="lexical" width="300"/>

컨텍스트 스택으로 잠시 올라가서 보자  
맨 처음 실행 컨텍스트 스택에서 전역 실행 컨텍스트(Global Execution Context)가 푸시되는 것을 봤었다.
그 과정이다.  
그 전역 실행 컨텍스트가 전역 Lexical Environment를 생성한다.

Lexical Environment 가 어떻게 생겼는지를 다시 보고 와서 참고하기를 추천한다.

![lexical](../hoisting/flow1-2.png)

위의 Global Lexical Environment는 GlobalEnvironmentRecord와 OuterLexicalEnvironmentReference로 구성되어 있는데 전역이기 때문에 OuterLexicalEnvironmentReference에는 null이 있을 것이다.

GlobalEnvironmentRecord에는 어떤 것이 있냐면  
var 같이 전역 객체에 저장되는 것들이 존재하는 **Object Environment Record**와
let, const와 같이 호이스팅은 되지만 초기화는 안 되는 것들이 존재하는 **Declarative Environment Record**(선언적 환경 레코드)로 구성된다.

호이스팅에서 let과 const는 선언만 된다고 했다.

![lexical](../hoisting/flow1-3.png)

마지막으로 전역 객체에 저장된다고 했던 Object Environment Record에 들어가는 애들이 전역 객체에 저장이 된다.

이런 식으로 실행 컨텍스트가 식별자를 관리한다.

---

여기까지 실행 컨텍스트와 Lexical Environment 그리고 호이스팅에 대해 살펴보았다.

this 바인딩 그리고 더 자세히 포스팅하고 싶었지만 더 살펴보고 포스팅하고 싶어 그 부분은 미룬다.

많이 어렵기 때문에 계속 봐야 하는 개념이라고 생각한다.

틀린 부분 댓글 남겨주면 매우 매우 감사합니다🤗
https://blog.naver.com/neeko_k/223597163448
