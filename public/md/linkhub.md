# 📌 LinkHub

> **개인 또는 팀 스페이스를 생성하여 링크를 저장하고, 다른 사용자에게 링크 모음집을 공유할 수 있는 서비스**

- **진행 기간**: 2023.10 \~ 2023.12
- **팀 구성**: 프론트엔드 3명, 백엔드 3명
- **배포 주소**: [https://link-hub.site](https://link-hub.site)
- **깃허브 링크**: [https://github.com/Team-TenTen/LinkHub-FE](https://github.com/Team-TenTen/LinkHub-FE)

## 🛠️ 기술 스택

- **Frontend**: TypeScript, Next.js, Tailwind, React Query
- **Backend**: AWS (EC2, S3, CodeDeploy)
- **DevOps**: CI/CD 구축, HTTPS 적용, PWA

---

## ✨ 담당한 주요 기능

### 🚀 1. 메인 스페이스 리스트 페이지, 링크 좋아요 기능

![LinkHub 메인 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_main.gif)

- **SSR(Server-Side Rendering) 적용**: 검색 엔진 최적화를 위해 서버 사이드 렌더링을 적용하여 SEO를 개선했습니다.
- **인기 링크 추천 시스템 구현**: 사용자 데이터를 기반으로 좋아요 수가 많은 링크를 자동 선별하여 스와이프 방식으로 제공했습니다.
- **Infinite Scroll 구현**: 대량의 데이터를 효율적으로 로드하기 위해 `React Query`를 활용한 무한 스크롤을 도입했습니다.
- **Pagination 최적화**: 기존 오프셋 기반 페이지 네이션을 **커서 기반 페이지 네이션**으로 변경하여 API 응답 속도를 향상시켰습니다.

### 📝 2. 스페이스 상세 페이지 및 링크 CRUD

![LinkHub 링크 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_link.gif)

- **메타데이터 자동 불러오기**: 링크 추가 시, 해당 URL의 메타데이터를 자동으로 가져와 제목을 지정하는 기능을 구현했습니다.
- **태그 기반 필터링**: 사용자가 태그를 활용해 링크를 그룹화하고 쉽게 찾을 수 있도록 했습니다.
- **조회 이력 저장**: 링크를 조회한 사용자 정보를 기록하여 프로필 아이콘을 표시하는 기능을 개발했습니다.

### 👥 3. 프로필 페이지 및 유저 팔로우

![LinkHub 프로필 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_profile.gif)

- **프로필 페이지**: 유저의 닉네임, 이메일, 팔로잉 및 팔로워 목록, 관심 카테고리, 한 줄 소개를 조회할 수 있습니다.
- **팔로우 시스템 구현**: 유저 간 팔로우 및 언팔로우 기능을 지원하며, 팔로잉 및 팔로워 목록을 조회할 수 있도록 구현했습니다. 또한, 특정 유저를 클릭하면 해당 유저의 프로필 페이지로 이동할 수 있도록 구현하였습니다.

### ⭐ 4. 스페이스 즐겨찾기 기능

![LinkHub 스페이스 즐겨찾기 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_bookmark.gif)

- **Debounce 적용**: 빠른 클릭으로 인해 API가 과부하되는 문제를 방지하기 위해 `Debounce` 기법을 활용했습니다.
- **낙관적 업데이트 적용**: 즉각적인 UI 반영을 위해 낙관적 업데이트를 적용하여 사용자 경험을 개선했습니다.

### 🔧 5. CI/CD 구축 및 배포 자동화

- **AWS 기반 배포 환경 구축**: Next.js의 서버 측 기능을 활용할 수 있도록 **EC2 + S3 조합**으로 프로젝트를 배포했습니다.
- **자동 배포 파이프라인 구성**: `CodeDeploy`를 활용해 CI/CD 파이프라인을 구축하여 개발 효율성을 높였습니다.
- **보안 강화**: SSL 인증서를 적용하여 **HTTPS 프로토콜**을 활성화하고, 보안 취약점을 보완했습니다.

### 📷 6. 이미지 최적화로 애플리케이션 성능 향상

![LinkHub 이미지 최적화 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_image_compression.png)

- **이미지 압축 적용**: 서버로 전송되는 이미지 용량을 줄이기 위해 이미지 압축 라이브러리를 도입하여 렌더링 성능을 개선했습니다.

### 📱 7. PWA(Progressive Web App) 적용

- **앱과 유사한 경험 제공**: 별도 설치 없이도 **모바일 앱과 유사한 사용자 경험**을 제공하도록 PWA를 적용했습니다.
- **접근성 향상**: 웹사이트를 홈 화면에 추가할 수 있도록 지원하여 사용자 접근성을 높였습니다.

### 🎨 8. 디자인 시스템 구축

![LinkHub 디자인 시스템 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_figma.png)

- **피그마를 활용한 디자인 시스템 구축**: 일관된 UI/UX를 유지하기 위해 **디자인 시스템을 정의**하고 이를 공통 컴포넌트로 구현했습니다.
- **협업 효율성 증대**: 와이어 프레임을 기반으로 팀원 간 원활한 협업이 가능하도록 했습니다.

---

## ⚡️ 트러블 슈팅

### 🌓 다크 모드 구현 중 Hydration 오류 발생

**🛑 문제 상황**

- `useTheme`의 초기 상태가 서버에서는 `undefined`이지만, 클라이언트에서 `ThemeProvider`가 렌더링 되면서 값이 존재하게 되어 **서버와 클라이언트의 상태 불일치로 인해 Hydration 오류**가 발생했습니다.

![LinkHub 이슈](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/linkhub_issue.png)

**💡 해결 방법**

- `useEffect`를 활용해 컴포넌트가 **마운트 된 후에만 Provider를 렌더링**하도록 수정하여 **서버와 클라이언트의 렌더링 구조를 일치**시켰습니다.

```tsx
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
```

**🔍 문제 해결을 통해 발전한 역량**

- 이 경험을 통해 **서버 사이드 렌더링(SSR)과 클라이언트 사이드 렌더링(CSR)의 차이점**을 명확히 이해할 수 있었으며, **Hydration 오류를 해결하는 방법**을 익혔습니다.

---

## 🎯 프로젝트를 통해 얻은 것

- **Next.js의 SSR 및 CSR 활용 경험**: 서버 사이드 렌더링을 활용한 SEO 최적화 및 클라이언트 렌더링 방식의 차이를 학습하였습니다.

- **React Query를 활용한 상태 관리 최적화**: 데이터 패칭과 캐싱 전략을 경험하며 성능 최적화 방법을 학습하였습니다.

- **CI/CD 파이프라인 구축 경험**: AWS EC2, S3, CodeDeploy를 활용하여 자동 배포 환경을 구축하고 실무적인 DevOps 경험을 쌓았습니다.

- **디자인 시스템 및 협업 경험**: 피그마를 활용한 디자인 시스템 구축을 통해 UI 일관성을 유지하고, 팀원과 원활한 협업을 수행하는 경험을 하였습니다.
