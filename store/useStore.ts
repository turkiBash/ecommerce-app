import create from 'zustand'

const useStore = create((set) => ({
    products: [],
    addProductsToCart: (index) =>
        set((state) => ({
            products: [...state.products, index.id],
        })),
    removeProductsFromCart: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),
}))

export default useStore
