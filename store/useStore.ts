import create from 'zustand'
import { persist } from 'zustand/middleware'

export type CartState = {
    products: any[]
    addProductToCart: (product: any) => void
    removeProductFromCart: (id: number) => void
}

export const useStore = create<CartState>(
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
                        (product: any) => product.id !== id
                    ),
                }))
            },
        }),
        { name: 'cart' }
    )
)
export default useStore
