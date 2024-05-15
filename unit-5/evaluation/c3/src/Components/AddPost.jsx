import React, { useState } from "react";
import "./CSS Files/AddPost.css";
import { addData } from "../Redux/action";
import { useDispatch } from "react-redux";

export const AddPost = () => {
  const dispatch = useDispatch()
const [title,setTitle] = useState("")
const handleChange = (e) => {
  setTitle(e.target.value)
}
const handleAdd = () => {
  dispatch(addData(title))
}
  return (
    <div className="addPostWrapper">
      <textarea
        className="addPostTextArea"
        cols="40"
        rows="3"
        maxLength="20"
        placeholder="What's happening?"
        data-testid='addTextArea'
        onChange={handleChange}
      ></textarea>
      <div className="addPostBtnWrapper">
        <button data-testid='addPostBtn' className="addPostBtn" onClick={handleAdd}>
          Tweet
        </button>
      </div>
    </div>
  );
};
