# 📌 Angola

> **SNS 기능 API를 활용한 밸런스 게임 커뮤니티 서비스**

- **프로젝트명**: Angola
- **진행 기간**: 2023.09 \~ 2023.10
- **팀 구성**: 프론트엔드 5명
- **깃허브 링크**: [https://github.com/prgrms-fe-devcourse/FEDC4_Angola_NaYoung](https://github.com/prgrms-fe-devcourse/FEDC4_Angola_NaYoung)
- **기획서**: [https://www.notion.so/prgrms/3d14556128154f5e860b67387eb8157b](https://www.notion.so/prgrms/3d14556128154f5e860b67387eb8157b)
- **프로젝트 회고**: [https://velog.io/@dudwns/데브코스-팀-프로젝트-회고-Angola](https://velog.io/@dudwns/%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-Angola)

---

## 🛠️ 기술 스택

- **Frontend**: TypeScript, React, Emotion & Styled Components, React Query, Recoil
- **Deployment**: Vercel

---

## ✨ 담당한 주요 기능

### 🚀 1. 홈(메인) 페이지 및 무한 스크롤 구현

![angola 메인 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/angola_main.gif)

- **Infinite Scroll 적용**: `Intersection Observer`를 활용하여, 사용자가 자연스럽게 포스트를 탐색할 수 있도록 무한 스크롤을 구현했습니다.
- **React Query 적용**: 서버 데이터 요청을 최적화하고, 불필요한 API 호출을 방지하기 위해 `React Query`를 활용했습니다.

### 🔍 2. 포스트, 유저 검색 기능 및 정렬 구현

![angola 검색 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/angola_search.gif)

- **검색 기능 개선**: URL 쿼리 스트링을 활용하여 검색어를 유지하고, 페이지 새로고침 후에도 검색 결과가 유지되도록 구현했습니다.
- **정렬 로직 최적화**: `Date` 객체를 활용해 포스트의 최신 순 정렬을 구현하고, 좋아요 및 팔로워 순으로 정렬할 수 있도록 기능을 추가했습니다.

### 🔗 3. 공통 컴포넌트 구현

- **재사용성을 고려한 컴포넌트 개발**: 검색 바, 버튼, 카드 UI 등 여러 페이지에서 공통적으로 사용되는 컴포넌트를 분리하여 유지 보수를 용이하게 했습니다.
- **Emotion을 활용한 스타일 관리**: 컴포넌트 스타일을 관리하기 위해 `Emotion`을 사용하고, `css` props를 적극 활용하여 동적 스타일을 적용했습니다.

### ❌ 4. 404 페이지 구현

![angola 404 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/angola_404.png)

- **사용자 경험 개선**: 존재하지 않는 페이지 접근 시, 직관적인 404 페이지를 제공하여 사용자가 자연스럽게 다른 페이지로 이동할 수 있도록 유도했습니다.

### 🔄 5. 검색, 좋아요, 팔로우 관련 API 훅 구현

```ts
const useAxiosInstance = () => {
  const auth = useRecoilValue(authInfoState);
  const baseInstance = axios.create({
    baseURL: process.env.BASE_URL,
  });

  const authInstance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  });

  return { baseInstance, authInstance };
};

export default useAxiosInstance;
```

```ts
export const useFetchSearchUsers = ({ query }: SearchRequestQuery) => {
  const { baseInstance } = useAxiosInstance();
  const { data, isSuccess, isError, isLoading, refetch } = useQuery<
    AxiosResponse<User[]>,
    AxiosError,
    User[]
  >("searchUsers", () => baseInstance.get(`/search/users/${query}`), {
    select: ({ data }) => {
      return data.filter((user) => user.role !== "SuperAdmin");
    },
  });
  return {
    searchUsersData: data,
    isSearchUsersSuccess: isSuccess,
    isSearchUsersError: isError,
    isSearchUsersLoading: isLoading,
    searchUsersDataRefetch: refetch,
  };
};
```

- **Axios Instance 적용**: `Axios` 인스턴스를 생성하여 API 요청을 관리하고, 토큰 유무에 따라 요청을 자동으로 분기 처리하도록 최적화했습니다.
- **전역 상태 관리 최적화**: 컴포넌트 간 상태 전달을 단순화하고 불필요한 props 전달을 방지하기 위해 `Recoil`을 도입하였으며, 이를 통해 전역 상태를 효율적으로 관리하고 코드 가독성을 향상시켰습니다.
- **데이터 캐싱 및 최적화**: `React Query`를 활용하여 검색, 좋아요, 팔로우 등의 데이터를 캐싱하고, UI 반응성을 높였습니다.

### 📱 6. 반응형 스타일 구현

![angola 반응형 스타일 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/angola_responsive.png)

- **미디어 쿼리를 활용한 반응형 디자인**: 모바일과 데스크톱 환경에서 최적의 사용자 경험을 제공할 수 있도록 미디어 쿼리를 적용하여 반응형 스타일을 구현했습니다.

---

## ⚡️ 트러블 슈팅

### 🔍 한글 검색 시 URL 인코딩 문제 발생

**🛑 문제 상황**

- `NavBar`의 `SearchBar`에서 검색어를 입력하면 URL에 쿼리 스트링으로 `keyword`가 등록됩니다.
- 이후 `Main` 컴포넌트에서 URL의 쿼리 스트링을 감지하여 `SearchPage`에 내려주는 방식으로 동작합니다.
- 하지만, 한글 검색 시 URL 인코딩으로 인해 검색어가 인코딩된 값으로 전달되는 문제가 발생했습니다.

  ![angola 이슈 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/angola_issue.png)

**💡 해결 방법**

- URL에서 `keyword`를 정상적으로 디코딩 하기 위해 `decodeURIComponent` 함수를 사용했습니다.
- 또한, 공백(`+`)이 `"%20"`으로 변환되지 않는 문제를 해결하기 위해 `replace` 함수를 활용하여 `"%20"`으로 치환했습니다.
- 빈 값 검색 시 디코딩 에러가 발생하여 `keyword`가 존재할 때만 `decodeUri` 함수를 실행하도록 하여 추가적인 에러를 방지했습니다.

```typescript
interface DecodeUriProps {
  keyword: string;
}

export const decodeUri = ({ keyword }: DecodeUriProps) => {
  return decodeURIComponent(keyword!.replace(/\+/g, "%20"));
};
```

```typescript
const SearchPage = ({ target = "post", keyword, sort }: SearchProps) => {
  return (
    <Container>
      {target === PARAM_VALUES.TARGET.USER ? (
        <UserList
          keyword={keyword && decodeUri({ keyword })}
          sort={sort || SEARCH_VALUES.SORT.FOLLOWER}
        />
      ) : (
        <PostList
          keyword={keyword && decodeUri({ keyword })}
          sort={sort || SEARCH_VALUES.SORT.RECENT}
        />
      )}
    </Container>
  );
};
```

![angola 이슈 해결 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/angola_issue_result.png)

**🔍 문제 해결을 통해 발전한 역량**

- 이 경험을 통해 **URL은 ASCII 문자만 허용**하므로, 브라우저가 자동으로 인코딩한 한글이나 특수문자를 사용하기 위해서는 **반드시 디코딩이 필요하다는 점**을 알게 되었습니다.

---

## 🎯 프로젝트를 통해 얻은 것

- **React Query를 활용한 데이터 최적화**: 데이터 캐싱과 API 호출 최적화를 경험하며 성능 개선 방법을 학습했습니다.

- **무한 스크롤과 Intersection Observer 활용**: Intersection Observer를 활용하여 대량의 데이터를 효과적으로 관리하는 기법을 익혔습니다.

- **Axios 인스턴스를 활용한 API 관리**: 일관된 API 요청 구조를 유지하며, 중복 코드 제거와 가독성을 향상시키는 경험을 하였습니다.

- **검색 기능 및 한글 인코딩 문제 해결**: 실제 서비스에서 발생할 수 있는 검색 관련 문제를 해결하는 경험을 하였습니다.

- **반응형 디자인 적용 경험**: 다양한 디바이스에서의 UI/UX 개선을 위한 반응형 스타일을 적용했습니다.
