---
title: this
date: "2024-10-02T12:40:56.789Z"
description: javascript의 this 개념에 대해
category: Frontend
---

실행 컨텍스트를 공부하다가 this에 대한 얘기를 들었다.  
this는 javascript에서 논란이 많은? 친구이다.

먼저 this가 무엇이냐?

함수가 호출될 때 정해지는 함수 컨텍스트이다.  
귀에 걸면 귀걸이 코에 걸면 코걸이 같은 것이다.😂

javascript는 호출될 때
인자, arguments 객체, this를 전달받는다.  
이렇게 전달받을 때마다 어떤 걸 바인딩 하는지 결정한다.

함수 컨텍스트, 실행 컨텍스트에 대해서는 [저번 포스팅](https://blog.naver.com/neeko_k)에서 다뤘다.  
기본적으로 this는 전역 객체에 바인딩 된다.  
이는 혼동을 야기할 수 있다.

이게 무슨 말이야~
싶겠지만 함수가 어떻게 호출되고 그에 따가 어떤 식으로 달라지는지 살펴보자.

---

### 함수 호출 방식

함수 호출 방식은

1. 일반 함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. call, apply, bind 사용
   이렇게 4가지가 있다.

그러면 각각 자세히 어떻게 하는건지 알아보자

#### 일반 함수 호출

```javascript
//일반 함수
function add() {
  //외부함수
  console.log("add's this: ", this) // window , "use strict"에서는 undefined나옴
  function add2() {
    //내부함수
    console.log("add2's this: ", this) // window , "use strict"에서는 undefined나옴
  }
  add2()
}
add()

//화살표 함수
function add() {
  // 외부 함수
  console.log("add's this: ", this) // window (전역 모드) 또는 undefined ("use strict" 모드)

  const add2 = () => {
    // 내부 화살표 함수
    console.log("add2's this: ", this) // add()의 this를 참조
  }
  add2()
}
add()
```

일반 함수 호출에서 this는 다른 함수 안에 있는 내부 함수에서 전역 객체에 바인딩된다.
이런 this의 전역 바인딩을 막기 위해서는 arrow function을 사용하는 방법이 있다.

arrow function은 es6에 나왔다.

arrow function의 this는 뭐가 다르다는 걸까?  
es6에서 this는 **정의된 스코프(Lexical scope)**를 참조한다.  
따라서 상위 환경의 this를 계승 받는다.

즉 arrow function은 자신이 정의된 위치에서 this를 사용한다.

#### 메서드 호출

아래의 예시에서 add는 메서드 호출이고 add2는 함수 내부에서 정의된 일반함수이다.  
따라서 독립적인 함수 호출이다.  
하지만 위에서 설명했던 것처럼 화살표 함수를 사용하면 Lexical scope에 의해 상위 스코프를 참조하여 obj를 가리키게 할 수 있다.  
또 다른 변수에 this를 할당해서 사용하는 방법도 있다.

⚠️메서드를 화살표 함수로 정의하면 그 함수의 상위 스코프를 받기 때문에 전역 객체를 의미할 수 있다.  
일반 함수로 작성하고 내부 함수를 화살표 함수로 작성하면 생각하는 대로 계승될 것이다.

```javascript
let methodValue = 1;

const obj = {
  value: 100,
  add: function () {
    //메서드
    console.log("add's this: ", this); // obj
    console.log("add's this.value: ", this.value); // 100

    function add2() {
      //내부함수
      console.log("add2's this: ", this); // window
      console.log("add2's this.value: ", this.value); // 1
    }
    add2();
  },
};
obj.add();

//화살표 함수 쓰는 버전
let methodValue = 1;

const obj = {
  value: 100,
  add: function () {
    //메서드
    console.log("add's this: ", this); // obj
    console.log("add's this.value: ", this.value); // 100

    const add2 = () => {
      //화살표 함수
      console.log("add2's this: ", this); // obj
      console.log("add2's this.value: ", this.value); // 100
    };
    add2();
  },
};

obj.add();

//다른 변수에 this를 할당해서 사용하는 방법

let methodValue = 1;

const obj = {
  value: 100,
  add: function () {
    const that = this;
    //메서드
    console.log("add's this: ", this); // obj
    console.log("add's this.value: ", this.value); // 100

    function add2() {
      //내부함수
      console.log("add2's that: ", that); // obj
      console.log("add2's that.value: ", that.value); // 100    }
    add2();
  },
};
obj.add();
```

#### 생성자 함수 호출

javascript에서는 new를 사용해서 생성자 함수를 만들고 호출할 수 있다.  
생성자 함수에서 this는 프로퍼티를 상속한다.

아래에서 생성자 함수를 만드는 방법과 동작 방법을 보여준다.

```javascript
// 생성자 함수는 대문자로 시작한다.
function Person(name) {
  this.name = name
}
//prototype 객체로 메소드를 가질 수 있다.
Person.prototype.getName = function () {
  return this.name
}

let me = new Person("Lee")
// this에 바인딩 될 객체는 me이다.
console.log(me.getName()) //Lee

//new를 붙이지 않을 경우 생성자 함수 아님
let you = Person("Park")
console.log(you) // undefined

Person.prototype.name = "Kim"
console.log(Person.prototype.getName()) //Kim
//이렇게 this의 속성을 변경할 수 있다.
```

위의 과정을 그림으로 그리면 아래와 같이 나타난다.
![thisPrototype](../this/this.png)

#### 생성자 함수 동작 방법 찍먹하기

```javascript
// 생성자 함수는 대문자로 시작한다.
function Car(name) {
  // 생성자 함수 코드 실행 전
  // 생성할 빈 객체 생성 => "복사본 만든대~ 빈 종이 가져와"
  // this가 빈 객체를 가리킴 => "내용 여기에 넣으면 돼?"
  // 빈 객체 : Car의 프로퍼티가 가르키는 객체를 자신의 prototype 객체로 설정 => "빈종이 : 나 이번 복사에 들어간다"
  this.type = name // this를 통해 프로퍼티 및 메소드 추가 => "복사중 ..."
  // this를 통해 생성자 함수가 생성할 인스턴스에 동적으로 프로퍼티를 생성하고 초기화
  // 생성된 함수 반환
}

let myCar = new Car("sm5")
// this가 가리키는 인스턴스를 반환
console.log(myCar) // {type: "sm5"}
```

1. 생성자 함수 코드 실행 전 생성자 함수가 새로 생성할 객체인 빈 객체를 생성
2. 그리고 생성자 함수 안에 있는 this가 이 빈 객체를 가리킴
3. 빈 객체도 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 prototype 객체로 설정
4. 이후 생성된 빈 객체에 this를 통해 프로퍼티와 메서드 등을 추가한다.
5. 마지막으로 생성된 객체를 반환한다.

_이때 어떤 걸 반환하느냐에 따라 this 바인딩이 끊길 수도 있고 반환값이 무시될 수 있다._

마지막에 생성된 객체를 반환하지 않으면
예상과 다른 값이 출력될 수 있다.

그 경우를 아래에 예시를 통해 설명한다.

#### 생성자 함수가 다른 값을 반환하는 경우

```javascript
// 다른 객체를 반환하는 경우
function ExceptionConstructor(name) {
  // 생성자 함수 코드 실행 전
  this.type = name
  // this를 통해 생성자 함수가 생성할 인스턴스에 동적으로 프로퍼티를 생성하고 초기화
  // 다른 개체를 반환하면 this가 아닌 해당 객체가 반환
  return { year: 2022 }
}

let myCar2 = new ExceptionConstructor("sm5")
console.log(myCar2) // {year: 2022} 생성자 함수 역할을 못해서 this가 아닌 다른 객체 반환 prototype도 없음
```

```javascript
//기본값을 반환하는 경우
function ExceptionConstructor2(name) {
  // 생성자 함수 코드 실행 전
  this.type = name
  // this를 통해 생성자 함수가 생성할 인스턴스에 동적으로 프로퍼티를 생성하고 초기화
  // 기본타입을 반환하면 this가 반환
  return 42
}
let myCar3 = new ExceptionConstructor("sm5")
console.log(myCar2) // {type: "sm5"} 반환 값이 무시되고 this가 반환
```

#### call, apply, bind 사용

이 방법은 명시적으로 this 바인딩 하는 방법이다.
위에서는 this를 명시적으로 바인딩 하지 않았기 때문에 이런 작동 방식을 이해하기 전까지는 왜 저 값이 나오는지 모를 수 있다.
이 함수들은 Function.prototype 객체의 메서드이다.

**Function.prototype.apply, Function.prototype.call는 함수를 실행하지만  
Function.prototype.bind는 함수에 인자로 전달한 this가 바인딩 된 새로운 함수를 리턴하지 실행하지 않는다는 차이가 있다.**

```javascript
const useThisMethodsValue = 1

const useThisMethodsObj = {
  value: 100,
  add: function () {
    const that = this

    console.log("add's this: ", that) // avoidGloabalObj
    console.log("add's this.value: ", that.value) // 100

    function add2(a, b) {
      console.log("add2's this: ", this) // avoidGloabalObj
      console.log("add2's this.value: ", this.value) // 100
      console.log("add2's arguments: ", a, b) // 1, 2
    }
    add2.apply(useThisMethodsObj, [1, 2])
    add2.call(useThisMethodsObj, 1, 2)
    add2.bind(useThisMethodsObj)(1, 2)
  },
}
useThisMethodsObj.add()
```

---

### 마무리

이렇게 함수를 호출하는 방식을 쭉 나열했다.

그리고 그 안에서 this가 어떻게 바인딩 되는지 코드 예시를 통해 설명했다.

한 번에 이해하기 복잡할 수 있다.

이럴 땐 전역 객체를 한다고 하고 아닐 땐 또 다르다고 하고

​

내가 생각하기에 기본적으로 this는 전역 객체를 바인딩 하기 때문에 화살표 함수를 사용해서 상위 스코프를 참조하는 방식으로 예측 가능한 코드를 짜는 것이 좋아 보인다.

다만 그 과정에서 주의해야 하는 부분도 있기 때문에 그 부분에 대해서도 다시 되짚어보기를 바란다.

​
