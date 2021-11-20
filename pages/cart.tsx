import { Heading } from '@chakra-ui/layout'
import React from 'react'
import useStore from '../store/useStore'

const cart = () => {
    const products = useStore((state) => state.products)
    console.log(products)
    return <Heading>Cart Page {products.length} </Heading>
}

export default cart
