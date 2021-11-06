import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import Navbar from '../components/Navbar'

const theme = extendTheme({
    fonts: {
        heading: 'Zen Kurenaido, sans-serif',
        body: 'Zen Kurenaido, sans-serif',
        // a: 'Zen Kurenaido, sans-serif',
        // button: 'Zen Kurenaido, sans-serif',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#fff', '#000')(props),
                color: mode('#000', '#fff')(props),
                Navbar: mode('#000', '#fff')(props),
            },
        }),
    },
})

export default theme
