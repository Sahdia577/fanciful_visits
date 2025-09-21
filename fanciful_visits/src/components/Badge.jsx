import { Badge as CBadge } from "@chakra-ui/react";

export const Badge = ( { children, ...props }) => {
    return (
        <>
            <CBadge
                bgColor={'cyan.900'}
                color={'gray.100'}
                fontSize={15}
                fontWeight={400}
                padding={1}
                w={"11rem"}
                {...props}
            >
                { children }
            </CBadge>
        </>
    )
}

