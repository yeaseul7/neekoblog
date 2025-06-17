---
title: Prototype
date: "2025-06-16T15:21:00.000Z"
description: Prototype, Prototype Chain...
category: Frontend
---

### 개요

Javascript는 prototype 기반 OOP 언어라고 한다.
Javascript를 계속 보니까 이제 실제로 어떤걸 가지고 prototype과 chain을 이야기 하는 것인지 조금은 이해했지만
더 자세히 살펴볼 필요가 있을 것 같아 해당 글을 작성한다.

### Prototype 기반 OOP

> prototype은 Object들이 서로 속성을 공유하기 위해 사용하는 연결고리다.

보통은 class로 상속모델을 사용하는데 javascript는 프로토타입 상속모델을 사용한다.<br/>
객체가 상위 프로토타입 메소드와 속성을 상속받을 수 있는데 상위의 상위 프로토타입도 상속을 받을 수 있게 하는 것을 <b>Prototype Chain</b>이라고도 한다.<br/>
즉, 상속되는 속성과 메소드는 생성자의 prototype안에 정의되어있다.

```javascript
let a = {}
console.log(a.__proto__)
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
constructor:ƒ Object()
hasOwnProperty:ƒ hasOwnProperty()
isPrototypeOf:ƒ isPrototypeOf()
propertyIsEnumerable:ƒ propertyIsEnumerable()
toLocaleString:ƒ toLocaleString()
toString:ƒ toString()
valueOf:ƒ valueOf()
__defineGetter__:ƒ __defineGetter__()
...
```

### Prototype이란?

prototype 객체는 생성자 함수로 생성된 객체들이 공통으로 사용할 수 있는 프로퍼티를 제공하는 역할을 합니다.
일반 함수가 생성될 때 prototype 프로퍼티가 자동으로 함께 만들어집니다.

#### 🔍 [[Prototype]] 내부 슬롯 vs prototype 프로퍼티

JavaScript에서는 두 가지 다른 개념을 구분해야 합니다

**`[[Prototype]]` 내부 슬롯**

- 모든 객체가 가지고 있는 내부 슬롯
- 상속을 구현하는데 사용되는 참조값
- `__proto__` 접근자나 `Object.getPrototypeOf()`로 접근 가능
- 객체의 `[[Prototype]]`은 상속 체인에서 상위에 있는 프로토타입 객체를 가리킵니다
- 함수의 경우에는 `Function.prototype` 객체를 가리킵니다
- 인스턴스의 경우에는 생성자 함수의 `prototype` 프로퍼티가 가리키는 객체를 가리킵니다

**`prototype` 프로퍼티**

- 함수 객체만 가지고 있는 일반 프로퍼티
- 생성자 함수로 인스턴스를 만들 때 인스턴스의 `[[Prototype]]`이 가리킬 객체

```javascript
function Dog(name) {
  this.name = "early" // 생성자 함수의 프로퍼티 설정
}

const puppy = new Dog("access") // Dog 생성자로 인스턴스 생성

// prototype 프로퍼티 (함수만 소유)
console.log(Dog.prototype) // 👉 Dog는 함수이므로 prototype 프로퍼티 존재 ✅
console.log(puppy.prototype) // 👉 puppy는 인스턴스이므로 prototype 프로퍼티 없음 ❌ (undefined)

// [[Prototype]] 내부 슬롯 (모든 객체가 소유)
console.log(Dog.__proto__) // 👉 Function.prototype
console.log(puppy.__proto__) // 👉 Dog.prototype (생성자의 prototype 프로퍼티와 연결)
```

Prototype값에 접근하기 위해서 `Object.prototype.__proto__`를 사용하면 된다.
이렇게 하면 내부에서 Object.getPrototypeOf()가 호출된다.

```javascript
let a = {} // 빈 객체 생성
a.__proto__ // 객체의 프로토타입에 접근 (Object.prototype과 동일)
```

### constructor 프로퍼티

프로토타입 객체(.prototype)는 constructor 프로퍼티를 갖는다.
이 constructor프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.

```javascript

```
