## React_Study, 리액트를 다루는 기술
리액트를 다루는 기술을 공부하고 각 챕터별 실습 내용을 컴포넌트화하여 한 페이지에 모았다.

### 01. 리액트 시작
리액트란 프론트엔드를 위한 자바스크립트 프레임워크로서, 지속적으로 데이터가 변화하고 이를 보여줘야하는 서비스에 적합나다.
- 개발환경설정
  1. Node.js 설치 (https://nodejs.org/ko/download)
  2. Yarn 설치 (https://yarnpkg.com/en/docs/install#windows-tab)
  3. Visual Studio Code 설치 (https://code.visualstudio.com/Download)
  4. Visual Studio Code 확장프로그램 설치 (ESLint, Relative Path, Guides, Reactjs code snippets)
  5. create-react-app 설치 (yarn add global add create-react-app)
  
### 02. JSX
React에서는 HTML처럼 사용할 수 있는 JSX라는 javascript 확장 문법을 사용한다.

### 03. 컴포넌트
React에서는 컴포넌트 단위로 뷰를 관리한다. 컴포넌트에는 부모에게 받아오는 값 properties와 컴포넌트 자체적으로 사용하는 값인 state를 사용할 수 있다.

### 04. 이벤트 핸들링
순수 자바스크립트와 JQuery와 비슷한 방식으로 React에서도 이벤트를 다룰 수 있다.

### 05. Reference
순수 자바스크립트에서는 dom요소를 특정하기위해 id를 사용하지만, React에서는 컴포넌트를 재사용 하므로 id가 중복될 위험이 있다. 그래서 React에서는 id대신 ref를 사용하여 dom요소를 특정한다.

### 06. 컴포넌트 반복
리액트에서는 같은 형태의 요소가 반복될 경우, 그 내용을 배열로 만들고 배열의 map 메소드를 호출하여 반복되는 요소를 간단하게 만들 수 있다. map 메소드에는 (배열의 값, 몇번째인지, 배열의 전체 값)이 인자로 전달된다.

### 07. 컴포넌트 라이프사이클
컴포넌트는 사용자에게 보여지고(Mount), 지속적으로 수정되고(Update), 사라지면서(Unmount) 관리된다. 각 동작별로 수행되는 메소드 순서가 있고, 개발자는 각 동작에서 처리해야 될 내용이 있는 경우 해당 동작의 메소드를 오버라이딩한다.
