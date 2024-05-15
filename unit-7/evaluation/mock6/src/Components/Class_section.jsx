import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ImageCard from "./ImageCard";



const Class = () => {
    console.log("offer")
    let arr = [
        {
            id:1,
            image:'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png',
            title:"Intelligent talent",
            description:"The word you use in written communication speak volume"
        },
        {
            id:2,
            image:'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png',
            title:"Intelligent talent",
            description:"The word you use in written communication speak volume"
        },
        {
            id:3,
            image:'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png',
            title:"Intelligent talent",
            description:"The word you use in written communication speak volume"
        }
    ];
  return (
    <>
      <Box w="100%" bg="#ffe6ff" h={{lg:"700px", md:"1200px", base:"auto"}} mt="30px">
        <Box mt="20px">
          <Text  color={'#423F8D'} fontWeight={800} fontSize={'40px'} textAlign={'center'} fontFamily={'Fredoka One,cursive'}>Classes We Offer</Text>
        </Box>
        <Box w="50%" m={'auto'} mt="20px">
          <Text color={'#423F8D'} fontSize={'18px'} textAlign={'center'}>
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue.
          </Text>
        </Box>
        <Box w={{lg:"80%", md:"70%", base:"50%"}}  m={'auto'} mt='40px' display={'grid'} gridTemplateColumns={{lg:'repeat(3,1fr)',md:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={'20px'} alignContent={'center'}>
         {
            arr.map((el) =>{
                return <ImageCard data={el} key={el.id}/>
            })
         }
        </Box>
      </Box>
    </>
  );
};

export default Class;
