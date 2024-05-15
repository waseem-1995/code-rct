import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const TeacherCard = ({ data }) => {
  return (
    <Box w="100%" h="400px">
      <Image src={data.image} w="100%" h="70%" borderRadius={"20px"}></Image>
      <Text
        textAlign={"center"}
        ml="10px"
        mt="10px"
        fontSize="20px"
        fontFamily={"Fredoka One,cursive"}
        color={"#423F8D"}
        fontWeight={800}
      >
        {data.name}
      </Text>
      <Text textAlign={"center"} ml="5px" mt="10px" fontSize={"18px"}>
        {data.role}
      </Text>
    </Box>
  );
};

export default TeacherCard;