import UserCard from '@/components/UserCard';
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'


const people = ({data}) => {
  
  return (
    <>
    <div>people</div>
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
    {data.map((el)=>{
      return <UserCard key={el.id} name={el.name} username={el.username} address={el.address} id={el.id}/>
    })}
    </Grid>
    
    </>
    
  )
}

export default people;

export async function getStaticProps(context) {
  let res=await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  return {
    props: {data}, 
  }
}