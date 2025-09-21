import { Button } from '@chakra-ui/react'; 

export const NavButton = ({ children,  ...props }) => {
    return (
        <>
            <Button
                w='10rem'
                bgColor={'gray.400'}
                color={'cyan.900'}
                fontSize={16}
                fontWeight={800}
                _hover={{ transform: 'scale(1.05)' }}
                {...props}
            >
                {children}
            </Button>
        </>
    )
}