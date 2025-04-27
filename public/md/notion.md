# 📌 Notion Clone

> **데브 코스 교육 과정에서 제공된 API를 활용하여 만든 노션 클론 에디터 서비스**  
> **Vanilla JS를 학습하고 SPA를 구축해 보기 위해 제작한 프로젝트입니다.**

- **진행 기간**: 2023.07 \~ 2023.08
- **깃허브 링크**: [https://github.com/dudwns/FEDC4-5_Project_Notion_VanillaJS](https://github.com/dudwns/FEDC4-5_Project_Notion_VanillaJS)

---

## 🛠️ 기술 스택

- **Language**: JavaScript

---

## ✨ 주요 기능

### 📝 1. 텍스트 편집

![notion 파일 구조 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/notion_file.png)

- 사용자는 제목과 내용을 작성할 수 있습니다.
- Window 사용자는 `control + s`, Mac 사용자는 `command + s`로 저장할 수 있습니다.
- 문서 제목을 내용으로 입력 시 자동으로 해당 문서를 이동하는 링크가 연결됩니다.
- 마크다운 언어를 작성하고 저장할 시 마크다운 문법으로 변환됩니다.

### 📂 2. 문서 조회 및 생성

- 사용자는 전체 문서를 트리 형태로 조회할 수 있습니다.
- 사용자는 문서를 생성할 수 있습니다.
- 사용자는 하위 목록의 문서를 생성할 수 있습니다.
- 하위 목록의 문서는 에디터 아래에 표시되고 클릭 시 하위 문서로 이동할 수 있습니다.

---

## 🚀 개발 내용

### 🌐 1. history api를 활용한 라우팅 및 SPA 구현

```javascript
const ROUTE_CHANGE_EVENT_NAME = "route-change";

// 라우트 변경을 감지하는 이벤트 리스너 등록
export const initRouter = (onRoute) => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e) => {
    const { nextUrl } = e.detail; // URL 정보 추출
    if (nextUrl) {
      history.pushState(null, null, nextUrl); // History API로 브라우저의 URL 변경
      onRoute(); // 전달받은 콜백 함수 실행
    }
  });
};

// 커스텀 이벤트를 발생시킴
export const push = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    })
  );
};
```

```javascript
const mainPage = new MainPage({
  $target,
  initialState: this.state,
});

this.route = () => {
  $target.innerHTML = ""; // 기존 컨텐츠 초기화
  const { pathname } = window.location; // 현재 URL 경로 가져오기

  if (pathname === "/") {
    mainPage.init(null); // 메인 페이지 라우팅
  } else if (pathname.indexOf("/documents/") === 0) {
    const [, , postId] = pathname.split("/"); // URL에서 문서 ID 추출
    mainPage.init(postId); // 특정 문서 페이지 라우팅
  }
};
this.route(); // 초기 라우트 실행

initRouter(() => this.route()); // 라우트 변경 시 처리
window.addEventListener("popstate", () => this.route()); // 브라우저 뒤로 가기, 앞으로 가기
```

- `history api`를 활용하여 URL이 변경되어도 서버로 페이지를 재요청하지 않고, 변경된 부분만 업데이트 되도록 SPA를 구현하였습니다.

### ✍️ 2. 마크다운 변환기 구현

![notion 마크다운 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/notion_markdown.png)

- 사용자가 마크다운 문법을 입력하고 저장하면 자동으로 변환되는 마크다운 에디터를 구현하였습니다.

---

## 🎯 프로젝트를 통해 얻은 것

- **Vanilla JS 심화 학습**: JavaScript의 핵심 개념을 깊이 있게 학습하고, 순수 JavaScript로 다양한 기능을 직접 구현하는 경험을 하였습니다.

- **SPA 동작 원리 실습**: 서버로 페이지를 재요청하지 않고 URL만 변경하는 방식으로, 사용자 경험을 향상시키는 SPA 기술을 실습했습니다.

- **마크다운 변환기 구현**: 마크다운 문법 변환 기능이 있는 에디터를 제공하는 기술을 학습했습니다.

- **API 활용 및 데이터 처리**: API와의 연동을 통해 데이터를 동적으로 처리하는 방법을 익혔습니다.
