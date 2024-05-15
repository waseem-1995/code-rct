import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts,fetchPost, toggleStatus } from "../Redux/action";
import "./CSS Files/Post.css";
import PerPost from "./PerPost";

const Posts = () => {
const dispatch = useDispatch();
const posts = useSelector(state => state.posts);
useEffect(() => {
dispatch(fetchPost)
},[]);
const handleToggle = (id,liked) => {
dispatch(toggleStatus(id,liked))
}
  return (
    <div className="postsWrapper">
      <div style={{ position: "relative" }}>
        <h1 style={{ textAlign: "center" }}>Posts</h1>
      </div>
      {/* map through the posts here, inside the PerPost component. Also, take care of showing the Posts based on the Pagination data */}
      {posts.map((el)=>{
        return <PerPost key={el.id} title={el.title} liked={el.liked} id={el.id} handleToggle={handleToggle}/>
      })}
    </div>
  );
};

export default Posts;
