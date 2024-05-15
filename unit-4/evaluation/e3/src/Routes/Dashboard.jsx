import Loader from "../Components/Loader";
import React, {useEffect} from "react";
import { useState,useContext } from "react";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination"

const getProducts =({page=1, sortBy="asc"})=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&orderBy=${sortBy}&limit=10`)
  .then((res)=>res.json());
};

function Dashboard() {

  const {authState,LogoutUser}=useContext(AuthContext);
  const [loading,setLoading]=useState(false);

  const [products,setProducts]=useState([])
  const [totalPages,setTotalPages]=useState(1);
  const [page,setPage]=useState(1);
  const [sortBy,setSortBy]=useState("asc")
  const [error,setError]=useState(false)

  useEffect(()=>{
    setLoading(true)

    getProducts({
      page,
      sortBy
    })
    .then(res=>{
      setProducts(res.data);
      setLoading(false)
      setTotalPages(res.totalPages)
    })
    .catch(err=>{
      setError(true)
    })
  }, [page,sortBy])
  console.log(products);

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={LogoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" disabled={sortBy==="asc"} onClick={()=>setSortBy("asc")}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={sortBy==="desc"} onClick={()=>setSortBy("desc")} >Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination current={page} totalPage={totalPages} onChange={page=>setPage(page)}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Product Listing, remember to show loading indicator when API is loading */}
        {loading? <Loader />:<ProductList products={products && products}/>}
      </div>
   
    </div>
  );
}

export default Dashboard;



 