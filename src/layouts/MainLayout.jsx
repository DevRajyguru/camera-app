import Navbar from '../components/Navbar.jsx'

const MainLayout = ({ children }) => (
  <div className="bg-gray-100 min-h-screen">
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  </div>
)

export default MainLayout
