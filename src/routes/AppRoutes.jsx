import { Route, Routes } from 'react-router-dom'
import ComparePage from '../pages/ComparePage.jsx'
import HomePage from '../pages/HomePage.jsx'
import ProductDetailsPage from '../pages/ProductDetailsPage.jsx'
import ProductsPage from '../pages/ProductsPage.jsx'
import WishlistPage from '../pages/WishlistPage.jsx'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:id" element={<ProductDetailsPage />} />
    <Route path="/compare" element={<ComparePage />} />
    <Route path="/wishlist" element={<WishlistPage />} />
  </Routes>
)

export default AppRoutes
