import { Box, Flex, Stack, StackDivider, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import useStore from '../store/useStore'

const cart = () => {
    const { products, removeProductFromCart } = useStore()

    return (
        <Stack
            dir={'column'}
            spacing="2px"
            divider={<StackDivider borderColor="gray.200" />}
        >
            {products.map((product: any) => (
                <Flex
                    justify="flex-start"
                    alignItems="center"
                    h="200px"
                    w="full"
                >
                    <Box boxSize="100px" align="center" key={product.id}>
                        <Image
                            src={product.image}
                            boxSize="100px"
                            objectFit="contain"
                            // key={id}
                        />
                    </Box>
                    <Text>{product.title}</Text>
                    <Text p={4}>${product.price}</Text>
                    <Button onClick={() => removeProductFromCart(product.id)}>
                        Remove
                    </Button>
                </Flex>
            ))}
        </Stack>
    )
}

export default cart
