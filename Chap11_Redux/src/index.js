import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'         // Reducer 함수를 불러와 단일 store를 만들 목적
import { Provider } from 'react-redux'      // Context의 Provider와 동일한 역할.
import { composeWithDevTools } from 'redux-devtools-extension'      // 브라우저에서 store의 상태를 확인하기 위함.

import CounterR from './modules/counterR'

const store = createStore(CounterR, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>      {/* Context.Provider의 역할 */}
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
