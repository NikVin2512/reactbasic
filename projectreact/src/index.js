import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { NavBar } from './Components/NavBar';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle `
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before  {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Lexend Zetta', sans-serif;
    font-size: 20px;
    color: black;
  }
  h1, h2, h3, 
  h4, h5, h6 {
    padding: 0;
    margin: 0;
    font-family: 'Leckerli One', cursive;
  }
  p {
    padding: 0;
    margin: 0;
  }
  a {
  text-decoration: none;
  color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <NavBar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
