import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@chakra-ui/theme'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (

    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
export default MyApp
