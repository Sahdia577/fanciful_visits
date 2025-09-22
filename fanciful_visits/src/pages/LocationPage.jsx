import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import {  
    Card,
    Image,
    Text,
    Flex,
    Box,
    useBreakpointValue
 } from '@chakra-ui/react'; 
 

export const LocationPage = ({ location, handleClick }) => {
    return (
        <>
            <Flex
                justify='center'
                bgColor={'cyan.800'}
                p={10}
                h={{ base: '1300px', lg: '1000px' }}          
            >
                <Card.Root
                    color={'cyan.900'}
                    bgColor={'gray.400'}
                    flexDirection={{lg: 'row' }}
                    overflow='hidden'
                    w={{ base: '100%', lg:'80%' }}
                    h={{ base: '60rem', lg: '30rem' }}
                    mt={20}
                >
                    <Image
                        src={location.img}
                        w={{ lg: '50%' }}
                        borderRadius={5}
                        objectFit='cover'
                        mx={0}
                    />
                    <Box>
                        <Card.Body gap={3}>
                            <Card.Title
                                textAlign={'center'}
                                fontSize= {useBreakpointValue({ base: 'xl', lg: '3xl' })}
                                fontWeight={800} 
                                mb={5}
                            >
                                {location.name}
                            </Card.Title>
                            <Card.Description
                                color='cyan.900'
                                fontSize= {useBreakpointValue({ base: 'md', lg: 'xl' })}
                                fontWeight={600}
                            >
                                <Text
                                    textAlign={'center'}
                                    mb={2}
                                >
                                    {location.description}
                                </Text>
                                <Flex
                                    gap={1}
                                    flexWrap={'wrap'}
                                    flexDir={'column'}
                                    mt={10}
                                    fontWeight={500}
                                    fontSize={useBreakpointValue({ base: 'md', lg: 'l' })}
                                >
                                    <Flex gap={3} flexDir={{ base: 'column', lg:'row' }}>
                                        <Badge>Vegetation:</Badge>
                                        <Text>
                                            {location.vegetation}
                                        </Text>
                                    </Flex>
                                    <Flex gap={3} flexDir={{ base: 'column', lg:'row' }}>
                                        <Badge>Animals:</Badge>
                                        <Text>
                                            {location.animals}
                                        </Text>
                                    </Flex>
                                    <Flex gap={3} flexDir={{ base: 'column', lg:'row' }}>
                                        <Badge>Temperature in Celsius:</Badge>
                                        <Text>
                                            {location.temperature}
                                        </Text>
                                    </Flex>
                                    <Flex gap={3} flexDir={{ base: 'column', lg:'row' }}>
                                        <Badge>Number of inhabitants:</Badge>
                                        <Text>
                                            {location.inhabitants}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Card.Description>
                        </Card.Body>
                        <Card.Footer>
                            <Button
                                m={'auto'}
                                mt={5}
                                onClick={() => handleClick()}
                            >
                                Back
                            </Button>
                        </Card.Footer>
                    </Box>
                </Card.Root>
            </Flex>
            <Box
                bgColor={'cyan.800'}
                fontWeight={500}
                textAlign='center'
                color={'gray.300'}
                mt='-100px'
                h='100px'
            >
                {/*Box has mt=-100px, h=100px, which go together
                with above Flex h=1000px, to get rid of white area 
                at page bottom.*/}
                <Text>©Fanciful Visits</Text>
            </Box>
        </>
    );
};
