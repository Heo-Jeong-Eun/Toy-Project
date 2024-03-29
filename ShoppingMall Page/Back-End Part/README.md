# 11Team


### ☑️ Commit Rule 
- **`master` <- `dev` <- `front`, `back` <- `member name`**
- `master` 는 대표자 1명이 관리
- `dev` 는 `front`와 `back`을 합치는 devloper branch
- `member name` 각자 이름(이니셜 ex. ksh)을 `branch`로 생성한다. 
- 개인적인 작업이 끝나면 파트 branch로 merge 한다. 
    - ex) `member name` -> `front`
- 파트별로 작업이 끝나면 `dev` branch로 merge 한다. 


### ☑️ Commit Guide
```vim
- 제목
    Feat : 2023-01-31 member name Add Login
- 본문  
    로그인 기능을 추가했습니다.
```

- **Commit Message Type**
    - Feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
    - Fix : 기능에 대한 버그 수정
    - Build : 빌드 관련 수정
    - Chore : 패키지 매니저 수정, 그 외 기타 수정
    - Ci : CI 관련 설정 수정
    - Docs : 문서, 주석 수정
    - Style : 코드 스타일, 포맷팅에 대한 수정
    - Refactor : 기능의 변화가 아닌 코드 리팩터링
    - Test : 테스트 코드 추가, 수정
    - Release : 버전 릴리즈

- **Commit Message Guide**
    1. **제목과 본문**은 **한 줄 띄고 구분**한다. → 한줄 띄면 제목과 본문이 구분된다. 
    2. **제목**은 **50글자 이내**로 작성한다. → 너무 길면 코드창이 지저분해진다. 
    3. **제목** 첫 글자는 **대문자로 표기**한다. 
    4. **제목 끝**에 **마침표는 찍지 않는다.**
    5. **제목**은 **명령문**으로, **과거형으로 작성하지 않는다.**
    6. **본문** 각행은 **72행 이내,** **줄바꿈**을 사용해 작성한다.
    7. **본문**은 어떻게 보다는 **무엇을, 왜**에 대하여 설명한다.
        - 제목은 git GUI에서 bold로 표시되고, 터미널 여러 상황에서 자주 노출 된다.
