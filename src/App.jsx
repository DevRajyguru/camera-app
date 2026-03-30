import MainLayout from './layouts/MainLayout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <MainLayout>
      <Toaster position="top-right" />
      <ScrollToTop />
      <AppRoutes />
    </MainLayout>
  )
}

export default App
