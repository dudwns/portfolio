# 📌 Mealkitary

> **밀키트를 거래할 수 있도록 예약 서비스를 제공하는 서비스**

- **프로젝트명**: Mealkitary
- **진행 기간**: 2023.04 \~ 2023.06
- **팀 구성**: 프론트엔드 2명, 백엔드 2명
- **깃허브 링크**: [https://github.com/dudwns/mealkitary-frontend](https://github.com/dudwns/mealkitary-frontend)

---

## 🛠️ 기술 스택

- **Frontend**: TypeScript, Next.js, Tailwind CSS, React-Query, Recoil
- **Deployment**: Vercel

---

## ✨ 담당한 주요 기능

### 🔍 1. 소비자 조사를 통한 현황과 문제점 파악

![mealkitary 조사 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/mealkitary_survey.png)

- 구글 폼으로 실제 밀키트를 구매하는 소비자들을 대상으로 설문 조사를 진행하였습니다.
- 조사 결과를 참고하여 현 밀키트 시장의 문제점을 파악하고 올바른 개발 목표와 방향성을 설정할 수 있었습니다.

### 🛍️ 2. 가게 목록 조회

![mealkitary 메인 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/mealkitary_main.png)

- 사용자는 밀키트를 판매하는 가게들을 조회할 수 있습니다.

### 🗓️ 3. 예약하기

![mealkitary 예약 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/mealkitary_reservation.gif)

- 사용자는 원하는 음식과 수량을 선택할 수 있습니다.
- 해당 지점에서 픽업 가능한 날짜와 시간을 선택할 수 있습니다.

### 💳 4. 결제하기

![mealkitary 결제 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/mealkitary_payment.gif)

- 사용자는 원하는 결제 방식을 선택하여 결제를 진행합니다.
- 결제가 완료되면 점주에게 예약 알림이 전송되고, 예약 대기 페이지로 이동합니다.
- 예약이 승인되면 예약 완료 문구를 보여줍니다.
  uuid를 사용하여 결제의 고유성과 보안성을 보장하고 동시에 결제할 수 있는 오류를 방지하였습니다.

---

## ⚡️ 트러블 슈팅

### 🔔 예약 알림 기능 구현

**🛑 문제 상황**

- 사용자 앱에서 예약과 결제가 완료된 뒤, 점주 앱에서 이를 확인하기 위해 주기적으로 API를 호출(polling) 해야 하는 비효율적인 구조가 발생했습니다.
- 반대로, 점주가 예약을 승인한 경우에도 사용자 앱이 실시간으로 상태를 인지할 수 없어, 사용자가 직접 새로고침을 하거나 대기해야 했습니다.
- 두 애플리케이션이 각기 다른 사용자에게 서비스를 제공하는 구조였기 때문에, 실시간으로 상태를 동기화하는 방식이 필요했습니다.

**💡 해결 방법**

- `Firebase Cloud Messaging`을 활용하여 예약 알림을 실시간으로 전송했습니다.
- 서비스 워커를 등록하여, 백그라운드에서도 알림을 수신할 수 있도록 설정했습니다.
- 두 개의 프로젝트(점주와 소비자 인터페이스)를 동시에 개발하여 상호작용 로직을 테스트했습니다.

![mealkitary 이슈 해결 이미지](https://yeongjun-portfolio.s3.ap-northeast-2.amazonaws.com/mealkitary_fcm.gif)

**🔍 문제 해결을 통해 발전한 역량**

- **이벤트 기반의 실시간 알림 처리** 과정을 통해 **애플리케이션 간의 비동기 흐름**과 **브라우저 백그라운드 환경**에 대한 기술적 통찰을 얻었습니다.

---

## 🎯 프로젝트를 통해 얻은 것

- **소비자 조사를 통한 문제 파악**: 실제 소비자들과의 설문 조사를 통해 밀키트 시장의 문제점을 직접 파악하고, 고객의 니즈를 이해함으로써 서비스 개발의 방향성을 설정하는 데 중요한 경험을 하였습니다.

- **실시간 예약 알림 구현**: `Firebase Cloud Messaging`을 활용해 실시간 예약 알림 시스템을 구축하는 경험을 하였습니다.

- **결제 시스템 구현**: 토스 페이먼츠 API를 이용해 결제 시스템을 구축하며 결제 보안성과 고유성을 보장하는 방법을 배웠습니다.
