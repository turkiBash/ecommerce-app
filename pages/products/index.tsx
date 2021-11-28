import React from 'react'
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
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

const ProductsPage = (props: any) => {
    const { data } = props
    const { addProductToCart, products } = useStore()
    // const [addToCart, setAddToCart] = useState([])
    const addToCart = (product: any) => {
        console.log(product.id)

        addProductToCart(product)
    }

    console.log(products)

    return (
        <Flex justifyContent="center" overflow="hidden">
            <SimpleGrid columns={3} spacing={5} alignItems="center">
                {data.map((product: any, index: any) => (
                    <Box
                        boxSize="400px"
                        // w="300px"
                        // h="400px"
                        objectFit="fill"
                        // maxW="100%"
                        overflow="hidden"
                        p={3}
                        m={3}
                        // value={product.id}
                        key={index}
                    >
                        {/* <Heading>Products</Heading> */}
                        <Link href={'/products/' + product.id}>
                            <a>
                                <Flex justifyContent="center">
                                    <Image
                                        src={product.image}
                                        boxSize="200px"
                                        boxShadow="2xl"
                                        objectFit="contain"
                                    />
                                </Flex>
                            </a>
                        </Link>
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignContent="space-around"
                            wrap="wrap"
                            alignItems="center"
                        >
                            <Text fontSize="16px" m={4}>
                                {product.title}
                            </Text>
                            <Text m={4}>${product.price}</Text>
                        </Flex>
                        <Flex justifyContent="center">
                            <Button onClick={() => addToCart(product)}>
                                Add to Cart
                            </Button>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default ProductsPage
