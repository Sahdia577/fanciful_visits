import React from 'react';
import { data } from '../utils/data';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { NavButton } from '../components/NavButton';
import {
    Image,
    Flex, 
    Box,
    Text, 
    Heading,
    Input
} from '@chakra-ui/react';

export const LocationListPage = ({ handleClick }) => {
    const [searchField, setSearchField] = useState(''); 
    const handleChange = (event) => {
    setSearchField(event.target.value);
    };

    {/*Matching searchbar input with locations */}
    let matchedLocation = data.sites.filter(obj => {
        let matchLabel = obj.labels.toLowerCase().includes(searchField.toLowerCase());
        let matchName = obj.name.toLowerCase().includes(searchField.toLowerCase());
        
        return matchLabel || matchName
    });

    let displayMatchedLocation = data.sites;
    if (matchedLocation.length > 0)
    {
        displayMatchedLocation = matchedLocation;
    };

    {/*Navigation buttons*/}
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    const goToBookTrip = () => {
        navigate('/pages/TravelFaq');
    };

    const images = displayMatchedLocation.map(obj => 
        <Box>
            <Image key={obj.img}
                src={obj.img}
                h='20rem'
                w='25rem'
                mt={10}
                borderRadius={15}
                objectFit='cover'
                onClick={() => handleClick(obj)}
                title={obj.title}
                cursor='pointer'
                _hover={{ transform: 'scale(1.02)' }}
            />
            <Box padding={2}>
                <Text 
                    key={obj.name}
                    color='gray.300'
                    textAlign='center'
                    fontSize='1.5rem'
                    fontWeight={300}
                >
                    {obj.name}
                </Text>
            </Box>
        </Box>
    );

    return (
        <>   
            <Flex
                flexDir={{ base: 'column', lg: 'row'}}
                justifyContent='space-between'
                bgColor={'cyan.950'}
                p={10}
                gap={{ base: '3' }}
                
            >
                <NavButton
                    onClick={()=>goHome()}
                >
                    Home
                </NavButton>
                <Input
                    w={{ base: '100%',lg:'50%'}}
                    color={'cyan.900'}
                    bgColor={'gray.400'}
                    fontSize={18}
                    fontWeight={400}
                    placeholder={'Search locations'}
                    borderColor={'cyan.800'}
                    _hover={{ transform: 'scale(1.01)' }}
                    onChange={handleChange}
                    matchedLocation={matchedLocation}
                />
                <NavButton
                    onClick={() => goToBookTrip()}
                    alignSelf={{ base:'flex-end'}}
                >
                    Book a trip
                </NavButton>
            </Flex>
            <Heading
                size='5xl'
                noOfLines={1}
                mb={8}        
                color='gray.300'
                bgColor='cyan.950'
                textAlign='center'
                paddingTop={10}
            >
                Visit Fanciful Locations
            </Heading>  
            
            <Flex 
                flexWrap='wrap'
                justify='space-evenly'
                bgColor= 'cyan.950'
                paddingBottom={10}
                marginTop={-8}
            >
                {images} 
            </Flex>    
            <Box
                bgColor={'cyan.950'}
                fontWeight={500}
                textAlign='center'
                color={'gray.300'}
                p={2}
                h='16rem'
            >
                <Text>©Fanciful Visits</Text>
            </Box>
        </>
    );
};
