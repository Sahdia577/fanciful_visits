import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavButton } from '../components/NavButton';
import {  
    Text,
    Heading,
    Flex,
    Box,
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
                    w={'70%'}
                    justifyContent={'space-between'}
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
                    fontWeight={800}
                    fontSize={30}
                    my={10}
                >
                    How do I book a Fanciful Visit?
                </Heading>
                <Flex
                    fontWeight={300}
                    fontSize={20}
                    lineHeight={1.5}
                    maxW='65ch'
                    textAlign='center'
                    gap={4}
                    flexWrap={'wrap'}
                >
                    <Text>
                        Browse through our locations and read their descriptions carefully.
                        You can only book a trip to one location at a time.
                    </Text>
                                     <Flex>
                        <Text
                            w='30ch'
                        >
                            After choosing a location, call us at:
                        </Text>
                        <Text
                             color={'cyan.500'}
                        >
                            73 273 875 223
                        </Text>
                        <Text>, it is free of any charges.</Text>
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
                    mt={10}
                >
                    <Text>©Fanciful Visits</Text>
                </Box>
            </Flex>
        </>
    );
}; 