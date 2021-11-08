import React from 'react'
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
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
        <SimpleGrid columns={5} spacing={5}>
            {data.map((product) => (
                <Box
                    boxSize="300px"
                    maxW="sm"
                    overflow="hidden"
                    key={product.id}
                    p={4}
                    m={2}
                >
                    {/* <Heading>Products</Heading> */}
                    <Heading size="10px">{product.title}</Heading>
                    <Image src={product.image} boxSize="250px" />
                    <Text p={4}>{product.price}</Text>
                </Box>
            ))}
        </SimpleGrid>
    )
}

export default ProductsPage
