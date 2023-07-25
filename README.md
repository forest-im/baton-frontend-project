# Baton Frontend Test🏠

<br />

## 동작 방법 및 설명

```js
  npm install
  npm run dev // 개발 모드 node-sass 실행
```

- 과제의 범위 1번. 필수 과제 구현을 선택하였습니다. (JavaScript를 이용해 1 ~ 2단계 구현하기)

<br />

## 배포 주소

[https://baton-frontend-project.vercel.app/](https://baton-frontend-project.vercel.app/)

## 시연 GIF

<img src="https://github.com/h-alex2/baton-frontend-project/assets/84281505/fe0afcf7-cdde-46a7-821e-cdf4d819758f" align="center" width=480>

<br />

## 이미지 구현

### scss 사용

프레임워크, 라이브러리 없이 효과적으로 해당 이미지를 구현하기 위해 CSS Preprocessor인 scss를 사용했습니다.

```scss
%molding {
  position: absolute;
  top: 0;
  left: 50%;
  width: 110%;
  height: 10%;
  transform: translateX(-50%);
  border: 1px solid $black;
  background-color: $gray800;
}

.house__back-molding {
  @extend %molding;
}
```

집의 몰딩과 같이 반복적인 요소는 scss의 variable 설정을 사용했습니다.

<br />

### before, after 가상 선택자를 이용한 그래픽 구현

이번 과제에 `before`와 `after` 가상 선택자를 사용했습니다. CSS만으로 가상 콘텐츠를 생성할 수 있어 HTML 구조를 변경하지 않고 요소에 콘텐츠를 추가할 수 있다는 장점을 활용했습니다.

### position absolute 활용

요소를 문서 흐름과 독립적으로 구성했습니다. 그래픽을 구현해야 하기 때문에 문서의 흐름도 중요하지만, 이미지 구현에 조금 더 초점을 맞췄습니다.

<br />

### 풍선 속성 구성

```js
export const balloonColors = ["red", "pink", "yellow", "green", "blue"];
export const balloonSizes = ["small", "medium", "large"];
export const balloonShapes = ["basic", "heart", "bear"];
```

- 풍선은 5가지의 색상, 3가지의 사이즈, 3가지의 형태로 구성됩니다.

<br />

## JavaScript 인터랙션 추가

### createBalloonElement 유틸 함수 제작

- 풍선 html element를 제작하는 유틸 함수를 제작했습니다. 해당 함수를 통해 랜덤 속성을 설정해 풍선 element를 만들 수 있습니다.

```js
for (let i = 0; i < 30; i++) {
  const { balloonContainer, balloon } = createBalloonElement();

  container.appendChild(balloonContainer);

  balloonContainer.addEventListener("click", function () {
    this.remove();
  });
}
```

- 웹 페이지 로드 시 30개의 풍선이 생성되도록 설정했습니다. 위와 같은 설정으로 페이지 로드 또는 새로 고침시에 30개의 풍선이 랜덤으로 설정됩니다.

<br />

```js
house.addEventListener("click", () => {
  const balloonContainer = createBalloonElement();
  container.appendChild(balloonContainer);

  balloonContainer.addEventListener("click", function () {
    this.remove();
  });
});
```

- 집을 클릭했을 때 풍선이 생성되는 이벤트 핸들러를 설정했습니다. 해당 이벤트 핸들러 내의 풍선 엘리먼트에 `click` 이벤트를 설정해 풍선을 클릭하면 해당 엘리먼트가 삭제되도록 구현했습니다.

<br />

## 배운 점

CSS를 이용해 그래픽을 표현하는 작업을 통해 CSS 역량을 향상시킬 수 있었습니다. CSS를 보다 더 깊이 이해하고, 효과적으로 활용하는 방법을 배우게 되었습니다.
이해가 부족했던 CSS 가상 선택자와 순수 JavaScript에 대해 더욱 더 깊게 공부할 수 있는 시간이었습니다.
