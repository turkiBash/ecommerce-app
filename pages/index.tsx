import { Button, Container, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'



const IndexPage = () => {
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Container maxW="container.xl" p={0}>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder="Email" variant="filled" mb={3} type="email" />
          <Input placeholder="*******" variant="filled" mb={6} type="password" />
          <Button colorScheme="teal" mb={4}>Log in</Button>
          <Button onClick={toggleColorMode}>Color Mode</Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export default IndexPage
