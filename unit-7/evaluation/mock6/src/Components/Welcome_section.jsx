import { Box, Flex, Heading, Text,Image } from '@chakra-ui/react'
import React from 'react'

const Welcome = () => {
  return (
   <>
    <Box w={{lg:"60%", md:"60%", base:"100%"}} h="auto"  m="auto" mt={{lg:"100px", base:"20px"}}>
        <Box w={{lg:"fit-content", md:"60%", sm:"100%", base:"100%"}} m="auto" >
          <Heading  fontSize={{lg:"40px", md:"40px", base:"25px"}} textAlign={"center"} fontFamily={"Fredoka One,cursive"} color="#423F8D">Welcome to our <span style={{color:"#ED078B"}}>Kindergarten</span></Heading>
        </Box>
        <Box>
            <Text fontSize="18px" color="#423F8D" fontFamily={"DM Sans,sans-serif"} textAlign="center" mt="20px" >
            Our set he for firmament morning sixth subdue today the darkness
             creeping gathered divide our let god moving today. Moving in fourth 
             air night bring upon lesser subdue.
            </Text>
        </Box>
    </Box>

    <Flex w={{lg:"70%", base:"90%"}} m={"auto"}  mt={"50px"} justifyContent={"space-between"} gap={{md:"20px"}} flexDirection={{lg:"row", base:"column"}}>
        <Box  w={{lg:"40%"}} display={"flex"} flexDirection={"column"} justifyContent={'space-around'}>
            <Flex  gap="20px" mt="20px">
                <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg'></Image>
                <Box>
                    <Text fontFamily={"Concert One,cursive"} fontSize={"25px"} as='b' color={"#1F97D4"}>Inter School Sports</Text>
                    <Text fontSize={"16px"} color="#4255A4">The words you use in your written communica speak volumes.</Text>
                </Box>
            </Flex>
            <Flex gap="20px" mt="20px">
                <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg'></Image>
                <Box>
                    <Text fontFamily={"Concert One,cursive"} fontSize={"25px"} as='b' color={"#FBCE0F"}>Friendly Environment</Text>
                    <Text fontSize={"16px"} color="#4255A4">The words you use in your written communica speak volumes.</Text>
                </Box>
           </Flex>
           <Flex  gap="20px" mt="20px">
                <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg'></Image>
                <Box>
                    <Text fontFamily={"Concert One,cursive"} fontSize={"25px"} as='b' color='#12D9DF'>Multimedia Class</Text>
                    <Text fontSize={"16px"} color="#4255A4">The words you use in your written communica speak volumes.</Text>
                </Box>
           </Flex>
        </Box>
        <Image w={{lg:"50%", base:"100%"}} h={{lg:"500px"}} src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png'></Image>
    </Flex>
   </>
  )
}

export default Welcome