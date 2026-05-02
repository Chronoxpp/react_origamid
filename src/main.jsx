import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStorage } from "./GlobalContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStorage>
            <App />
        </GlobalStorage>
    </StrictMode>
)
