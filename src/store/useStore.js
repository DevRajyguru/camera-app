import { create } from 'zustand'

export const useStore = create((set) => ({
  cart: [],
  wishlist: [],
  compareItems: [],
  searchQuery: '',
  debouncedSearch: '',
  selectedBrands: [],
  selectedCategories: [],
  selectedSensors: [],
  priceRange: { min: 0, max: 200000 },
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

  setDebouncedSearch: (query) =>
    set({
      debouncedSearch: query,
    }),

  setBrands: (brands) =>
    set({
      selectedBrands: brands,
    }),

  setCategories: (categories) =>
    set({
      selectedCategories: categories,
    }),

  setSensors: (sensors) =>
    set({
      selectedSensors: sensors,
    }),

  setPriceRange: (range) =>
    set(() => ({
      priceRange: range,
    })),

  setSortOption: (option) =>
    set(() => ({
      sortOption: option,
    })),

  addToCompare: (product) =>
    set((state) => {
      if (!product || !product.id) {
        return state
      }
      if (state.compareItems.some((item) => item.id === product.id)) {
        return state
      }
      if (state.compareItems.length >= 4) {
        return state
      }
      return {
        compareItems: [...state.compareItems, product],
      }
    }),

  removeFromCompare: (id) =>
    set((state) => ({
      compareItems: state.compareItems.filter((item) => item.id !== id),
    })),

  clearCompare: () =>
    set({
      compareItems: [],
    }),

  clearFilters: () =>
    set({
      selectedBrands: [],
      selectedCategories: [],
      selectedSensors: [],
      priceRange: { min: 0, max: 200000 },
    }),
}))
