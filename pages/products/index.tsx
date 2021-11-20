import React, { useEffect, useState } from 'react'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import useStore from '../../store/useStore'

export const getStaticProps = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    const data = await res.data
    console.log(data)
    return {
        props: { data },
    }
}

const ProductsPage = ({ data }) => {
    const addProductsToCart = useStore((state) => state.addProductsToCart)
    const products = useStore((state) => state.products)
    // const [addToCart, setAddToCart] = useState([])
    console.log(data)

    const addToCart = () => {
        addProductsToCart
    }

    console.log(products)

    return (
        <Flex justifyContent="center" overflow="hidden">
            <SimpleGrid columns={5} spacing={5} alignItems="center">
                {data.map((product, index) => (
                    <Box
                        boxSize="400px"
                        w="300px"
                        h="400px"
                        objectFit="cover"
                        // maxW="100%"
                        overflow="hidden"
                        p={4}
                        m={8}
                        // value={product.id}
                        key={index}
                    >
                        {/* <Heading>Products</Heading> */}
                        <Link href={'/products/' + product.id} key={product.id}>
                            <a>
                                <Image
                                    src={product.image}
                                    boxSize="200px"
                                    boxShadow="2xl"
                                    objectFit="contain"
                                />
                            </a>
                        </Link>
                        <Text m={4}>{product.title}</Text>
                        <Text p={1}>${product.price}</Text>
                        <Button onClick={addToCart}>Add to Cart</Button>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default ProductsPage
