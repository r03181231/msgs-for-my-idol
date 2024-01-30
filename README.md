# 개인 프로젝트 "내 연예인을 위한 MSGs" 

### 브랜치 구조
Props Drilling → Context API → Redux 순으로 각각 별도의 브랜치

## 필수 구현 사항
- [ ] 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)
- [ ] 아티스트별 게시물 조회 기능 구현 (Home - Read)
- [ ] 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- [ ] 팬레터 상세 화면 구현 (Detail - Read)
- [ ] 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- [ ] 상세화면에서 팬레터 삭제 구현 (Detail - Delete)

> **필수 요구 사항!  아래 내용을 꼭 지켜면서 구현해 주세요!**
> 
- [ ]  styled-components 를 이용하여 스타일링
    - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
    - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- [ ]  전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정
- [ ]  styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
    - 아티스트 선택탭에 적용해 보세요
- [ ]  팬레터 등록 시 id는 uuid 라이브러리를 이용
    
    https://www.npmjs.com/package//uuid

## 선택 구현 사항 
- 모달 구현
    - window.alert 이나 window.conform 대신 직접 구현한 모달을 적용해 봅시다.
- 만능 버튼 구현(공통 컴포넌트 버튼)
    - 하나의 버튼 컴포넌트를 홈화면과 상세화면 모두에서 적용할 수 있도록 해봅시다.
    - props 로 버튼 크기나 버튼 텍스트 등을 받아봅시다.
- 새로고침해도 UI 유지
    - 로컬스토리지를 이용해 봅시다.
- 검색 기능 구현
    - query string을 적용해 봅시다. (ex. http://localhost:3000?search=에스파)
    - react-router-dom의 useSearchParams를 이용해 보세요.
