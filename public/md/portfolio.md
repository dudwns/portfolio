# 📌 Portfolio

> **저의 기술과 프로젝트 경험을 정리한 포트폴리오 사이트입니다.**

- **진행 기간**: 2025.03 \~ 2025.04
- **배포 주소**: [https://kimyeongjun.com/](https://kimyeongjun.com/)
- **깃허브 링크**: [https://github.com/dudwns/portfolio](https://github.com/dudwns/portfolio)

---

## 🛠️ 기술 스택

- **Frontend**: TypeScript, Next.js, Tailwind
- **Deployment**: Vercel

---

## ✨ 주요 기능

### 📝 1. 소개 페이지

![Portfolio 소개 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/portfolio_about.png)

- 저에 대한 정보를 간결하고 명확하게 확인할 수 있는 페이지입니다.
- 정보, 가치관, 분야 등을 소개하며 한눈에 파악할 수 있도록 구성하였습니다.

### 🔧 2. 기술 스택 페이지

![Portfolio 기술 스택 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/portfolio_skills.png)

- 제가 사용할 수 있는 기술들을 아이콘과 함께 시각적으로 표현하여 가독성을 높였습니다.

### 📂 3. 프로젝트 페이지

![Portfolio 프로젝트 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/portfolio_project.png)

- 지금까지 진행했던 프로젝트들을 카드 형식으로 나열해 한눈에 파악할 수 있도록 구현했습니다.
- 각 프로젝트는 섬네일과 프로젝트명, 주요 기술 스택이 포함되어 있으며 클릭 시 상세 페이지로 이동합니다.

### 🔍 4. 프로젝트 상세 페이지

![Portfolio 프로젝트 상세 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/portfolio_project_details.png)

- 프로젝트를 클릭하면 마크다운 형식으로 작성된 상세 내용을 확인할 수 있습니다.
- 기획 배경, 기술 스택, 구현 기능, 트러블 슈팅, 발전 역량 등의 항목으로 구성해 일관된 포맷을 유지하였습니다.

---

## ⚡️ 트러블 슈팅

### 🌓 마크다운 뷰어 모달 구현 중 문제 발생

**🛑 문제 상황**

> 프로젝트 상세 내용을 **모달 형태**로 보여주기 위해 `fs` 모듈을 사용해 마크다운 파일을 읽으려 했으나, 클라이언트 컴포넌트에서는 `fs`를 사용할 수 없다는 제약이 있었습니다.

- 클라이언트에서 모달을 띄우는 일반적인 방식은 정적 파일 시스템 접근이 불가능하여 `fs.readFileSync()` 사용 시 에러가 발생했습니다.
- SSR(서버 사이드 렌더링) 환경을 유지하면서도 모달처럼 보이게 구현해야 하는 **UI/아키텍처 간 충돌**이 있었습니다.

**💡 해결 방법**

- **Next.js의 Parallel Routes** 기능을 활용하여 메인 콘텐츠와 모달을 독립적으로 관리하면서 병렬로 렌더링 할 수 있도록 구성했습니다.
- 또한 **Intercepting Routes**를 사용해 실제로는 새로운 페이지를 로드하지만, URL을 가로채어 전체 페이지 전환 없이 모달 형태로 자연스럽게 표시되도록 구현했습니다.
- 이를 통해 `fs`모듈이 필요한 마크다운 파일 처리는 **서버 컴포넌트에서 안전하게 수행**하고, 사용자는 **기존 프로젝트 리스트 상태를 유지한 채 상세 내용을 모달로 확인**할 수 있도록 했습니다.

```tsx
// app/projects/@modal/[slug]/page.tsx
export default async function ProjectModal({ params }: Props) {
  const { slug } = await params;

  return <MarkdownViewer slug={slug} />;
}
```

```tsx
// components/MarkdownViewer.tsx
export default async function MarkdownViewer({ slug }: { slug: string }) {
  const markdown = await getProject(slug); // 서버 컴포넌트에서 fs 사용

  return (
    <ModalOverlay>
      <article>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ children, className }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter language={match[1]} style={oneDark}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code>{children}</code>
              );
            },
            img: (image) => (
              <Image
                src={image.src || ""}
                alt={image.src || ""}
                fill
                style={{ objectFit: "contain" }}
              />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </ModalOverlay>
  );
}
```

**🔍 문제 해결을 통해 발전한 역량**

- **Next.js**의 새로운 라우팅 기능인 **Parallel Routes와 Intercepting Routes**를 활용해 문제를 해결하면서, **유저 경험과 기술적 제약 사이의 균형을 고려한 아키텍처 설계**에 대한 감을 익힐 수 있었습니다.

---

## 🎯 프로젝트를 통해 얻은 것

- **Next.js의 App Router 기반 아키텍처 설계 경험**: 서버 컴포넌트와 클라이언트 컴포넌트 간의 역할 분리를 이해하고, Parallel Routes + Intercepting Routes를 통한 사용자 경험 중심의 라우팅 구조를 설계할 수 있게 되었습니다.

- **마크다운 파싱과 렌더링 경험**: 마크다운 파일을 서버 컴포넌트에서 읽어와 동적으로 렌더링 하는 경험을 하였습니다.

- **기술 제약을 해결하는 문제 해결 능력 향상**: 클라이언트와 서버 간의 기술적인 한계를 파악하고, Next.js의 구조적 기능을 활용해 이를 우회함으로써, 문제 해결 능력을 강화할 수 있었습니다.
