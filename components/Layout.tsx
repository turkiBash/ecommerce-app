import { Divider } from '@chakra-ui/layout'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Divider m={10} maxW="container.xl" />
            <Footer />
        </>
    )
}

export default Layout
