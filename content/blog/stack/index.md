---
title: Algorithm Stack with JS
date: "2025-07-07T12:40:56.789Z"
description: javascript로 stack 이해하기
category: Algorithm
---

```javascript
class Stack {
  constructor(size) {
    this.stack = new Array(size)
    //아무것도 없어서 -1
    this.topIndex = -1
  }

  push(item) {
    // 개수가 늘어나면 top Index 증가
    this.topIndex++
    // 그 자리에 넣어줌
    this.stack[this.topIndex] = item
  }

  pop() {
    // 아무것도 없으면 -1
    if (this.topIndex === -1) {
      return -1
    }
    // 맨 위에 있는 애를 빼줌
    const poppedItem = this.stack[this.topIndex]
    // 개수가 줄어들면 top Index 감소
    this.topIndex--
    // 빼준 애를 반환
    return poppedItem

    //! 이렇게 제거하면 이존에 할당되어있던 값이 남아있어서 메모리 누수가 발생함
    //! this.stack[this.topIndex] = null; 필요함
  }
  size() {
    return this.topIndex + 1
  }
  empty() {
    return this.topIndex === -1
  }
  top() {
    if (this.topIndex === -1) {
      return -1
    }
    return this.stack[this.topIndex]
  }
}
```

```javascript
// VPS 여부를 판단하시오
const checkVPS = str => {
  const stack = new Stack(str.length)

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i])
    } else if (str[i] === ")") {
      if (stack.empty()) return false
      stack.pop()
    }
  }
  return stack.empty()
}

checkVPS("(happy)})")
```

```javascript
// VPS ([여부를 판단하시오
const checkVPS = str => {
  const stack = new Stack(str.length)

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i])
    } else if (str[i] === ")") {
      if (stack.empty()) return false
      stack.pop()
    }
  }
  return stack.empty()
}

checkVPS("(happy)})")
```
