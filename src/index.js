import ReactDom from 'react-dom/client'
import React from 'react';
const container = document.getElementById('root')
const root = ReactDom.createRoot(container);
import App from "./App";

root.render(<App />)
