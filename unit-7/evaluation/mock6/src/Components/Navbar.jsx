import { Box, Button, Collapse, Flex, IconButton, Image, Spacer, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import react, { useEffect, useState } from "react"
import {HamburgerIcon,CloseIcon} from "@chakra-ui/icons"

const Navbar=()=>{
    const [isOpen,setIsOpen]=useState(false)
    const isMobile=useBreakpointValue({base:true,md:false});
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        setIsOpen(false)
    },[])
    return(
        <Box>
            <Flex align="center">
               <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png" w="15%" h="15%"/>
                {
                    isMobile ?(
                        <IconButton
                            icon={isOpen ?<CloseIcon/>:<HamburgerIcon/>}
                            variant="ghost"
                            onClick={toggleMenu}
                            aria-label={isOpen ? "Close menu":"Open menu"}
                        />
                    ):(
                        <Stack direction="row" spacing="9" ml="auto">
                           
                            <Text fontSize="20px" color="#432F8D">Home</Text>
                            <Text fontSize="20px" color="#432F8D">class</Text>
                            <Text fontSize="20px" color="#432F8D">About</Text>
                            <Text fontSize="20px" color="#432F8D">Blog</Text>
                            <Text fontSize="20px" color="#432F8D">Contact</Text>
                            <Button fontSize="20px">Enroll Now</Button>
                        </Stack>
                    )}
            </Flex>
            {
                isMobile && (
                    <Collapse in={isOpen} animateOpacity>
                        <Box p="4" mt="4" bg="black" shadow="md" rounded="md">
                             <Stack  spacing="9">
                                <Text fontSize="20px" color="#432F8D">Home</Text>
                                <Text fontSize="20px" color="#432F8D">class</Text>
                                <Text fontSize="20px" color="#432F8D">About</Text>
                                <Text fontSize="20px" color="#432F8D">Blog</Text>
                                <Text fontSize="20px" color="#432F8D">Contact</Text>
                                <Button fontSize="20px">Enroll Now</Button>
                             </Stack>
                        </Box>
                    </Collapse>
                )
            }
        </Box>
      
      
      
    )
}

export default Navbar