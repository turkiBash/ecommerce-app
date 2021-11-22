import React from 'react'
import Link from 'next/link'
import {
    Avatar,
    Box,
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ImCart } from 'react-icons/im'
import useStore from '../store/useStore'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue('blue.300', '#2a1e43')
    const { products } = useStore()

    return (
        <Flex
            as="nav"
            dir="column"
            justifyContent="flex-start"
            // bgColor={formBackground}
            position="sticky"
            boxShadow="md"
        >
            <Link href="/products/">
                <Button as="a" variant="ghost" m={3}>
                    Home
                </Button>
            </Link>

            <Link href="/">
                <Button as="a" variant="ghost" m={3}>
                    Account
                </Button>
            </Link>
            <Link href="/">
                <Button as="a" variant="ghost" m={3}>
                    About
                </Button>
            </Link>
            <Button as="a" variant="ghost" m={3} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Flex
                as="nav"
                dir="column"
                justifyContent="flex-end"
                width="full"
                alignItems="center"
            >
                <InputGroup size="md">
                    <Input
                        m={2}
                        w="full"
                        pr="4.5rem"
                        type="search"
                        placeholder="...Search"
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            // _focus="none"
                            variant="unstyled"
                            mr={4}
                            mt={6}
                            size="sm"
                            // color={colorMode}
                        >
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Flex
                    width="auto"
                    alignItems="center"
                    wrap="wrap"
                    justifyContent="center"
                >
                    <Link href="/cart">
                        <a>
                            <IconButton
                                aria-label="Cart"
                                icon={<ImCart />}
                                variant="ghost"
                                outline="none"
                                size="md"
                                m={2}
                            />
                        </a>
                    </Link>
                    {products.length > 0 ? (
                        <Box as="span" alignItems="center" p={-10}>
                            {products.length}
                        </Box>
                    ) : (
                        ''
                    )}
                </Flex>
                <Link href="/profile">
                    <a>
                        <Avatar m="2"></Avatar>
                    </a>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Navbar
