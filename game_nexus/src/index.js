import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log("Hello world")

reportWebVitals();
