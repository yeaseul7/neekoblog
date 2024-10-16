---
title: DOM과 VDOM
date: "2024-09-02T12:40:56.789Z"
description: DOM과 VDOM에 대하여
category: Frontend
---

![Network이미지](../dom-vdom/domtree.png)

### DOM이란?

**Document Object Model**

HTML, XML 문서의 프로그래밍 interface다.  
DOM의 element는 object로 구성되어있다.

_interface란?_
_사용자가 상호작용 할 수 있게 하는 프로그래밍 인터페이스이다._

즉, DOM은 동적 콘텐츠를 제공하며 사용자로 하여금 상호작용할 수 있게 한다.

DOM이 있기 때문에 javascript와 같은 script언어로 문서의 구조, 스타일 등을 조작할 수 있다.

DOM중에서 최상위에 있는 Document object는 document(웹페이지) 그 자체이다.  
page content는 DOM에 저장되는데 이걸 script언어로 조작할 수 있다.

DOM API는 DOM을 script 언어로 조작할 수 있도록 제공되는 일련의 인터페이스이다.  
이것을 이용해서 동적으로 element를 조작할 수 있다.

---

### 그렇다면 React의 Virtual Dom은 무엇인가?

![Network이미지](../dom-vdom/Dom.webp)

Virtual Dom은 **DOM 복사본**이다.  
이는 실제 DOM이 아닌 JS 객체 형태로 메모리에 저장된다.

VDOM을 통해서 실제 DOM에는 접근할 수 없다. (VDOM을 수정해서 업데이트 한다.)  
VDOM을 수정하는 것은 메모리에 저장되어있는 JS 객체를 수정하는 것이기 때문에 비교적 가볍다.

VDOM없이 DOM을 조작할 때 스타일을 추가하거나 하면

```javascript
document.querySelector("#title").style.color = "red"
```

1. document에서 해당 element를 탐색해서 찾는다.
2. 해당 element와 그 자식 element들을 DOM에서 제거한다.
3. 수정된 Element로 교체한다.

이 과정에서 브라우저의 Reflow와 Repaint를 유발한다.  
단순히 조금만 수정한다면 문제는 없지만 사이트가 거대해질수록 위의 작업이 반복적으로 일어난다.

---

### React는 VDOM을 이용해서 어떻게 효율적으로 랜더링하나?

React에서는  
**랜더링 이전 구조를 나타내는 VDOM**  
**랜더링 이후에 보일 구조를 나타내는 VDOM**이 존재한다.

React에서는 State가 변경될 때마다 Re-Rendering이 발생하면서 **랜더링 이후에 보일 구조를 나타내는 VDOM**을 생성한다.  
그러면 React는 이 두개의 VDOM을 비교해서 어떤 Element가 바뀌었는지 비교한다. **(Diffing)**  
실제로 바뀐 부분만 실제 DOM에 적용한다. **(Reconciliation)**  
변경된 모든 내용을 집단화시켜서 한번에 실제 DOM에 적용하는 과정을 거친다. **(Batch Update)**

따라서 훨씬 효율적인 랜더링을 할 수 있다.

참고자료 : https://callmedevmomo.medium.com/virtual-dom-react-%ED%95%B5%EC%8B%AC%EC%A0%95%EB%A6%AC-bfbfcecc4fbb

사진 출처 : https://medium.com/@surksha8/virtual-dom-and-real-dom-understanding-the-differences-da8f3fab4261

https://www.freecodecamp.org/news/introduction-to-the-dom/
