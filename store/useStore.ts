import create from 'zustand'
import { persist } from 'zustand/middleware'

export type CartState = {
    products: any[]
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
                        (prod: number) => prod.id !== id
                    ),
                }))
            },
        }),
        { name: 'cart' }
    )
)
export default useStore
