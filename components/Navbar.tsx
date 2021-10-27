import React from 'react'
import Link from 'next/link'
import { Avatar, Button, Flex, IconButton, Input } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import { ImCart } from 'react-icons/im'






const Navbar = () => {
    return (
        <Flex as="nav" dir="column" justifyContent="flex-start" bgColor="green.200" pos="sticky">
            <Link href="/products/"><Button as="a" variant="ghost" m={2}>Home</Button></Link>
            <Link href="/"><Button as="a" variant="ghost" m={2}>Account</Button></Link>
            <Link href="/"><Button as="a" variant="ghost" m={2}>About</Button></Link>
            <Button as="a" variant="ghost" m={2}><MoonIcon /></Button>


            <Flex as="nav" dir="column" justifyContent="flex-end" width="full">
                <Input width="full" type="search" m={3} variant="filled">
                </Input>
                <Button variant="ghost" m={3}>Search</Button>
                <Link href="/cart"><a><IconButton aria-label="Cart" icon={<ImCart />} variant="ghost" size="lg" m={2} /></a></Link>
                <Link href="/profile"><a><Avatar m="2"></Avatar></a></Link>
            </Flex>
        </Flex>
    )
}

export default Navbar
