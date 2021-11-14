import React from 'react'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    const data = await res.data
    console.log(data)
    return {
        props: { data },
    }
}

const ProductsPage = ({ data }) => {
    return (
        <Flex justifyContent="center" overflow="hidden">
            <SimpleGrid columns={5} spacing={5} alignItems="center">
                {data.map((product) => (
                    <Box
                        boxSize="400px"
                        w="300px"
                        h="400px"
                        // maxW="100%"
                        overflow="hidden"
                        p={4}
                        m={2}
                    >
                        {/* <Heading>Products</Heading> */}
                        <Link href={'/products/' + product.id} key={product.id}>
                            <a>
                                <Text>{product.title}</Text>
                                <Image
                                    src={product.image}
                                    boxSize="200px"
                                    objectFit="contain"
                                />
                                <Text p={4}>${product.price}</Text>
                            </a>
                        </Link>
                        <Button>Add to Cart</Button>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default ProductsPage
