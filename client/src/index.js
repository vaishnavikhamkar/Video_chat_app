import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './SocketContext';


import App from './App';

// const rootElement = document.getElementById("root");

// const root = ReactDOMClient.createRoot(rootElement);
// root.render(<App/>);

window.React1=require('react');

require('react-dom');
window.React2=require('react');
console.log(window.React1===window.React2);

ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
