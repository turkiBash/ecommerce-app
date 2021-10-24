import { Box, Flex, Grid, GridItem } from '@chakra-ui/layout'
import React from 'react'

const ProductsPage = () => {
    return (
        <Flex dir="column" justifyContent="space-around" alignItems="center" height="700%" width="100%">
            <Box m={2} w="100%" h="10" bg="blue.500" />
            <Box m={2} w="100%" h="10" bg="blue.400" />
            <Box m={2} w="100%" h="10" bg="blue.300" />
            <Box m={2} w="100%" h="10" bg="blue.200" />
            <Box m={2} w="100%" h="10" bg="blue.100" />
        </Flex>

    )
}

export default ProductsPage
