import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

 const ImageCard = ({data}) => {
    return (
        <>
        <Box w="100%" h="450px" bg="white" borderRadius={'30px'}>
         <Image src={data.image} w="100%" h="60%"></Image>
         <Text ml="10px" mt="10px" fontSize='20px' fontFamily={'Fredoka One,cursive'} color={'#423F8D'} fontWeight={800} >{data.title}</Text>
         <Text ml="10px" mt="10px" fontSize={'18px'} color={'#1d1c1c84'}>{data.description}</Text>
         <Box display={'flex'} justifyContent={'space-around'}>
          <Box mt='10px'>
            <Text as="b" color='pink.500'>3-5</Text>
            <Text color={'#1d1c1c84'}>Age Group</Text>
          </Box>
          <Box>
            <Text as="b" color='yellow.400'>30</Text>
            <Text color={'#1d1c1c84'}>Classes</Text>
          </Box>
          <Box>
            <Text as="b" color='blue.500'>10/h</Text>
            <Text color={'#14141484'}>Class Price</Text>
          </Box>
         </Box>
        </Box>
        </>
      )
}


export default ImageCard
