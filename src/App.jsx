import MainLayout from './layouts/MainLayout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <AppRoutes />
    </MainLayout>
  )
}

export default App
