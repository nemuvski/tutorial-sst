import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider as UrqlProvider, createClient } from 'urql'
import Article from './pages/Article'
import Home from './pages/Home'

// グローバルスタイル
import './index.css'

const urql = createClient({
  url: import.meta.env.VITE_GRAPHQL_URL,
})

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='article/:id' element={<Article />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = document.getElementById('root')
if (!root) throw new Error('Oops, root element is missing.')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <UrqlProvider value={urql}>
      <App />
    </UrqlProvider>
  </React.StrictMode>
)
