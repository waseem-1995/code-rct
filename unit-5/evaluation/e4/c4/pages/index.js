import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {Text,Center} from "@chakra-ui/react"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div style={{width:"80%",margin:"auto"}}>
        <Center>
        <Text fontSize={"4xl"}>
        Welcome to the C4 evaluation for
RCT-201
        </Text>
        </Center>
        
        <Center marginTop={"20px"}>
          You need to create an application similar to the one that you are looking right now. There 2 pages that needs to be created apart from the current homepage.
          </Center>
          <Center marginTop={"20px"}>One path is /people and another a dynamic route /people/[id]</Center>
      </div>
    </>
  )
}
