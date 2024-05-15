
import LoadingIndicator from "./LoadingIndicator.jsx";
import {useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard.jsx";
import Pagination from "./Pagination";

const fetchRestaurant=async({page=1})=>{
  return fetch( `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
  .then((res) => res.json())
  
};



function Restaurants() {
  const [isloading, setLoading]=useState(true);
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(1);

  useEffect(()=>{
    getRestaurantData(page);
  },[page])

  function getRestaurantData (page){
      setLoading(true);
      fetchRestaurant({page})
      .then((res)=>{
        setData(res)
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false)
      });
  };

  function handleClick(val){
    setPage(val)
    //console.log(val)
    getRestaurantData(val)
  }

  if(isloading){
    return <LoadingIndicator />;
  }
  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
      
      {data?.data?.map((e)=>(
        <RestaurantCard image={e.image} name={e.name} number_of_votes={e.number_of_votes} price_starts_from={e.price_starts_from} rating={e.rating} type={e.type}/>
      ))}
      </div>
      <div>
        <Pagination total={data.totalPages} current={page} onChange={(value)=>setPage(value)} />
      </div>
    </div>
  );
}

export default Restaurants;
