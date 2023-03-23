import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonCompnent from './47-3';
import FriendCompnent from './47-4';
import UserComponent from './47.5';
import CountComponent from './47.7';
import RenderAPIData from './47-8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* 47.3 */}
    <PersonCompnent />

    {/* 47.4 */}
    <FriendCompnent name="CR 7" profession = "footballer"/>
    <FriendCompnent name="Tiger" profession = "Golf"/>

    {/* 47.5 */}
    <UserComponent />

    {/* 47.7 */}
    <CountComponent />

    {/* 47.8 */}
    <RenderAPIData />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
