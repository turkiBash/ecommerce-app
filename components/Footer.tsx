import { Button } from '@chakra-ui/button'
import { Flex, HStack } from '@chakra-ui/layout'
import React from 'react'

const Footer = () => {
    return (
        <Flex justify="space-around">
            <HStack>
                <Button as="a" variant="unstyled">
                    Contact Us
                </Button>
                <Button as="a" variant="unstyled">
                    Terms and Conditions
                </Button>
                <Button as="a" variant="unstyled">
                    FAQ
                </Button>
            </HStack>
        </Flex>
    )
}

export default Footer
