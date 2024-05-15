import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook,BsPinterest,BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <>
        <Box w="100%" h={{lg:"500px", md:"1000px"}}  bg="#2952a3">
            <Box
            w="80%"
            h="80%"
            m="auto"       
            display={"flex"}
            flexDirection={{lg:"row", md:"column", sm:"column", base:"column"}}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
                <Box  w={{lg:"35%",base:"80%"}}>
                   <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png' ></Image>
                    <Text color={'white'}  mt="40px">
                    Users and submit their own items. You can create different
                    packages and by connecting with your PayPal or Stripe account
                    charge users for registration.
                    </Text>
                    <Box display={'flex'} gap={'10px'}  mt="40px">
                        <AiFillTwitterCircle color="white"/>
                        <BsFacebook color="white"/>
                        <BsPinterest color="white"/>
                        <BsLinkedin color="white"/>
                    </Box>
                </Box>
                <Box  w={{lg:"25%",base:"80%"}}>
                    <Text mt="20px" color="white" as='b'>Quick Links</Text>
                    <Text mt="20px" color="white" >Classess</Text>
                    <Text mt="20px" color="white" >Join with us</Text>
                    <Text mt="20px" color="white" >About</Text>
                    <Text mt="20px" color="white" >Blog</Text>
                    <Text mt="20px" color="white" >Events</Text>
                </Box>
                <Box  w={{lg:"25%",base:"80%"}}>
                    <Text color="white" as='b' >About Us</Text>
                    <Text mt="20px" color="white" >Classess</Text>
                    <Text mt="20px" color="white" >Join with us</Text>
                    <Text mt="20px" color="white" >About</Text>
                    <Text mt="20px" color="white" >Blog</Text>
                    <Text mt="20px" color="white" >Events</Text>
                </Box>
            </Box>   
            <Text color="white" textAlign={"center"}>
                Copyright ©2023 All rights reserved | This template is made with by
                Colorlib
            </Text> 
        </Box>
    </>
  )
}

export default Footer