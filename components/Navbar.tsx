import React from 'react'
import Link from 'next/link'
import {
    Avatar,
    Button,
    Flex,
    IconButton,
    Input,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ImCart } from 'react-icons/im'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue('#392061', '#2a1e43')
    const formBackground2 = useColorModeValue('#2a1e43', '#392061')

    return (
        <Flex
            as="nav"
            dir="column"
            justifyContent="flex-start"
            bgColor={formBackground}
            pos="sticky"
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
                <Input
                    width="full"
                    type="search"
                    m={3}
                    variant="filled"
                ></Input>
                <Button variant="ghost" m={3}>
                    Search
                </Button>
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
