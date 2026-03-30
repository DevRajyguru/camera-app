import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          borderRadius: '12px',
          background: '#111827',
          color: '#fff',
          padding: '12px 16px',
        },
      }}
    />
  </BrowserRouter>,
)
