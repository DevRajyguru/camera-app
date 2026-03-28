import { create } from 'zustand'

export const useStore = create((set) => ({
  cart: [],
  wishlist: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  addToWishlist: (product) =>
    set((state) => ({
      wishlist: [...state.wishlist, product],
    })),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
}))
