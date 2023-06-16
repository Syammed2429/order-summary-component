import { Box, Button, Card, CardBody, CardFooter, CardHeader, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import musicImage from '../../assets/illustration-hero.svg'
import musicIcon from '../../assets/icon-music.svg';
import './Order-Summary.css'


export const OrderSummary: FC = () => {
    return (
        <>
            <div>
                <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} >

                    <Card w={360} rounded='2xl' >
                        <CardHeader p={0}>
                            <Image
                                className='image-round'
                                boxSize='100%'
                                src={musicImage} />
                        </CardHeader>
                        <CardBody >
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>

                                <Text as='b' fontSize='xl'>Order Summary</Text>
                                <Text textAlign='center'
                                    color='gray.500'
                                >You can now listen to millions of songs, audiobooks,
                                    and podcasts on any device anywhere you like!
                                </Text>

                                <Box
                                    w='100%'
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    alignContent='center'
                                    my={5}
                                >
                                    <Image
                                        mr={5}
                                        objectFit='cover'
                                        src={musicIcon} />
                                    <Box>
                                        <Text as='b'>Annual Plan</Text>
                                        <Text
                                            color='gray.500'
                                        >$59.99/year</Text>
                                    </Box>
                                    <Text _hover={{ cursor: 'pointer' }} pl={12} color='blue' className='changeButton'>Change</Text>
                                </Box>
                                <CardFooter display='flex' flexDirection='column' justifyContent='center' alignItems='center' >

                                    <Button
                                        w='xs'
                                        mb={4}
                                        _hover={{
                                            backgroundColor: '#d6e1ff',
                                            color: 'black'
                                        }} background='blue' color='white' boxShadow='dark-lg'>Proceed to Payment</Button>
                                    <Text
                                        color='gray.500'
                                        fontSize='md'
                                        _hover={{ cursor: 'pointer' }}
                                    >Cancel Order</Text>
                                </CardFooter>

                            </Box>

                        </CardBody>
                    </Card>
                </SimpleGrid>

            </div>
        </>
    )
}