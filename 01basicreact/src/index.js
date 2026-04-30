import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Will Run App.js , This allow us to write html in js  */}
    {/* we didnt link js to index.html in punli but react-scrips in package.json does it for us  */}
  </React.StrictMode>
);

