import React from 'react'
import ReactDOM from 'react-dom/client'

import { TodoProvider } from './context/TodoContext.tsx'
import { AppRoot } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <AppRoot />
    </TodoProvider>
  </React.StrictMode>,
)
