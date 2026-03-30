import { create } from 'zustand'

export const useStore = create((set) => ({
  cart: [],
  wishlist: [],
  searchQuery: '',
  selectedBrands: [],
  selectedCategories: [],
  priceRange: { min: '', max: '' },
  sortOption: 'latest',

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  addToWishlist: (product) =>
    set((state) => {
      if (!product || !product.id) {
        return state
      }
      const exists = state.wishlist.some((item) => item.id === product.id)
      if (exists) {
        return state
      }
      return {
        wishlist: [...state.wishlist, product],
      }
    }),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      ),
    })),

  clearCart: () =>
    set({
      cart: [],
    }),

  setSearchQuery: (query) =>
    set({
      searchQuery: query,
    }),

  setBrands: (brand) =>
    set((state) => ({
      selectedBrands: state.selectedBrands.includes(brand)
        ? state.selectedBrands.filter((item) => item !== brand)
        : [...state.selectedBrands, brand],
    })),

  setCategories: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((item) => item !== category)
        : [...state.selectedCategories, category],
    })),

  setPriceRange: (range) =>
    set(() => ({
      priceRange: range,
    })),

  setSortOption: (option) =>
    set(() => ({
      sortOption: option,
    })),

  clearFilters: () =>
    set({
      selectedBrands: [],
      selectedCategories: [],
      priceRange: { min: '', max: '' },
    }),
}))
