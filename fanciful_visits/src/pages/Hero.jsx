import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    VStack,
    Flex,
    Text, 
    Heading,
    useBreakpointValue,
    Button
} from '@chakra-ui/react';

export const Hero = () => {
    const navigate = useNavigate()

    const goToTravelFaq = () => {
        navigate('/pages/TravelFaq');
    };
    
    const goToLocations = () => {
        navigate('/pages/LocationToggle');
    };

    return (
        <>
            <Flex
                w={'full'}
                h={'100vh'}
                style={{ backgroundImage: 'url(./Images/made-by-geralt-on-pixabay.com_stars-2643089_1280.jpg)' }}
                backgroundSize='cover'
                backgroundPosition={'center center'}
            >
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack
                        maxW={'2xl'}
                        align={'flex-start'}
                        spacing={6}
                    >
                        <Text
                            color={'gray.200'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        >
                            Fanciful Visits
                        </Text>
                        <Text
                            color={'gray.200'}
                            fontWeight={400}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
                        >
                            Go to locations you won't find in your travel agency. Spend time in a place 
                            which makes you wonder how something like this can exist. You don't have to
                            sleep to have a dream holiday. Visit a Fanciful Location.                            
                        </Text>
                        <Stack
                            direction={'row'}
                            gap={5}
                            mt={5}
                        >
                            <Button
                            bg={'cyan.600'}
                            rounded={'full'}
                            color={'gray.100'}
                            _hover={{ bg: 'cyan.700' }}
                            onClick={() => goToTravelFaq()}  
                            >
                                How do I book a Fanciful Visit?
                            </Button>
                            <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'gray.100'}
                            _hover={{ bg: 'whiteAlpha.500' }}
                            onClick={() => goToLocations()}
                            >
                                Show me the Fanciful Locations
                            </Button>
                        </Stack>
                        <Stack
                            color={'gray.200'}
                            mt={10}
                            fontWeight={800}

                        >
                            <Text>©Fanciful Visits</Text>
                        </Stack>
                    </Stack>
                </VStack>
            </Flex>
        </>
    );
};