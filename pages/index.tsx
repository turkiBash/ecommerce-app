import {
    Button,
    Container,
    Flex,
    Heading,
    Input,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const IndexPage = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex h="90vh" alignItems="center" justifyContent="center">
                <Flex
                    direction="column"
                    background="green.500"
                    p={12}
                    rounded={6}
                >
                    <Heading mb={6}>Log in</Heading>
                    <Input
                        placeholder="Email"
                        variant="filled"
                        mb={3}
                        type="email"
                    />
                    <Input
                        placeholder="*******"
                        variant="filled"
                        mb={6}
                        type="password"
                    />
                    <Button
                        colorScheme={'dark' ? 'blue.300' : 'blue.700'}
                        mb={4}
                    >
                        Log in
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default IndexPage
