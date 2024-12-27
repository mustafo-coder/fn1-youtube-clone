import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {api} from './service/api.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <ApiProvider api={api}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
)
