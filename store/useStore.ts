import create from 'zustand'
import { persist } from 'zustand/middleware'

export type CartState = {
    products: any[]
    itemsInCart: any[]
    addProductToCart: (product: any) => void
    removeProductFromCart: (id: number) => void
}

const useStore = create<CartState>(
    persist(
        (set) => ({
            products: [],
            addProductToCart: (product: any) => {
                set((state) => ({
                    products: [...state.products, product],
                }))
            },
            removeProductFromCart: (id: number) => {
                set((state) => ({
                    products: state.products.filter(
                        (product: number) => product.id !== id
                    ),
                }))
            },
            addItemToCart: (product: any) => {
                set((state) => ({
                    itemsInCart: [...state.itemsInCart, products + product],
                }))
            },
            removeItemToCart: (product: any) => {
                set((state) => ({
                    itemsInCart: [...state.itemsInCart, products - product],
                }))
            },
        }),
        { name: 'cart' }
    )
)
export default useStore
