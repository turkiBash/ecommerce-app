import {
    Button,
    Container,
    Flex,
    Heading,
    Input,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

const IndexPage = () => {
    const colorValue = useColorModeValue('#392061', '#2a1e43')
    return (
        <Container maxW="container.xl" p={0}>
            <Flex h="90vh" alignItems="center" justifyContent="center">
                <Flex
                    direction="column"
                    // background={colorValue}
                    p={12}
                    rounded={6}
                >
                    <Heading mb={6}>Log in</Heading>
                    <Input
                        placeholder="Email"
                        variant="filled"
                        mb={3}
                        type="email"
                        // bgColor={colorValue}
                    />
                    <Input
                        placeholder="*******"
                        variant="filled"
                        mb={6}
                        type="password"
                        // bgColor={colorValue}
                    />
                    <Button
                        mb={4}
                        // colorScheme={colorValue}
                        bgColor="whiteAlpha.400"
                    >
                        Log in
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default IndexPage
