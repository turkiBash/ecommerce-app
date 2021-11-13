import { ChakraProvider } from '@chakra-ui/provider'
import type { AppProps } from 'next/app'
import Layout from './../components/Layout'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '../theme/index.css'

const theme = extendTheme({
    fonts: {
        body: 'Mohave , sans-serif',
        heading: 'Mohave , sans-serif',
        mono: 'Mohave , sans-serif',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#fff', '#1a1b25')(props),
                color: mode('#1a1b25', '#fff')(props),
            },
        }),
    },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
export default MyApp
