import { Button as CButton } from '@chakra-ui/react'; 

export const Button = ({ children, handleClick, ...props }) => {
    return (
        <>
            <CButton
                w="5rem"
                color={'gray.200'}
                bgColor={'cyan.900'}
                _hover={{ transform: 'scale(1.05)' }}
                onClick={handleClick}
                {...props}
            >
                {children}
            </CButton>
        </>
    )
}