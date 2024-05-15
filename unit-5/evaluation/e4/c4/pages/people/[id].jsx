import React from 'react'

const SingleUser = ({data}) => {
    console.log(data)
  return (
    <>
    <div>SingleUser</div>
    UserId:{data.useID}
    {data.map((el)=>{
        return(
            <>
            
            <div key={el.id}>{el.title}</div>
            </>
        ) 
    })}
    
    </>
    
  )
}

export default SingleUser


export async function getStaticPaths() {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let data = await res.json()
    
    return {
      paths: data.map((item) => ({
        params: {id: item.id.toString() } ,
      })),
         
      
      fallback: false,
    };
  }

  export async function getStaticProps(context) {
    
    let{
        params:{id},
    } = context;
    let res = await fetch(` https://jsonplaceholder.typicode.com/users/${id}/todos`);
    let data = await res.json()
    
    return {
      props: {data}, 
    }
  }