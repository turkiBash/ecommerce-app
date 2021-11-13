import React from 'react'
import Link from 'next/link'
import {
    Avatar,
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

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue('blue.300', '#2a1e43')

    return (
        <Flex
            as="nav"
            dir="column"
            justifyContent="flex-start"
            // bgColor={formBackground}
            position="sticky"
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

            <Flex as="nav" dir="column" justifyContent="flex-end" width="full">
                <InputGroup size="md">
                    <Input
                        m={3}
                        w="full"
                        pr="4.5rem"
                        type="search"
                        placeholder="...Search"
                    />
                    <InputRightElement width="4.5rem">
                        <Button
                            _focus="none"
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

                <Link href="/cart">
                    <a>
                        <IconButton
                            aria-label="Cart"
                            icon={<ImCart />}
                            variant="ghost"
                            size="lg"
                            m={2}
                        />
                    </a>
                </Link>
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
