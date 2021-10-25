import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@chakra-ui/theme'
import type { AppProps } from 'next/app'
import Layout from './../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (

    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )

}
export default MyApp
