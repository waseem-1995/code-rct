import { Box, Text } from "@chakra-ui/react";
import React from "react";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  let arr = [
    {
      id: 1,
      image:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
      name: "Mr Json Clay",
      role: "Sports instructor",
    },
    {
      id: 2,
      image:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",
      name: "Mr Json Clay",
      role: "Sports instructor",
    },
    {
      id: 3,
      image:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
      name: "Mr Json Clay",
      role: "Sports instructor",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Mr Json Clay",
      role: "Sports instructor",
    },
  ];
  return (
    <>
      <Box w="100%" h={{ lg: "700px", md: "1200px", base: "auto" }} mt="30px">
        <Box mt="20px">
          <Text
            color={"#423F8D"}
            fontWeight={800}
            fontSize={"40px"}
            textAlign={"center"}
            fontFamily={"Fredoka One,cursive"}
          >
            Expert Teachers
          </Text>
        </Box>
        <Box w="50%" m={"auto"} mt="20px">
          <Text color={"#423F8D"} fontSize={"18px"} textAlign={"center"}>
            Our set he for firmament morning sixth subdue today the darkness
            creeping gathered divide our let god moving today. Moving in fourth
            air night bring upon lesser subdue.
          </Text>
        </Box>
        <Box
          w={{ lg: "80%", md: "70%", base: "50%" }}
          m={"auto"}
          mt="40px"
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(4,1fr)",
            md: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={"20px"}
          alignContent={"center"}
        >
          {arr.map((el) => {
            return <TeacherCard data={el} key={el.id} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Teachers;
