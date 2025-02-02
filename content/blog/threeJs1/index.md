---
title: Three.js 블로그에 붙이기 1탄
date: "2025-02-02T12:40:56.789Z"
description: Three.js 블로그에 붙이기 1탄
category: Project
---

### 시작하기 전에

Three.js는 브라우저 환경에서만 동작하는 라이브러리이다.
근데 SSR로 구성된 gatsby에 붙이고자 함은 window객체나 document 객체를 사용하는 것이므로 문제가 될 수 있다.

**왜 문제가 될까?**

SSR은 서버에서 HTML을 생성한 후에 브라우저에 전달하기 때문에 document 객체나 window 객체가 없다.
Gatsby의 경우 build시에 이 과정을 수행하기 떄문에 빌드 자체가 깨질 수 있다.
이로 인해 렌더링의 차이가 있을 수 있어서 Hydration 오류를 야기할 가능성도 있다.

**해결 방법**

1. 브라우저 객체를 직접 참조하지 않는다.
2. useEffect 훅을 사용하여 브라우저 객체를 참조한다.
3. 브라우저 객체가 존재하는지 항상 확인한다.
4. dynamic import를 사용하여 브라우저 객체를 참조한다.

---

### 1. Three.js 설치

```bash
# three.js
npm install --save three
```

[설치 가이드](https://threejs.org/docs/#manual/en/introduction/Installation)

나는 이미 gatsby에서 빌드하고 있기 때문에 Vite는 별도로 설치하지 않았다.

### 2. sence 만들기

```javascript
import * as THREE from "three"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
```

three.js로 표시하기 위해서는 **장면(scene)**, **카메라(camera)**, **렌더러(renderer)** 가 필요하다.

카메라는 세가지 종류가 있지만 시작 단계에서는 'PerspectiveCamera'를 사용한다.

PerspectiveCamera안에 있는 속성의 의미를 살펴보자.

- fov: 시야각 (화면의 범위 / field of view)
- aspect: 종횡비 (화면의 너비 / 높이 => 이렇게 설정하지 않으면 깨질 수 있음)
- near: 가까운 거리 (카메라가 렌더링을 시작하는 최소 거리)
- far: 먼 거리 (카메라가 렌더링하는 최대 거리)

near와 far 사이의 공간만 렌더링되며, 이 범위를 벗어난 객체들은 화면에 표시되지 않는다.
지금 단계에서는 크게 신경 쓸 필요는 없지만, 나중에 애플리케이션의 성능 최적화를 위해 이 값들을 조정할 수 있다.

다음은 렌더러를 살펴보자.

```javascript
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
```

const renderer라고 렌더러 인스턴스를 만들었는데 이외에 앱을 렌더링할 크기를 설정해야한다.

근데 여기서 위에서 말했던 내 환경 gatsby에 대해 다시 생각해보자.
window 객체에 직접 접근하면 안된다는 말을 떠올리면 해당 코드를 useEffect 훅 안에 넣어야 한다.

```javascript
const ThreeScene = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // 컴포넌트가 언마운트될 때 정리
    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} />
}
```

따라서 나는 위와 같이 작성했다.
setSize에서 설정한 앱의 크기를 유지하면서 해상도를 조절하기 위해서는 setSize에 false as updateStyle(세 번째 인수)를 넣어야 한다.

```javascript
renderer.setSize(window.innerWidth, window.innerHeight, false)
```

위와 같이 하면 렌더링 해상도만 지정된 크기로 유지되고 안에 있는 요소들은 css를 통해 별도로 지정해줘야 한다.

### 3. cube 만들기

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5
```

큐브를
