import React from 'react'
import {
    Box,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Text,
} from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import axios, { Axios } from 'axios'

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
        <Flex justifyContent="center">
            <SimpleGrid columns={5} spacing={5} alignItems="center">
                {data.map((product) => (
                    <Box
                        boxSize="400px"
                        w="300px"
                        h="400px"
                        // maxW="100%"
                        overflow="hidden"
                        key={product.id}
                        p={4}
                        m={2}
                    >
                        {/* <Heading>Products</Heading> */}
                        <Text>{product.title}</Text>
                        <Image
                            src={product.image}
                            boxSize="200px"
                            objectFit="contain"
                        />
                        <Text p={4}>{product.price}</Text>
                        <Button>Add to Cart</Button>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default ProductsPage
