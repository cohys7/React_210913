import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 보통 프로젝트에 관련된 설정만 기술한다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // public 폴더에 index.html 파일에서 abc 라는 id를 찾아서 App가 가지고 있는 JSX(DOM)을 삽입해라.
  // entry point는 설치한 create-react-app에 기본 값으로 세팅되어 있음.
  document.getElementById('abc')        
);
reportWebVitals();
