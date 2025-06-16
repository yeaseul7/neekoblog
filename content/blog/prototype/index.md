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

```javasscript
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
