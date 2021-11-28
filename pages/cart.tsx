import {
    Box,
    Center,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import useStore from '../store/useStore'

const cart = () => {
    const { products, addItemToCart, removeItemToCart, removeProductFromCart } =
        useStore()
    const [num, setNum] = useState(1)

    const removeHandler = (id: number) => {
        removeProductFromCart(id)
    }

    return (
        <Stack
            dir={'column'}
            spacing="2px"
            height="container.xl"
            divider={<StackDivider borderColor="gray.200" />}
        >
            {products.length === 0 ? <Heading mt={3}><Center>Your Cart is empty</Center></Heading> : 
            products.map((product: any) => (
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
                    <Button onClick={() => removeItemToCart(product.id)}>
                        -
                    </Button>
                    <Box as="span">{num}</Box>
                    <Button onClick={() => addItemToCart(product.id)}>+</Button>
                    <Button onClick={() => removeHandler(product.id)}>
                        Remove
                    </Button>
                </Flex>
            ))}
}
        </Stack>
    )
}

export default cart
