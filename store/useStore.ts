import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
    persist(
        (set) => ({
            products: [],
            addProductToCart: (product: any) => {
                set((state: any) => {
                    products: [...state.products, product]
                })
            },
            removeProductFromCart: (id: number) => {
                set((state: any) => {
                    products: state.products.filter(
                        (product: any) => product.id !== id
                    )
                })
            },
        }),
        { name: 'cart' }
    )
)
export default useStore
