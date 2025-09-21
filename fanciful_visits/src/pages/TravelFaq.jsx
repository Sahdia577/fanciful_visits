import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavButton } from '../components/NavButton';
import {  
    Text,
    Heading,
    Flex,
    Box,
    useBreakpointValue
 } from '@chakra-ui/react'; 

export const TravelFaq = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate('/');
    };

    const browseLocations = () => {
        navigate('/pages/LocationToggle');
    };

    return (
        <>
            <Flex
                bgColor='cyan.800'
                h={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
                color={'gray.200'}
                overflow='hidden'
            >
                <Flex
                    w={{ base: '100%', lg: '70%' }}
                    justifyContent={{ base: 'space-evenly', lg: 'space-between' }}
                    mt={8}
                >
                    <NavButton
                        onClick={()=>goBack()}
                    >
                        Home
                    </NavButton>
                    <NavButton
                        onClick={()=>browseLocations()}
                    >
                        Browse Locations
                    </NavButton>
                </Flex>
                <Heading
                    fontWeight={{ base: 700, lg: 800 }}
                    fontSize= {useBreakpointValue({ base: 'md', lg: '3xl' })}
                    my={10}
                >
                    How do I book a Fanciful Visit?
                </Heading>
                <Flex
                    fontWeight={300}
                    fontSize= {useBreakpointValue({ base: 'md', lg: 'xl'})}
                    lineHeight={1.5}
                    maxW={{ base: '45ch', lg: '65ch' }}
                    textAlign='center'
                    gap={4}
                    flexWrap={'wrap'}
                >
                    <Text>
                        Browse through our locations and read their descriptions carefully.
                        You can only book a trip to one location at a time.
                    </Text>
                    <Flex
                        w='100%'
                        gap={2}
                        justifyContent={'center'}
                    >
                        <Text>
                            After choosing a location, call us at:
                        </Text>
                        <Text
                            color={'cyan.500'}
                            textWrap='nowrap'
                        >
                            73 273 875 223
                        </Text>
                     </Flex>                 
                    <Text>
                        Before making a reservation, we do a mandatory background check.
                        You can't book a trip without this background check. 
                    </Text>
                    <Text>
                        The locations we offer trips to, are unique places. The background 
                        checks are necessary to ensure the safety of both the traveler and the 
                        location.
                    </Text>
                    <Text>
                        Our customer service representative will discuss the details of the 
                        background check with you. Then you can decide if you'd like to continue.
                    </Text>
                </Flex>
                <Box
                    bgColor={'cyan.800'}
                    fontWeight={500}
                    textAlign='center'
                    color={'gray.300'}
                    my={{ base: '3', lg: '10'}}
                >
                    <Text>©Fanciful Visits</Text>
                </Box>
            </Flex>
        </>
    );
}; 