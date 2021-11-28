import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image, Button } from '@chakra-ui/react'
import axios from 'axios'

export const getStaticPaths = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    const data = await res.data

    const paths = data.map((product) => {
        return {
            params: { id: product.id.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await axios.get('https://fakestoreapi.com/products/' + id)
    const data = await res.data

    return {
        props: { data: data },
    }
}

const productPage = ({ data }) => {
    return (
        <Flex justify="center" alignItems="center" h="xl">
            <Box align="center" key={data.id}>
                <Text>{data.title}</Text>
                <Image src={data.image} boxSize="400px" objectFit="contain" />
                <Text p={4}>${data.price}</Text>
                <Button>Add to Cart</Button>
            </Box>
        </Flex>
    )
}

export default productPage
