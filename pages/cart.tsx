import {
    Box,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import useStore from '../store/useStore'

const cart = () => {
    const { products, removeProductFromCart } = useStore()

    const removeHandler = (id: number) => {
        removeProductFromCart(id)
    }
    // console.log(products)
    return (
        <Stack
            dir={'column'}
            spacing="2px"
            divider={<StackDivider borderColor="gray.200" />}
        >
            {products.map((product: any, id: number) => (
                <Flex
                    justify="flex-start"
                    alignItems="center"
                    h="200px"
                    w="full"
                >
                    <Box boxSize="100px" align="center" key={id}>
                        <Image
                            src={product.image}
                            boxSize="100px"
                            objectFit="contain"
                        />
                    </Box>
                    <Text>{product.title}</Text>
                    <Text p={4}>${product.price}</Text>
                    <Button onClick={() => removeHandler(id)}>Remove</Button>
                </Flex>
            ))}
        </Stack>
    )
}

export default cart
